import { createStore } from 'vuex'
import Vue from "@vue/cli-plugin-eslint/eslintOptions";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";
import modulesA from "@/store/modules/modulesA";


const state =  {
    counter: 100,
    username:'admin',
    info: {
        name: 'kobe',
        age: 40,
        height: 1.98
    },
    currentIndex:0,
    loadingOptions:{
        lock: true,
        text: 'Loading...',//加载动画的文字
        // spinner: 'el-icon-loading',//加载动画的图标
        // background: 'rgba(0, 0, 0, 0)',//加载动画的背景
    }
}
const store = createStore({
    state,
    mutations,
    actions,
    getters,
    modules:{
        A:modulesA
    }
})

export default store