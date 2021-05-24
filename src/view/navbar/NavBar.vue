<template>
    <el-container class="home-container">
    <!--    头部区域-->
      <el-header>
        <div >
          <img src="../../assets/images/logo.jpg" class="logo_image">
          <span>电商后台管理系统</span>
        </div>
      <el-button type="info" @click="goOut" >退出</el-button>
      </el-header>
    <!--    主体区域-->
      <el-container>
      <!--      左侧边栏-->
        <Menu/>
      <!--      右主体内容区域-->
         <el-main>
           <router-view></router-view>
         </el-main>
      </el-container>
    </el-container>
</template>

<script>
import Menu from "@/view/menu/Menu";

export default {
  name: "NavBar",
  components: {
    Menu
  },
  data() {
    return {

    }
  },
  methods: {
    goOut() {
      window.sessionStorage.removeItem('token');
      this.$router.push('/login')
    },

  }
}
</script>

<style lang="less" scoped>
.home-container {
  width: 100%;
  height: 100%;
}

.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #ffffff;
  font-size: 20px;
  >div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.logo_image {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  box-shadow: 0 0 1px #ffffff;
}

//
//.el-aside {
//  background-color: #333744;
//  .el-menu {
//    border-right: none;
//  }
//}



.el-main {
  background-color: #eeedf1;
}


</style>