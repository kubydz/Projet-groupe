import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StockProvider } from './Components/Stock';  // 🔥 Encapsule tout ici


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <StockProvider>  {/* ✅ Placer StockProvider ici pour englober toute l'app */}
      <App />
    </StockProvider>
  </StrictMode>,
)
