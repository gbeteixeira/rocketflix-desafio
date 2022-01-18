import React from 'react';

import './style.scss';

type itemProps = {
  items: any
}

export default function Filme({ items }: itemProps) {
  
  return (
    <div className="containerFilme">
        <>
          <div className="posterFilme">
            <img src={(typeof items.error !== 'undefined') ? `${items.poster_path}` : `https://image.tmdb.org/t/p/w300/${items.poster_path}`}alt={items.title}/>
          </div>
          <div className="infoFilme">
            <h3 className="title">
              {items.title}
            </h3>
            <span className="description">
              {items.overview}
            </span>
          </div>
        </>

    </div>
  );
}