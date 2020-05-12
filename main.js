require('dotenv').config()

const tinify = require('tinify')
tinify.key = process.env.API_KEY

// tinify.fromFile('oldImg/plato34.png').toFile('newImg/optimized.png')
//you will need a image
const source = tinify.fromFile('oldImg/plato34.png')
const resized = source.resize({
  method: 'scale',
  width: 600,
})
resized.toFile('newImg/optimized.png')
