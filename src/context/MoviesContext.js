import React, { createContext, useState, useEffect } from 'react';
import api from '../config/api'
import history from '../history'

const Context = createContext();

function MoviesProvider({ children }) {

    const [movies, setMovies] = useState(undefined)
    const [moviesFiltered,setMoviesFiltered] = useState(undefined)
    const [movie, setMovie] = useState(undefined)
    const [currentPage, setCurrentPage] = useState(1)
    const [genres, setGenres] = useState(undefined)

    useEffect(() => {
        if (genres === undefined) {
            api.get(`genre/movie/list?api_key=${API_KEY}`).then(result => {
                setGenres(result.data.genres)
            }).catch(error => {
                console.log(error)
            })
        }
    })

    const [filters, setFilters] = useState([])

    const [ativos, setAtivos] = useState([])

    useEffect(() => {

        let ativos = filters.filter(item => {
            if (item.active === true) {
                return item
            }
        })
        let idAtivos = ativos.map(item => {
            return item.id
        })
        setAtivos(idAtivos)
    }, [filters])

    useEffect(() => {
        if (genres !== undefined) {
            let filters = genres.map(item => {
                return {
                    id: item.id,
                    filter: item.name,
                    active: false
                }
            })
            setFilters(filters)
        }
    }, [genres])


    function handleActive(filter) {
        let result = filters.map(item => {
            if (item.filter === filter) {
                return {
                    id: item.id,
                    filter: filter,
                    active: !item.active
                }
            }
            else {
                return {
                    id: item.id,
                    filter: item.filter,
                    active: item.active
                }
            }
        })
        setFilters(result)
    }

    let API_KEY = process.env.REACT_APP_API_KEY

    useEffect(() => {
        if (movies === undefined) {
            getPopularMovies()
        }
    }, [movies])

    function getPopularMovies() {
        api.get(`movie/popular?api_key=${API_KEY}&page=${currentPage}`).then(result => {
            setMovies(result.data.results)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        setMoviesFiltered(filterMovies())
    }, [ativos])

    function filterMovies() {
        if (ativos.length > 0) {
            if (movies !== undefined) {
                
                let filtered = movies.filter(item => {
                    for(let i = 0; i < item.genre_ids.length; i++){
                        if(ativos.includes(item.genre_ids[i])){
                            return item
                        }
                    }
                })
                return filtered
            }
        }
        else {
            return getPopularMovies();
        }
    }




    function handleJoinMovie(id) {
        api.get(`movie/${id}?api_key=${API_KEY}&page=${currentPage}`).then(result => {
            setMovie(result.data)
            history.push(`movies/${id}`)
        }).catch(error => {
            console.log(error)
        })
    }

    function handleJoinMovieDefault(id) {
        api.get(`movie/${id}?api_key=${API_KEY}&page=${currentPage}`).then(result => {
            setMovie(result.data)
        }).catch(error => {
            console.log(error)
        })
    }

    function handlePageUp() {
        if (currentPage < 1000) {
            setCurrentPage(currentPage + 1)
        }
    }

    function handlePageDown() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function handlePage(delta) {
        setCurrentPage(delta)
    }

    return (
        <Context.Provider value={{
            filters,
            movies,
            movie,
            currentPage,
            genres,
            ativos,
            moviesFiltered,
            handlePageUp,
            handlePageDown,
            handlePage,
            handleActive,
            getPopularMovies,
            handleJoinMovie,
            handleJoinMovieDefault
        }}>
            {children}
        </Context.Provider>
    );
}

export { Context, MoviesProvider };
