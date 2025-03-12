import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './Auth.jsx'
import DashboardS from './Students/DashboardS.jsx'
import CourseInfo from './Students/CourseInfo.jsx'
import DashboardT from './Teachers/DashboardT.jsx'
import CreateClass from './Teachers/CreateClass.jsx'
import Class from './Teachers/Class.jsx'
import DeskTranslation from './Teachers/DeskTranslation.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/dashboard-s/:menu' element={<DashboardS />} />
      <Route path='/join-course' element={<CourseInfo />} />
      <Route path='/dashboard-t/:menu' element={<DashboardT />}  />
      <Route path='/create-class' element={<CreateClass />} />
      <Route path='/class/:id' element={<Class />} />
      <Route path='/desk' element={<DeskTranslation />} />
    </Routes>
  </BrowserRouter>
)
