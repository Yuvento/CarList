import React from 'react'
import CarList from './pages/CarList'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarDetail from './pages/CarDetail';
import { Provider } from 'react-redux';

import store from './redux';


const App = () => {
  return (
    <>
    <Provider store={store}>
          <BrowserRouter>
            <Routes>
                <Route path = '/cars' element={<CarList/>}/>
                <Route path = '/cars/:id' element={<CarDetail/>}/>
            </Routes>
          </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
