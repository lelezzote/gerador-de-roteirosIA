import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'
import Formulario from './components/Formulario.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Formulario/>
  </StrictMode>,
)
