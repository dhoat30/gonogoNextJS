const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      experimental: {
        // Enables the styled-components SWC transform
        styledComponents: true
      },
      env: {
        url: "https://test.webduel.co.nz",
        SITE_URL: "http://localhost:3000"
      },
      reactStrictMode: true,
      images: {
        domains: ['test.webduel.co.nz']
      }
    }
  }
  return {
   
    experimental: {
      // Enables the styled-components SWC transform
      styledComponents: true
    },
    env: {
      url: "https://test.webduel.co.nz",
      SITE_URL: "https://gonogo.vercel.app/"
    },
    reactStrictMode: true,
    images: {
      domains: ['test.webduel.co.nz']
    }
  }
}
