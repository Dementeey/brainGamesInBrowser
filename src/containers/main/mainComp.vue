<template>
  <div id="main"></div>
</template>

<script>
export default {
  name: 'mainComp',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/var.less';
  @import '../../assets/mixin.less';
  #main {
    width: 65%;
    height: 100%;
    background: #FFFFFF;
    box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
</style>
