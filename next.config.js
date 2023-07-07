const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      i18n: {
        locales: ['en'],
        defaultLocale: 'en',
      },
      env: {
        url: "https://data.tasteofturkish.co.nz",
        SITE_URL: "http://localhost:3000"
      },
      reactStrictMode: true,
      images: {
        domains: ['data.tasteofturkish.co.nz']
      }
    }
  }
  return {
    i18n: {
      locales: ['en'],
      defaultLocale: 'en',
    },
    env: {
      url: "https://data.tasteofturkish.co.nz",
      SITE_URL: "https://tasteofturkish.co.nz"
    },
    reactStrictMode: true,
    images: {
      domains: ['data.tasteofturkish.co.nz']
    }
  }
}


