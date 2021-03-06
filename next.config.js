/* eslint-env node */
const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')

module.exports =  withPlugins(
  [
    [
      withPWA, {
        pwa: {
          disable: process.env.NODE_ENV === 'development',
          register: true,
          dest: 'public'
        }
      }
    ],
  ],
  {
    serverRuntimeConfig: {
      API_URL: process.env.API_URL,
    },
  }
)
