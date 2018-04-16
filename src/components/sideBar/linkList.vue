<template>
  <ul class="linkList">
    <li class="linkItem">link 1</li>
    <li class="linkItem">link 2</li>
    <li class="linkItem">link 3</li>
  </ul>
</template>

<script>
    export default {
        name: "linkList"
    }
</script>

<style lang="less" scoped>
  @import "../../assets/mixin.less";
  .linkList {
    .mp(0, 0);
    list-style: none;
  }
  .linkItem {

  }
</style>
