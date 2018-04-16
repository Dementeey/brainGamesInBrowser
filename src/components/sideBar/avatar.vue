<template>
  <img class="avatar" src="../../assets/monkey-selfie-web-cropjpg.jpg">
</template>

<script>
export default {
  name: "avatar",
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  .avatar {
    width: 150px;
    height: 150px;
    box-shadow: inset 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
</style>
