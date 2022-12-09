<template>
  <div style="background-color: aliceblue">
    <!-- 头部 -->
    <div style="display:flex; height: 60px; background-color: white; line-height: 60px; border-bottom: 1px solid #ddd">
      <div style="width: 200px; display: flex">
        <div style="width: 100px; padding-left: 30px">
          <img src="../assets/imgs/交友.png" alt="" style="width: 60px; display: inline">
        </div>
        <div style="flex: 1; color: SlateBlue; font-size: 16px"><b>Partner交友</b></div>
      </div> <!-- logo -->

      <div style="flex: 1; padding-left: 50px">
        <el-menu
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            router
        >
          <el-menu-item index="/home">首页</el-menu-item>
          <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div> <!-- 菜单区域 -->

      <div style="width: 100px">

        <el-dropdown>
          <div class="el-dropdown-link">
            <el-avatar :size="40" :src="state.circleUrl" style="position: relative; top: 10px" />
            <span style="font-size: 14px; position: relative; left: 10px; top: -5px">{{ store.loginInfo.user.name }}</span>
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>个人信息</el-dropdown-item>
                  <el-dropdown-item>修改密码</el-dropdown-item>
                  <el-dropdown-item>
                    <div @click="logout">退出登录</div>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
        </el-dropdown>
      </div> <!-- 头像和下拉菜单 -->

    </div>

    <!--  主体 -->
    <div style="margin: 10px auto; width: 80%; min-height: calc(100vh - 80px); background-color: white; border-radius: 10px">
      <router-view />  <!--  加载子路由的视图 -->
    </div>

  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import {useUserStore} from "@/stores/user";
import router from "@/router";

const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
const state = reactive({
  circleUrl:
      'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
})

const store = useUserStore()

const logout = () => {
  localStorage.removeItem("user")
  router.push('/login')
}
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
}
</style>
