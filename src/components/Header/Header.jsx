import React, { useContext, useEffect, useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { Context } from '../../context/MoviesContext';
import api from '../../config/api';


const Header = () => {

    const { filters, handleActive, movies, getPopularMovies} = useContext(Context);

    useEffect(() =>{
        console.log(filters)
    },[filters])
    
    function showFilter() {
        return filters.map((item, i) => {
            if (item.active === true) {
                return <button
                    className="button-filter active"
                    onClick={() => { handleActive(item.filter) }}
                    >
                    <div style={{display:'flex', gap: '10px', alignItems: 'center', justifyContent:'space-around'}}>
                        <p>
                            {item.filter}
                        </p>
                        <img src="https://img.icons8.com/external-free-is-layf-royyan-wijaya/24/000000/external-circle-revamp-3-free-is-layf-royyan-wijaya-5.png" />
                    </div>
                </button>
            }
            else {
                return <button
                    className="button-filter"
                    onClick={() => { handleActive(item.filter) }}>
                    <div>
                        <p>
                            {item.filter}
                        </p>
                    </div>
                </button>
            }
        })
    }



    return (
        <div className="header">
            <div className="title">
                <span>Milhões de filmes, séries e pessoas para descobrir. Explore já.</span>
            </div>

            <p style={{ marginBottom: '20px' }}>Filtre por:</p>

            <div className="filters">
                {showFilter()}
            </div>
        </div>

    )
}

export default Header