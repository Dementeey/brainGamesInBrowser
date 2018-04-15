<template>
  <div id="app">
    <headerComp></headerComp>
  </div>
</template>

<script>
import headerComp from './containers/header/headerComp.vue'

export default {
  components: {
    headerComp
  },
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
  @import './assets/mixin.less';
  @import './assets/var.less';

  html,
  body {
    .mp(0, 0);
    font-family: @mainFont;
    font-size: 24px;
  }
  #app {
    width: 100%;
    height: 100vh;
    background: @colorGray;
  }
</style>
