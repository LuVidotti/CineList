import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Principal from './pages/Principal';
import PagFilme from './pages/PagFilme';

const LazyMovieList = React.lazy(() => import('../src/pages/Principal/index'));

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Principal />}/>
          <Route path='/movie/:id' element={<PagFilme />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
