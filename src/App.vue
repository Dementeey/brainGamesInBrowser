<template>
  <div id="app">
    <headerComp></headerComp>
    <div class="wrap">
      <sideBarComp></sideBarComp>
      <mainComp></mainComp>
    </div>
  </div>
</template>

<script>
import headerComp from './containers/header/headerComp.vue'
import mainComp from './containers/main/mainComp.vue'
import sideBarComp from './containers/sideBar/sideBarComp.vue'

export default {
  components: {
    headerComp,
    mainComp,
    sideBarComp
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
  *{
    box-sizing: border-box;
  }
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
  .wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 90%;
    padding: 30px;
  }
</style>
