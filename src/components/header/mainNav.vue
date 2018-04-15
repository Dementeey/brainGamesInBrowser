<template>
  <nav class="mainNav">
    <a class="navLink active" href="">home</a>
    <a class="navLink " href="">games</a>
    <a class="navLink " href="">about</a>
  </nav>
</template>

<script>
export default {
  name: 'mainNav',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/var.less';
@import '../../assets/mixin.less';

.mainNav {
  display: flex;
  flex-direction: row;
}
.navLink {
  display: block;
  min-width: 150px;
  color: @colorGreen;
  text-decoration: none;
  text-align: center;
}
.navLink:hover,
.active {
  transform: scale(1.1);
  color: @colorPink;
  text-decoration: underline;
}
.active {
  pointer-events: none;
}
</style>
