import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './Pages/home';
import Categories from './Pages/categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                  element={<Categories />} />
        <Route path="/trending"          element={<Home url="/trending/all/week?" />}                     />
        <Route path="/originals"         element={<Home url="/discover/tv?with_network=213&" />}          />
        <Route path="/top"               element={<Home url="/trending/all/week?watch_region=pt-br&" />}  />
        <Route path="/topreated"         element={<Home url="/movie/top_rated?" />} />
        <Route path="/genre/action"      element={<Home url="/discover/movie?with_genres=28&" />}         />
        <Route path="/genre/comedy"      element={<Home url="/discover/movie?with_genres=35&" />}         />
        <Route path="/genre/horror"      element={<Home url="/discover/movie?with_genres=27&" />}         />
        <Route path="/genre/romance"     element={<Home url="/discover/movie?with_genres=10749&" />}      />
        <Route path="/genre/documentary" element={<Home url="/discover/movie?with_genres=99&" />}         />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
