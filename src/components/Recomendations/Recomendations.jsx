import React from 'react';

import Card from '../Card/Card'
import { showData } from '../../utils/showData'

import './Recomendations.scss'

export default function Recomendations(props) {


    function showRecommendations() {
        if (props.recommendations !== undefined) {
            return props.recommendations.map((item, i) => {
                return <div key={i} className="recommendations">
                    <Card>
                        <div style={{ width: '175px', height: '264px'}}>
                            <img style={{ width: '100%', height: '100%', objectFit:'cover' }} src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="poster" />
                        </div>
                        <p style={{ fontWeight: 'bold' }}>{item.original_title}</p>
                        <p style={{ fontWeight: 'bold', color: '#646464' }}>{showData(item.release_date)}</p>
                    </Card>
                </div>
            })
        }
    }

    return (
        <div style={{ paddingLeft: '40px', paddingRight: '40px', marginTop: '40px' }}>
            <div>
                <h2>Recomendações</h2>
            </div>
            <div className="layout-recommendations">
                {showRecommendations()}
            </div>
        </div>
    )
}