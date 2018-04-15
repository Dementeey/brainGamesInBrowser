<template>
  <div class="container">
    <mainNav></mainNav>
    <social></social>
  </div>
</template>

<script>
import mainNav from '../../components/header/mainNav.vue'
import social from '../../components/header/social.vue'
export default {
  name: 'headerComp',
  components: {
    mainNav,
    social
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/var.less';
  @import '../../assets/mixin.less';
.container {
  display: flex;
  flex-direction: row;
  background: @colorWhite;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
}
</style>
