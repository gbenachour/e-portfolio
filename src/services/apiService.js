import axios from 'axios'

export async function getAnimeById(id) {
    try {
        const singleAnime = await axios.get(`https://api.jikan.moe/v4/anime/${id}`)
        return {data: singleAnime.data.data, status: singleAnime.status} 
    } catch (err) {
        console.error(err)
        return {data: undefined, status: err.response.status}
    }
}

export async function getTopAnimes() {
    try {
        const topAnimes = await axios.get('https://api.jikan.moe/v4/top/anime?limit=8')
        return {data: topAnimes.data.data, status: topAnimes.status}
    } catch (err) {
        console.error(err)
        return {data: undefined, status: err.response.status}
    }

}

export async function getAnimeBySearch(query) {
    try {
        const searchResults = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&limit=10`)
        return {data: searchResults.data.data, status: searchResults.status} 
    } catch (err) {
        console.error(err)
        return {data: undefined, status: err.response.status}
    }
}