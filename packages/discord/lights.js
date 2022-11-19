const huejay = require('huejay')

const hueclient = new huejay.Client({
  host: process.env.HUE_IP,
  username: process.env.HUE_USERNANE,
  port: 80,
})

const LightIDs = []

const getAllLightIDs = async () => {
  if (LightIDs.length === 0) {
    const lights = await hueclient.lights.getAll()
    for (let light of lights) {
      LightIDs.push(light.id)
    }
  }
  return LightIDs
}

const toggleLights = async () => {
  const IDs = await getAllLightIDs()
  IDs.forEach(async id => {
    await hueclient.lights.getById(id).then(light => {
      light.on = !light.on
      return hueclient.lights.save(light)
    })
  })
}

module.exports = {
  toggleLights,
}
