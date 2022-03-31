import { ElLoading } from 'element-plus';
export default {
    increment(state) {
        this.state.counter++
    },
    decrement(state) {
        this.state.counter--
    },
    updateInfo(state) {
        state.info.name = 'qx'
    },
    updateIndex(state,index){
        state.currentIndex = index;
    },
    showLoading(state,val){
        let loadingInstance = ElLoading.service(state.loadingOptions);
        if(!val){
            loadingInstance.close()//这里判断调用方法时候的参数值，打开服务的时候传true，关闭服务的时候传false
        }
    }
}