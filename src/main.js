import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from "vue3-lazy";
// import 'element-plus/dist/index.css'
import * as EleIcons from '@element-plus/icons-vue'
const app = createApp(App);

//全局注册图标组件
for(const name in EleIcons){
    app.component(name,EleIcons[name])
}

app.use(router)
    .use(store)
    .use(VueLazyLoad,{
        preLoad:1,
        error:require('@/assets/images/logo.png'),
        loading:require('@/assets/images/logo.png'),
        attempt: 2
    })
    // .use(ElementPlus, { zIndex: 3000, size: 'small' }) // 使用element-plus
    .mount('#app')
