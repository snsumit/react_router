import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from './Card';




const Movies = () => {
   const data  = useLoaderData();
   console.log(data)
 
 
    return (
     
       <ul className='container grid grid-four-cols' >
           {
             data &&  data.data.Search.map((currMovie)=>{
                return <Card key={currMovie.imdbID} currMovie={currMovie} />
            })
           }
       </ul>
     
  )
}

export default Movies
