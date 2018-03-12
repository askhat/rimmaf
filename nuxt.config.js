module.exports = {
  head: {
    title: 'Психолог',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Психологические консультации в Казани' },
      { name: 'apple-mobile-web-app-title', content: 'Психолог' },
      { name: 'application-name', content: 'Психолог' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.14/semantic.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/Glide.js/2.1.0/css/glide.core.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/Glide.js/2.1.0/css/glide.theme.min.css' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '194x194', href: '/favicon-194x194.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ],
    script: [
      { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' },
      { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.0/semantic.min.js' },
      { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/Glide.js/2.1.0/glide.min.js' }
    ]
  },
  loading: { color: '#3B8070' },
  router: {
    base: `${process.env.DEPLOY_ENV === 'GH_PAGES' ? '/rimma-fedyaeva' : ''}`,
    linkActiveClass: 'active'
  },
  modules: [
    '@nuxtjs/axios'
  ],
  build: {
    vendor: ['axios'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
   }
  }
}
