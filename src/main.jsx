import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Root from './pages/Root.jsx'
import BookItem from './pages/BookItem.jsx'

const Routes = createHashRouter([
  {
    path : '/',
    element : <Root />,
    children:[
      {
        path : '',
        element : <Home/>
      },
      {
        path : '/BookItem/:id',
        element : <BookItem/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routes}/>
  </StrictMode>,
)
