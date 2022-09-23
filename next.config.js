const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      i18n: {
        locales: ['en'],
        defaultLocale: 'en',
      },
      env: {
        url: "https://test.webduel.co.nz",
        SITE_URL: "http://localhost:30010"
      },
      reactStrictMode: true,
      images: {
        domains: ['test.webduel.co.nz']
      }
    }
  }
  return {
    i18n: {
      locales: ['en'],
      defaultLocale: 'en',
    },
    env: {
      url: "https://test.webduel.co.nz",
      SITE_URL: "https://gonogo.co.nz"
    },
    reactStrictMode: true,
    images: {
      domains: ['test.webduel.co.nz']
    }
  }
}
