import React from 'react';

import './Card.scss';

function Card({ data }) {
    return (
        <div className="card">
            <h2>{data.title}</h2>
            <div className="media">
                {
                    data.media?.map((link) => {
                        return <img src={link} />
                    })
                }
            </div>
            <p className="description" >{data.description}</p>
            <div className="tools">
                <h3>Tools:</h3>
                <p>{data.tools?.join(', ')}</p>
            </div>
            <div className="links">
                <h3>Links:</h3>
                {
                    data.links?.map((link) => {
                        return <a href={link.url}>{link.title}</a>
                    })
                }
            </div>
        </div>
    );
}

export default Card;