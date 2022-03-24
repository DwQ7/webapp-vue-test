import { createStore } from 'vuex'
import Vue from "@vue/cli-plugin-eslint/eslintOptions";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";
import modulesA from "@/store/modules/modulesA";


const state =  {
    counter: 100,
    username:'admin',
    students: [
        {id: 110, name: 'why', age: 18},
        {id: 111, name: 'kobe', age: 24},
        {id: 112, name: 'james', age: 30},
        {id: 113, name: 'curry', age: 10}
    ],
    info: {
        name: 'kobe',
        age: 40,
        height: 1.98
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
Vue.config.devtools = true
export default store