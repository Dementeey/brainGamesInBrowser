<template>
  <div id="app">
    <headerComp></headerComp>
  </div>
</template>

<script>
import headerComp from './components/header,vue'
export default {
  components: {
    headerComp
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less" scopedSlots>
  @import './assets/mixin.less';
  @import './assets/var.less';

  html,
  body {
    .mp(0, 0);
  }
  #app {
    width: 100%;
    height: 100vh;
    background: #E8E8E8;
  }
</style>
