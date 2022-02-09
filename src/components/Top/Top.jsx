import React from 'react';
import { Link } from 'react-router-dom'
import './Top.scss';

const Top = () => {
    return (
        <div className="top-header">
            <Link to='/'>
                <div style={{height: '24px', width: '184px'}}>
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" />
                </div>
            </Link>
        </div>
    )
}

export default Top