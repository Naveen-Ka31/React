import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import PatientCard from './PatientCard.jsx'
import TodoApp from './TodoApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PatientCard /> 
    <TodoApp/>
   </StrictMode>
)
