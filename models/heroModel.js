let heroList = []
let heroId = 1
const API_URL = 'https://akabab.github.io/superhero-api/api/all.json'
const axios = require('axios')

exports.create = (data) => {
    const newHero = { id: heroId++, ...data }
    heroList.push(newHero)
    return newHero
}

exports.getAll = () => {
    return heroList
}

exports.getById = (id) => {
    return heroList.find(h => h.id == id)
}

exports.update = (id, data) => {
    const index = heroList.findIndex(h => h.id == id)
    if (index === -1) return null
    heroList[index] = { id: parseInt(id), ...data }
    return heroList[index]
}

exports.delete = (id) => {
    const index = heroList.findIndex(h => h.id == id)
    if (index === -1) return false
    heroList.splice(index, 1)
    return true
}

exports.addFavorite = (data) => {
    const favHero = { id: heroId++, ...data, favorite: true }
    heroList.push(favHero)
    return favHero
}

exports.getFavoriteHeroes = () => {
    return heroList.filter(hero => hero.favorite)
}

exports.fetchHero = async () => {
    return {
        id: data.id,
        name: data.name,
        fullname: data.biography.fullName,
        strength: data.powerstats.strength,
        image: data.images.md
    }
}

exports.getFromApi = async (id) => {
    const response = await axios.get(`${API_URL}`)
    const data = response.data

    return data.find(hero => hero.id == id)
}