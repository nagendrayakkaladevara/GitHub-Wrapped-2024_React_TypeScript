import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Footer from './components/customComponents/footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Footer /> 
  </StrictMode>,
)
