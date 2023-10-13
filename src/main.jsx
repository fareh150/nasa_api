import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/Home.jsx'
import Potd from './pages/Potd/Potd.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Home />} />
          <Route path='/potd' element={<Potd />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
