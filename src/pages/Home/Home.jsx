import React, { useContext, useEffect, useState } from 'react'
import './Home.scss'
import { Context } from '../../context/MoviesContext';
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import {showData} from '../../utils/showData'

function Home() {

    const { ativos, movies, getPopularMovies, currentPage, handlePageUp, handlePageDown, handlePage, handleJoinMovie } = useContext(Context);

    useEffect(() => {
        getPopularMovies();
    }, [currentPage])

    

    function range(size, startAt = 0) {
        return [...Array(size).keys()].map(i => i + startAt);
    }

    function barPagination(currentPage) {

        let pages = 1;
        if (currentPage <= 3) {
            pages = range(5, 1)
        }
        else if (currentPage > 3 && currentPage <= 995) {
            pages = range(5, currentPage - 2)
        }
        else if (currentPage > 3 && currentPage > 995) {
            pages = range(5, 955)
        }

        return pages.map(item => {
            if (item === currentPage) {
                return <button className="button-pagination atual"
                    onClick={() => handlePage(item)}
                >
                    {item}
                </button>
            }
            else {
                return <button className="button-pagination"
                    onClick={() => handlePage(item)}
                >
                    {item}
                </button>
            }
        })

    }

    function showMovies() {
        return movies.map((item, i) => {
            
            return <button
                key={i} className="movie"
                onClick={e => handleJoinMovie(item.id)}>
                <Card>
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="poster" />
                    <p style={{ fontWeight: 'bold' }}>{item.original_title}</p>
                    <p style={{ fontWeight: 'bold', color: '#646464' }}>{showData(item.release_date)}</p>
                </Card>
            </button>
        })
    }

    return (
        <div className="Home">
            <Header />

            <div className="layout">
                {movies && showMovies()}
            </div>

            <div>

       
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', paddingBottom: '50px'}}>

                    {currentPage > 1 && <button className="button-pagination" onClick={handlePageDown}> &lt;  </button>}
                    {barPagination(currentPage)}
                    {currentPage < 1000 && <button className="button-pagination" onClick={handlePageUp}> &gt;  </button>}
                   

                </div>
            </div>

        </div>
    );
}


export default Home
