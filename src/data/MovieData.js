const key = "9a27abc841afe57d0a7e58666f20ac7d"
const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`
}
export default requests
