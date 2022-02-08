import React from 'react';

import Card from '../Card/Card'

import './Cast.scss'

export default function Cast(props) {


    function showCast() {
        if (props.cast !== undefined) {
            return props.cast.map((item, i) => {
                return <div key={i} className="cast">
                    <Card className="cast-card">
                        <div style={{ width: '175px' }}>
                            <img style={{ maxWidth: '100%', maxHeight: '100%', padding: '2px' }} src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt="poster" />
                        </div>
                        <div>
                            <p style={{ fontWeight: 'bold' }}>{item.original_name}</p>
                            <p>{item.character}</p>
                        </div>

                    </Card>
                </div>
            })
        }
    }

    return (
        <div style={{ paddingLeft: '40px', paddingRight: '40px', marginTop: '40px' }}>
            <div>
                <h2>Elenco Original</h2>
            </div>
            <div className="layout-cast">
                {showCast()}
            </div>
        </div>
    )
}