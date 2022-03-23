import { createStore } from 'vuex'
import Vue from "@vue/cli-plugin-eslint/eslintOptions";
const store = createStore({
    state() {
        return {
            counter: 100,
            username:'admin'
        }
    },
    //不能直接操作数据，在组件中要进行commit提交，在index.js中通过mutations对数据进行修改
    mutations: {
        increment(state) {
            this.state.counter++
        },
        decrement(state) {
            this.state.counter--
        }
    }
})
Vue.config.devtools = true
export default store