import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'element-plus/dist/index.css'
import * as EleIcons from '@element-plus/icons-vue'

const app = createApp(App);

//全局注册图标组件
for(const name in EleIcons){
    app.component(name,EleIcons[name])
}

app.use(router)
    .use(store)
    // .use(ElementPlus, { zIndex: 3000, size: 'small' }) // 使用element-plus
    .mount('#app')
