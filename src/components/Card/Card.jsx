import './Card.scss'
import React from 'react'

function Card(props){
    return(
        <div className="Card" style={{borderColor: props.color || '#000'}}>
            <div className="Conteudo" >
                {props.children}
            </div>
            
        </div>
    )
}
 
export default Card