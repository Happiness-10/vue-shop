<template>
  <div class="nar-bar">
    <NavBar/>
  </div>
</template>

<script>
import NavBar from "../view/navbar/NavBar";


export default {
  name: "home",
  components: {
    NavBar,
  }
}
</script>

<style lang="less" scoped>
.nar-bar {
  width: 100%;
  height: 100%;
}

</style>