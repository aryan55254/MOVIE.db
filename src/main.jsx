import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'
import Trending from './Trending.jsx'
import Watchlist from './Watchlist.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter()[
  {
    path : '/',
    element : <App />,
    errorElement: <ErrorBoundary />,
    children : [
      { path : '/',
        element : <Home />

      },
      {
        path : '/trending',
        element : <Trending />
      },
      {
        path : '/watchlist',
        element : <Watchlist />
      }
    ]
  }
]
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
