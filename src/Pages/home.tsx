import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Components/Button';
import Filme from '../Components/Filme';

//@ts-ignore
import logo from '../assets/shuffle.svg';

import './styles/home.scss';

import api from '../Services/api';

export default function Home({ url }: any) {

  const [searchFilme, setSearch] = useState(false);
  const [filme, setFilme] = useState();
  const history = useNavigate();

  const SearchError: any = {
    title: 'Ops, hoje não é dia de assistir filme. Bora codar!',
    poster_path: 'data:image/jpeg;base64,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',
    overview: '',
    error: true
  };

  async function handleSelectFilme() {

    await api.get(`${url}api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`)
      .then((response) => {

        if (response.status === 200) {
          const filmeSelect = response.data.results[Math.floor(Math.random() * response.data.results.length)];
          setFilme(filmeSelect);
          setSearch(true);
        } else {
          setFilme(SearchError);
          setSearch(false);
        }
      })
      .catch((err) => {
        setFilme(SearchError);
        setSearch(false);
      });

  }

  return (
    <div className="container" style={{ height: `${searchFilme ? '100vh' : '90vh'}` }}>
      <div className="header">
        <img src={logo} alt="RocketFlix" />
        <h2>Não sabe o que assistir?</h2>
      </div>

      {filme ? <Filme items={filme} /> : ''}

      <div className="buttonEncontrar">
        <Button
          onClick={handleSelectFilme}
        >
          <img src={logo} alt="Rocketflix" />
          Encontrar filme
        </Button>
      </div>
      <div className="description">
        Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.
      </div>
      <div className="backHome">
        <Button
          onClick={() => history('/')}
          isOutlined = {true}
        >
          Voltar
        </Button>
      </div>
    </div>
  );
}