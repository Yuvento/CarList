import React from 'react'
import CarList from './pages/CarList'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarDetail from './pages/CarDetail';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path = '/' element={<CarList/>}/>
          <Route path = '/cars/:id' element={<CarDetail/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App