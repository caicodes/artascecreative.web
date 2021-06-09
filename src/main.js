import Vue from 'vue'
import Chakra, { CThemeProvider, CColorModeProvider, CReset, CBox } from '@chakra-ui/vue'
import App from './App.vue'
import store from './store'
import artasceTheme from './theme/artasce-theme'

Vue.use(Chakra, {
  extendTheme: artasceTheme,
});

new Vue({
  el: '#app',
  store,

  render: (h) => h(CThemeProvider, [
    h(CColorModeProvider, [
      h(CBox, [
        h(CReset),
        h(App)
      ])
    ])
  ])
}).$mount()