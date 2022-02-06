import React from 'react';
import {Link} from 'react-router-dom'
import './Top.scss';

const Top = () =>{
    return(
        <div className="top-header">
            <Link to='/'>HOME</Link>
        </div>
    )
}

export default Top