import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import PlayerContextProvider from './context/PlayerContext'

// basename="/philip_shvalb/Spotify-Clone"

createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter > 
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
