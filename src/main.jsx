import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'
import Trending from './Trending.jsx'
import Watchlist from './Watchlist.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Browsing from './Browsing.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/trending',
        element: <Trending />
      },
      {
        path: '/watchlist',
        element: <Watchlist />
      },
      {
       path : '/browsing',
       element : <Browsing />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)