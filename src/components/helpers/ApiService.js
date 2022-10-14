const API_KEY = 'c2bd0e8f35d699f91ecbdfbe16cb6859';
const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchMovieById = async (value) => {
    try {
        const res = await fetch(`${BASE_URL}/movie/${value}?api_key=${API_KEY}&language=en-US`)
        if (!res.ok) {
          throw new Error(res.status);
      }
    const response = await res.json()
    return response 
    } catch (error) {
        console.log('error :>> ', error);
    }

}
export const fetchCast = async (value) => {
    try {
        const res = await fetch(`${BASE_URL}/movie/${value}/credits?api_key=${API_KEY}&language=en-US`)
    //     if (!res.ok) {
    //       throw new Error(res.status);
    //   }
    const response = await res.json()
    return response 
    } catch (error) {
        console.log('error :>> ', error);
    }
 
}
export const fetchReviews= async (value) => {
    try {
        const res = await fetch(`${BASE_URL}/movie/${value}/reviews?api_key=${API_KEY}&language=en-US`)
    //     if (!res.ok) {
    //       throw new Error(res.status);
    //   }
    const response = await res.json()
    return response 
    } catch (error) {
        console.log('error :>> ', error);
    }
 
}
export const fetchAllVideo = async () => {
try {
    const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)

     if (!res.ok) {
          throw new Error(res.status);
      }
    const response = await res.json()
  
return response
} catch (error) {
    console.log('error :>> ', error);
}

}
export const fetchByQuery =async(query) => {
     try {
 
         const res=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`)
        if (!res.ok) {
          throw new Error(res.status);
      }
    const response = await res.json()
    return response 
    } catch (error) {
        console.log('error :>> ', error);
    }
}