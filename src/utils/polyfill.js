import Vue from 'vue'
import { intlLocale } from '@/locales/index'

// Allows us to use someElement.closest(selector)
import 'element-closest'

export default new Vue({
  data () {
    return {
      locale: 'en',
    }
  },
  watch: {
    locale (locale) {
      if (!window.IntlPolyfill) return
      setTimeout(() => intlLocale(locale), 500)
    },
  },
  methods: {
    async init () {
      const promises = []
      if (!window.Intl) {
        promises.push(
          import('intl/dist/Intl'),
          intlLocale('en'),
        )
      }
      if (!window.requestAnimationFrame) {
        promises.push(
          import('raf').then(raf => raf.polyfill()),
        )
      }
      await Promise.all(promises)
    },
  },
})
