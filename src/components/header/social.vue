<template>
  <div class="social">
    <a class="socialItem fb" href=""></a>
    <a class="socialItem in" href=""></a>
    <a class="socialItem git" href=""></a>
  </div>
</template>

<script>
export default {
  name: 'social',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/var.less';
@import '../../assets/mixin.less';

.social {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 100px;
}
.socialItem {
  width: 20px;
  height: 20px;
  background-color: @colorGreen;
  border-radius: 50%;
}

.socialItem:hover {
  transform: scale(1.2);
  background-color: @colorPink;
}
</style>
