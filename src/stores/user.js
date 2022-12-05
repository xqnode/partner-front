import { defineStore } from 'pinia'   // 导入 defineStore

export const useUserStore = defineStore('user', {
    state: () => ({
        loginInfo: {}   // {  user: {}, token: '' }
    }),
    actions: {
        setLoginInfo(loginInfo) {
            this.loginInfo = loginInfo
        }
    },
    // 开启数据持久化
    persist: true
})
