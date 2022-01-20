import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import api from '../../Services/api';
import Video from '../Video'

import './style.scss';

type itemProps = {
  items: {
    id: number,
    poster_path: string,
    title: string,
    overview: string | null,
    media_type: string | null,
    error?: any,
  }
}

type videoPros = {
  name: string,
  key: string
}

export default function Filme({ items }: itemProps) {

  const [trailer, setTrailer] = useState<videoPros>();
  const [getTrailer, setGetTrailer] = useState(false);
  const [hover, setHover] = useState(false);

  async function handleTreiler() {

    const type = items.media_type === "movie" ? 'movie' : 'tv';

    await api.get(`${type}/${items.id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`)
      .then((response) => {
        if (response.status === 200) {
          if (response.data.results.length === 0) {
            setGetTrailer(false)
            setHover(false)
          } else {
            setTrailer(response.data.results[0])
            setGetTrailer(true)
          }
        } else {
          setGetTrailer(false)
          setHover(false)
        }
      })
      .catch((err) => {
        setGetTrailer(false)
        setHover(false)
      });

  }

  function viewTrailer(view: boolean) {
    if (view) {
      setHover(true)
    } else {
      setHover(false)
    }
  }

  useEffect(() => {
    handleTreiler();
  }, [items])

  useEffect(() => {

    viewTrailer(false)

  }, [items])

  return (
    <div className="containerFilme">
      <>
        <div
          className="posterFilme"
        >
          <img
            src={(typeof items.error !== 'undefined') ? `${items.poster_path}` : `https://image.tmdb.org/t/p/w300/${items.poster_path}`}
            alt={items.title}
            style={{
              display: hover === false ? '' : 'none'
            }}
            onMouseEnter={() => getTrailer ? viewTrailer(true) : ''}
          />
          {getTrailer && hover ?
            <div onMouseLeave={() => getTrailer ?  setHover(false) : ''}><Video src={trailer!.key} title={trailer!.name} width={500} height={450}/></div>
            : ``}

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