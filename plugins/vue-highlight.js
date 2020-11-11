import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
import scss from 'highlight.js/lib/languages/scss'
import javascript from 'highlight.js/lib/languages/javascript'
import vue from 'vue-highlight.js/lib/languages/vue.js'
import 'highlight.js/styles/atom-one-dark.css'

Vue.use(VueHighlightJS, {
  // Register only languages that you want
  languages: {
    scss,
    javascript,
    vue
  }
})
