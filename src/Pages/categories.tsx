import React from 'react';
import { useNavigate } from 'react-router-dom';

import './styles/categories.scss';

import Button from '../Components/Button';

export default function Categories() {

  const history = useNavigate();

  return (
    <>
      <div className="containerCategories">
        <h2 className="h2Principal">Select a movie choise method</h2>
        <div className="containerCategory">
          <div className="trending">
            <h2 className="title">Outhers</h2>
            <Button onClick={() => history('trending')} isOutlined={true}>Tranding</Button>
            <Button onClick={() => history('originals')} isOutlined={true}>Originais</Button>
            <Button onClick={() => history('top')} isOutlined={true}>Top Films</Button>
            <Button onClick={() => history('topreated')} isOutlined={true}>Top Reated</Button>
          </div>
          <div className="genres">
            <h2 className="title">Genres</h2>
            <Button onClick={() => history('/genre/action')} isOutlined={true}>Genre Action</Button>
            <Button onClick={() => history('/genre/comedy')} isOutlined={true}>Genre Comedy</Button>
            <Button onClick={() => history('/genre/horror')} isOutlined={true}>Genre Horror</Button>
            <Button onClick={() => history('/genre/romance')} isOutlined={true}>Genre Romance</Button>
            <Button onClick={() => history('/genre/documentary')} isOutlined={true}>Genre Documentary</Button>
          </div>
        </div>
      </div>
    </>
  );
}