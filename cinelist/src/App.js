import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Principal from './pages/Principal';

const LazyMovieList = React.lazy(() => import('../src/pages/Principal/index'));

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Principal />}/>
          <Route path='/movie/:id'/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
