const axios = require('axios')
const baseUrl = 'https://como-fazer-barth.firebaseio.com/'
const auth = 'nbRpbwSSy0o2LOR0XVgSOfk5ArEYsTVrdOgT0E4W'

const list = async(key) => {
  const content = await axios.get(baseUrl+key+'.json?auth='+auth)
  if (content.data) {
    const objetos = Object
      .keys(content.data)
      .map(key => {
        return {
          id: key,
          ...content.data[key]
        }
      })
    return objetos
  }
  return []
}

const deleteOne = async(key, id) => {
  await axios.delete(`${baseUrl}${key}/${id}.json?auth=${auth}`)
}

const get = async(key, id) => {
  const content = await axios.get(`${baseUrl}${key}/${id}.json?auth=${auth}`)
  return {
      id,
      ...content.data
  }
}

const update = async(key, id, data) => {
  await axios.put(`${baseUrl}${key}/${id}.json?auth=${auth}`, data)
  return true
}

const create = async(key, data) => {
  await axios.post(baseUrl+key+'.json?auth='+auth, data)
  return true
}

module.exports = {
  list,
  deleteOne,
  get,
  update,
  create
}