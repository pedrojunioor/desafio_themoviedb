import React, { useContext, useEffect, useState } from 'react';
import './HeaderDetails.scss';
import { Context } from '../../context/MoviesContext';
import history from '../../history'
import { showData } from '../../utils/showData'
import { showGenres } from '../../utils/showGenres'
import { showRuntime } from '../../utils/showRuntime'
import Recomendations from '../Recomendations/Recomendations'
import Cast from '../Cast/Cast'
import Trailler from '../Trailler/Trailler'

import api from '../../config/api'


const HeaderDetails = () => {

    let API_KEY = process.env.REACT_APP_API_KEY
    const { movie } = useContext(Context);

    const [cast, setCast] = useState(undefined)
    const [crew, setCrew] = useState(undefined)
    const [recommendations, setRecommendations] = useState(undefined)
    const [videos, setVideos] = useState(undefined)
    const [trailer,setTrailer] = useState(undefined)

    useEffect(() => {

        api.get(`movie/${movie.id}/recommendations?api_key=${API_KEY}`).then(result => {

            setRecommendations(result.data.results.slice(1, 7))
        }).catch(error => {
            console.log(error)
        })

        api.get(`movie/${movie.id}/videos?api_key=${API_KEY}`).then(result => {
            setVideos(result.data.results)
        }).catch(error => {
            console.log(error)
        })
        api.get(`movie/${movie.id}/credits?api_key=${API_KEY}`).then(result => {
            setCast(result.data.cast)
            setCrew(result.data.crew)
        }).catch(error => {
            console.log(error)
        })

    }, [movie])

    useEffect(() => {

        if (movie === undefined) {
            history.push('/')
        }
    }, [movie]);


    useEffect(() => {
        if (videos !== undefined) {
            let trailer = videos.filter(item => {
                if(item.name.includes('Trailer')){
                    return item
                }
            })
            setTrailer(trailer)
        }
    }, [videos])

    function showMetaInfo() {

        let infos = []

        let character = crew.filter(item => {
            if (item.job === "Characters") {
                return item
            }
        })
        infos = infos.concat(character)
        let director = crew.filter(item => {
            if (item.job === "Director") {
                return item
            }
        })
        infos = infos.concat(director)
        let writer = crew.filter(item => {
            if (item.job === "Writer") {
                return item
            }
        })
        infos = infos.concat(writer)

        return infos.map(item => {
            if (item.job === "Characters") {
                return <div>
                    <p style={{ fontWeight: 'bold' }}>{item.name}</p>
                    <p>Characters</p>
                </div>
            }
            else if (item.job === "Director") {
                return <div>
                    <p style={{ fontWeight: 'bold' }}>{item.name}</p>
                    <p>Director</p>
                </div>
            }
            else if (item.job === "Screenplay") {
                return <div>
                    <p style={{ fontWeight: 'bold' }}>{item.name}</p>
                    <p>Screenplay</p>
                </div>
            }
        })


    }

    return (
        <div>
            {movie &&
                <div>
                    <div className="header-details">

                        <div className="image">
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster" />
                        </div>
                        <div className="info">
                            <div className="info-details">
                                <span>{movie.title}</span>
                                <h4>{`${showData(movie.release_date)} - ${movie.original_language} - ${showGenres(movie)} - ${showRuntime(movie)}`}</h4>
                                <label htmlFor="">
                                    <progress value={movie.vote_average * 10} max="100">{movie.vote_average}</progress>
                                    {movie.vote_average * 10}% Avaliação dos usuários
                                </label>
                                <h3>Sinopse</h3>
                                <p>{movie.overview}</p>
                            </div>
                            <div className="info-details-tw">
                                {crew && showMetaInfo()}
                            </div>

                        </div>

                    </div>
                    <div >
                        {movie && <Cast cast={cast} />}
                    </div>
                    <div>
                        {trailer && <Trailler trailer={trailer}/>}        
                    </div>

                    <div >
                        {movie && <Recomendations recommendations={recommendations} />}
                    </div>

                </div>


            }
        </div>

    )
}

export default HeaderDetails