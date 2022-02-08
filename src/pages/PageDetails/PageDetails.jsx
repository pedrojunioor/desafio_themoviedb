import React, { useContext, useEffect } from 'react'
import HeaderDetails from '../../components/HeaderDetails/HeaderDetails'
import history from '../../history'

import { Context } from '../../context/MoviesContext'


export default function PageDetails() {

    const { movie } = useContext(Context);


    return (
        <div >
           <HeaderDetails/>
        </div>
    )
}