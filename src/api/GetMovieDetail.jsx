export const getMovieDetail = async ({params})=>{
    const { movieId } = params;
    try {
        const response  = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${import.meta.env.VITE_SECRET_API_KEY}&`);

        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
      console.log(error)
    }
  
  
  
  } 