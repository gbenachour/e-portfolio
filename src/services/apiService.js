import axios from 'axios'

export async function getAnimeById(id) {
    try {
        const singleAnime = await axios.get(`https://api.jikan.moe/v4/anime/${id}`)
        return singleAnime.data.data
    } catch (err) {
        console.err(err)
    }

    return undefined
}

export async function getTopAnimes() {
    try {
        const topAnimes = await axios.get('https://api.jikan.moe/v4/top/anime')
        return topAnimes.data.data
    } catch (err) {
        console.err(err)
    }

    return undefined
}

export async function getAnimeBySearch(query) {
    try {
        const searchResults = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&limit=25`)
        return searchResults.data.data
    } catch (err) {
        console.err(err)
    }

    return undefined
}