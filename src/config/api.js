import axios from 'axios'


// https://api.themoviedb.org/3/movie/550?api_key=e5376c0571abae96ed3027c838c56405
const api =  axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api