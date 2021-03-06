export default {
  target: "server",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '유튜북 - 유튜브 영상, 가볍게 읽자',
    htmlAttrs: {
      lang: 'kor'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '유튜북' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/youtubook_icon2.png' },
      { rel: 'stylesheet', href: 'https://unpkg.com/@egjs/flicking/dist/flicking.css', crossorigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://unpkg.com/@egjs/flicking/dist/flicking-inline.css', crossorigin: 'anonymous' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    { src: "~/plugins/vue-flicking" },
    { src: "~/plugins/vue-gtag" },
    // { src: "~/plugins/vue-flicking-plugins" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/content",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },

  // 모바일 확인용
  server: {
    host: "0.0.0.0"
  },

  robots: {
    UserAgent: "*",
    Disallow: "/admin",
    Allow: "/",
  },

  generate: {
    routes: [
      'kelly_220115',
      'next_door_ceo_211107',
      'next_door_ceo_220202',
      'next_door_ceo_220223',
      'read_budongsan_220208',
      'sin_sa_220201',
      'tam_gu_life_220206',
      'tam_gu_life_220219',
    ]
  }

}
