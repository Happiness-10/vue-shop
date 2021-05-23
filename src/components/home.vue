<template>
  <div>
    <el-button type="info" @click="goOut">退出</el-button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    goOut() {
      window.sessionStorage.removeItem('token');
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>

</style>