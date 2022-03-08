import React, { useEffect, useState } from 'react';
import './Trailler.scss'

export default function Trailler(props) {


    const [trailer, setTrailer] = useState(undefined)
    useEffect(() => {
        if (trailer === undefined) {
            if (props.trailer !== undefined) {
                setTrailer(props.trailer)
            }
        }
    }, [trailer,props.trailer])


    return (
        <div>

            {trailer !== undefined &&
                <div className="trailler">
                    <h2>Trailler</h2>
                    {trailer[0].key &&

                        <iframe
                            title={trailer[0].key}
                            id="ytplayer"
                            type="text/html"
                            width="907"
                            height="510"
                            src={`https://www.youtube.com/embed/${trailer[0].key}?autoplay=0&origin=http://example.com`}
                            frameborder="0" />}
                </div>
            }
        </div>
    )
}