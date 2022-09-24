const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      i18n: {
        locales: ['en'],
        defaultLocale: 'en',
      },
      env: {
        url: "http://data.gonogo.co.nz",
        SITE_URL: "http://localhost:30010"
      },
      reactStrictMode: true,
      images: {
        domains: ['data.gonogo.co.nz']
      }
    }
  }
  return {
    i18n: {
      locales: ['en'],
      defaultLocale: 'en',
    },
    env: {
      url: "http://data.gonogo.co.nz",
      SITE_URL: "http://gonogo.co.nz"
    },
    reactStrictMode: true,
    images: {
      domains: ['data.gonogo.co.nz']
    }
  }
}
