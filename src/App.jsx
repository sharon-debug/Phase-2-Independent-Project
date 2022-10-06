import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { StockOverviewPage } from './Pages/StockOverviewPage';
import { StockDetailsPage } from './Pages/StockDetailsPage';
import './App.css';
import {WatchListContextProvider} from "./Context/WatchListContext"

function App() {
  return (
    <main className='container'>
      <WatchListContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<StockOverviewPage/>} />
      <Route path = "/detail/:symbol" element = {<StockDetailsPage/>}/>

     
    </Routes>
    </BrowserRouter>
    </WatchListContextProvider>
    
    </main>
  );
}

export default App;
