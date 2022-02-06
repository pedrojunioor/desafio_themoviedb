import React, { useContext } from 'react'

import { Context } from '../../context/MoviesContext'


export default function PageDetails() {


    // const { filters, handleActive, movie, getPopularMovies, currentPage, handlePageUp, handlePageDown, handleJoinMovie } = useContext(Context);


    // const { comicSelected } = useContext(Context);
    // console.log(comicSelected.data.results[0])

    return (
        <div  >
            <h1>DETALHES</h1>
            {/* {console.log('movie',movie)} */}
            {/* <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                <div style={{ display: 'flex', width:'40%'}}>
                    <Card >
                        <img src={`${comicSelected.data.results[0].thumbnail.path}.${comicSelected.data.results[0].thumbnail.extension}`} alt="AAA" />
                    </Card>
                </div>
                {comicSelected && <div >
                    <h1>Title: {comicSelected.data.results[0].title}</h1>
                    <h2>Published: {comicSelected.data.results[0].dates[0].date.split('T')[0]}</h2>
                    <h2>Creators: {comicSelected.data.results[0].creators.items[0].name}</h2>
                    <h2>Price : ${comicSelected.data.results[0].prices[0].price}</h2>
                </div>}
            </div> */}
        </div>
    )
}