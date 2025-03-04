import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './Auth.jsx'
import DashboardS from './Students/DashboardS.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/dashboard-s/:menu' element={<DashboardS />} />
    </Routes>
  </BrowserRouter>
)
