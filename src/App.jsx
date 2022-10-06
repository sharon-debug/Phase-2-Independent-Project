import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { StockOverviewPage } from './Pages/StockOverviewPage';
import { StockDetailsPage } from './Pages/StockDetailsPage';
import './App.css';


function App() {
  return (
    <main className='container'>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<StockOverviewPage/>} />
      <Route path = "/detail/:symbol" element = {<StockDetailsPage/>}/>

     
    </Routes>
    </BrowserRouter>
    
    </main>
  );
}

export default App;
