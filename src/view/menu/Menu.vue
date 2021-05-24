<template>
    <el-aside :width="isCollapse ? '64px' : '200px'" >
    <div class="toggle-button el-icon-guide" @click="toggleClick" ></div>
    <el-menu
        background-color="#333744"
        text-color="#fff"
        active-text-color="#409EFF"
        unique-opened
        :collapse="isCollapse"
        :collapse-transition="false"
        :router="true" :default-active="activePath">
      <!--一级菜单-->
      <el-submenu :index="item.id + ''" v-for="(item,index) in menuList" :key="item.id">
        <template slot="title">
          <i :class="iconItem[index]" ></i>
          <span>{{item.authName}}</span>
        </template>
        <!--二级菜单-->
        <el-menu-item :index="'/' + subItem.path"
                      v-for="subItem in item.children"
                      :key="subItem.id" @click="saveNavState('/' + subItem.path)">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{subItem.authName}}</span>
          </template></el-menu-item>
      </el-submenu>

    </el-menu>
    </el-aside>

</template>

<script>

export default {
  name: "Menu",
  data() {
    return {
      menuList: [],
      iconItem: [
        'el-icon-cold-drink',
        'el-icon-grape',
        'el-icon-orange',
        'el-icon-cherry',
        'el-icon-ice-drink'
      ],
      isCollapse: false,
      activePath: ''


    }
  },
  created() {
    this.getMenuList();

    this.activePath = window.sessionStorage.getItem('activePath')

  },
  methods: {
    //获取菜单栏信息
    async getMenuList() {
      const {data: res} = await this.$http.get('menus');
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
      this.menuList = res.data
      // console.log(res.meta.status)

    },
    //点击按钮切换菜单的折叠与展开
    toggleClick() {
      this.isCollapse = ! this.isCollapse

    },
    //保存二级菜单路径
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath',activePath)
      this.activePath = activePath
    }

  }


}
</script>

<style lang="less" scoped>
.el-aside {
  background-color: #333744;


  .el-menu {
    border-right: none;
  }
}

.toggle-button{
  background-color: #4A5064;
  line-height: 30px;
  color: #fff;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.el-menu {
  border-right: none;
}
</style>