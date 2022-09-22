const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      i18n: {
        locales: ['en'],
        defaultLocale: 'en',
      },
      experimental: {
        // Enables the styled-components SWC transform
        styledComponents: true
      },
      env: {
        url: "https://data.gonogo.co.nz",
        SITE_URL: "http://localhost:3000"
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
    experimental: {
      // Enables the styled-components SWC transform
      styledComponents: true
    },
    env: {
      url: "https://data.gonogo.co.nz",
      SITE_URL: "https://gonogo.co.nz"
    },
    reactStrictMode: true,
    images: {
      domains: ['data.gonogo.co.nz']
    }
  }
}
