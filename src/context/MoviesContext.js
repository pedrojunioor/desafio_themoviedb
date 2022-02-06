import React, { createContext, useState, useEffect } from 'react';
import api from '../config/api'
import history from '../history'

const Context = createContext();

function MoviesProvider({ children }) {

    const [movies, setMovies] = useState(undefined)
    const [movie, setMovie] = useState(undefined)
    const [currentPage, setCurrentPage] = useState(1)
    const [filters, setFilters] = useState([
        {
            filter: 'Pedro',
            active: false
        },
        {
            filter: 'Junior',
            active: false
        },
    ])

    function handleActive(filter) {
        let result = filters.map(item => {
            if (item.filter === filter) {
                return {
                    filter: filter,
                    active: !item.active
                }
            }
            else {
                return {
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
            console.log(result.data)
            setMovies(result.data.results)
        }).catch(error => {
            console.log(error)
        })
    }

    function handleJoinMovie(id) {
        api.get(`movie/${id}?api_key=${API_KEY}&page=${currentPage}`).then(result => {
            setMovie(result.data)
            history.push(`movies/${id}`)
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
            handlePageUp,
            handlePageDown,
            handlePage,
            handleActive,
            getPopularMovies,
            handleJoinMovie
        }}>
            {children}
        </Context.Provider>
    );
}

export { Context, MoviesProvider };
