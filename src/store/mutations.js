
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
    }
}