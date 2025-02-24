import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DataBase from './DataBase.jsx'
import Form from './Components/Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <DataBase/>
    {/* <Form/> */}
  </StrictMode>,
)
