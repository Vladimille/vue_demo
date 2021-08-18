import Vue from 'vue'
export default {
  init () {
    Vue.mixin({
      methods: {
        setTitle (title) {
          let meta = this.$route && this.$route.meta ? this.$route.meta : {}
          document.title = title || meta.title || ''
        }
      }
    })
  }
}
