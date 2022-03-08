import React from 'react';
import './Trailler.scss'

export default function Trailler(props) {

    console.log('->',props)

    return (
        <div className="trailler">
            <h2>Trailler</h2>
            {console.log('AAA',props.trailer)}
            {props.trailer[0].key &&

            <iframe
                title={props.trailer[0].key}
                id="ytplayer"
                type="text/html"
                width="907"
                height="510"
                src={`http://www.youtube.com/embed/${props.trailer[0].key}?autoplay=0&origin=http://example.com`}
                frameborder="0" />}
        </div>
    )
}