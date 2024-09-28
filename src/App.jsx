import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact, { contactHandle } from './components/Contact'
import AppLayout from './layout/AppLayout'
import ErrorPage from './components/ErrorPage'
import Movies from './components/Movies'
import { getDataFromApi } from './api/GetDataFromApi'
import MovieDetail from './components/MovieDetail'
import { getMovieDetail } from './api/GetMovieDetail'
import "./App.css"
const App = () => {
   




  const router = createBrowserRouter([
   {
     path:"/",
     element:<AppLayout />,
     errorElement:<ErrorPage/>,
     children:[
        {
        path:"/",
        element:<Home />
       },
       {
        path:"/about",
        element:<About/>
       },
       {
          path:"/movies",
          element:<Movies/>,
          loader:getDataFromApi,
       },
       {
        
        path:"/movies/:movieId",
        element:<MovieDetail/>,
        loader:getMovieDetail, 

       },
       {
        path:"/contact",
        element:<Contact/>,
        action:contactHandle,
       },
       
     ]
   },
   
   
   
])
  
  return <RouterProvider router = {router}/>
}

export default App
   