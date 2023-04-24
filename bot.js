const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')
const axios = require('axios')
const API_KEY =
  '0b0e3f2d3ed7339120c5ee30ebbe89e8f09d9b46542faaf620f2d897f79fe0ea'

const bot = new Telegraf('6066598995:AAGVxsBYjP_oYHDX7yC7RWPfDzZHuwm5DT4')
bot.start(ctx => {
  ctx.reply('Welcome example')
})

bot.command('pricebtc', ctx => {
  axios
  const CURRENCY = 'BTC'

  // Símbolos de las monedas a las que deseas convertir el precio
  const CONVERT_TO = 'USD,EUR'

  // URL de la API
  const API_URL = `https://min-api.cryptocompare.com/data/price?fsym=${CURRENCY}&tsyms=${CONVERT_TO}&api_key=${API_KEY}`

  // Realiza la solicitud GET a la API
  axios
    .get(API_URL)
    .then(response => {
      ctx.reply(
        `The price of a BTC is ${response.data.USD} dollars and ${response.data.EUR} euros.`
      )
      console.log(response.data)
    })
    .catch(error => {
      console.error(error)
    })
})
bot.command('price', ctx => {
  const mensaje = ctx.message.text.slice(6).replace(/\s/g, '')
  axios
  const CURRENCY = mensaje
  const CONVERT_TO = 'USD,EUR'

  // URL de la API
  const API_URL = `https://min-api.cryptocompare.com/data/price?fsym=${CURRENCY}&tsyms=${CONVERT_TO}&api_key=${API_KEY}`

  // Realiza la solicitud GET a la API
  axios
    .get(API_URL)
    .then(response => {
      ctx.reply(
        `The price of a ${mensaje.toUpperCase()} is ${
          response.data.USD
        } dollars and ${response.data.EUR} euros.`
      )
    })
    .catch(error => {
      console.error(error)
    })
})

bot.help(ctx => {
  // El mensaje que se envía al usar el comando /help
  ctx.reply('This is an example: \n/start is a greeting.\n/pricebtc to know the price of BTC.\n/price cryptocurrency use this command to know the price of any cryptocurrency by its symbol.')
})
bot.launch()
