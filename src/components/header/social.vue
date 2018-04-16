<template>
  <div class="social">
    <a class="socialItem fb" href="#" title="facebook" target="_blank"></a>
    <a class="socialItem in" href="#" title="linkedin" target="_blank"></a>
    <a class="socialItem git" href="#" title="github" target="_blank"></a>
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
  align-items: center;
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
  color: @colorGreen;
}
</style>
