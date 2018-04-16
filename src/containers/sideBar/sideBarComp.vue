<template>
  <div id="sideBar">
    <avatar></avatar>
    <linkList></linkList>
  </div>
</template>

<script>
  import avatar from '../../components/sideBar/avatar'
  import linkList from '../../components/sideBar/linkList'
export default {
  name: 'sideBarComp',
  components: {
    avatar,
    linkList
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
  #sideBar {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 25%;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
</style>
