<template>
    <div>
      <router-view></router-view>
      <FooterGuide></FooterGuide>
    </div>

</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  import {reqAddress} from './api'
  export default {
    async mounted () {
      const result = await reqAddress('40.10038,116.37867');
      console.log(result)
    },
      components:{
        FooterGuide
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
