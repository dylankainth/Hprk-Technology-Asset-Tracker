export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Technology Asset Tracker',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {rel:"preconnect",href:"https://fonts.googleapis.com"},
      {rel:"preconnect",href:"https://fonts.gstatic.com"},
      { href:"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap",rel:"stylesheet"},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css',
        rel: 'stylesheet',
        integrity:
          'sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor',
        crossorigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css',
      },
    ],
    script: [
      {src:"https://unpkg.com/feather-icons"},
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js',
        integrity:
          'sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2',
        crossorigin: 'anonymous',
      },
    ],
  },

  serverMiddleware: [
    { path: "/api", handler: "~/api/index.js" },
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{src:'~/plugins/quagger.js', mode: 'client'}],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
