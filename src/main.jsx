import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './AuthContext/authContext'
import { CurrentChatProvider } from './AuthContext/currentChatContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CurrentChatProvider>
        <App />
      </CurrentChatProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
