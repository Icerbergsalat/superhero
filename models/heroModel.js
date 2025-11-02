let heroList = []
let heroId = 1
const API_URL = 'https://akabab.github.io/superhero-api/api/all.json'

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

exports.fetchHero = async (name) => {
    const response = await axios.get(`${API_URL}`)
    const data = response.data

    return {
        id: data.id,
        name: data.name,
        fullname: data.biography.fullName,
        strength: data.powerstats.strength,
        image: data.images.md
    }
}