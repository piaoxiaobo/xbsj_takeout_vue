<template>
  <div id="app">
    <!--显示当前路由组件-->
    <router-view></router-view>
    <FootGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FootGuide from './components/FooterGuide/FooterGuide.vue'
  import {reqAddress} from './api/index.js'
  export default {
    mounted () {
      // 通知vuex的getAddress异步获取address数据
      this.$store.dispatch('getAddress');
      // 通知vuex的getUserInfo异步获取用户信息数据
      this.$store.dispatch('getUserInfo')
    },
    components: {
      FootGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
