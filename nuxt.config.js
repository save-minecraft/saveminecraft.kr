export default {
  // Just-in-time compilation
  tailwindcss: {
    jit: true
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'saveminecraft.kr',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: '마인크래프트 성인화 반대' },
      { hid: 'description', name: 'description', content: '마인크래프트 미성년자 이용 불가 사태의 배경이자 모든 게이머를 불편하게 하는 셧다운제의 폐지를 요구합니다.' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'saveminecraft.kr' },
      { hid: 'og:title', name: 'og:title', content: '마인크래프트 성인화 반대' },
      { hid: 'og:content', name: 'og:content', content: '마인크래프트 미성년자 이용 불가 사태의 배경이자 모든 게이머를 불편하게 하는 셧다운제의 폐지를 요구합니다.' },
      { hid: 'og:url', name: 'og:url', content: 'https://saveminecraft.kr' },
      { hid: 'og:image', name: 'og:image', content: 'https://i.imgur.com/jiWrWFv.png' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fontawesome.appie.dev/css/all.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://pretendard.appie.dev/web/static/pretendard.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/fonts/bundle.css' }
    ],
    script: [
      { src: 'https://polyfill.appie.dev/polyfill.min.js' },
      { src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "def3fbe44e284888bcc054cdf4f44bdb"}' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dayjs'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://api.saveminecraft.kr'
  },

  // Optional
  dayjs: {
    locales: ['ko'],
    defaultLocale: 'ko',
    defaultTimeZone: 'Asia/Seoul',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone', // import 'dayjs/plugin/timezone'
      'relativeTime', // import 'dayjs/plugin/relativeTime'
      'advancedFormat' // import 'dayjs/plugin/advancedFormat'
    ] // Your Day.js plugin
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  target: 'static'
}
