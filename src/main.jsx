import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DataBase from './DataBase.jsx'
import Form from './Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataBase/>
    <Form/>
  </StrictMode>,
)
