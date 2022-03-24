export default {
    state: {
        name: 'zhangsan'
    },
    mutations: {
        updateName(state, payload) {
            state.name = payload
        }
    },
    getters: {
        fullName(state) {
            return state.name + '11111'
        },
        fullName2(state, getters) {
            return getters.fullName + '2222'
        },
        fullName3(state, getters, rootState) {
            return getters.fullName2 + rootState.counter
        }
    },
    actions: {
        aUpdateName(context) {
            console.log(context);
            setTimeout(() => {
                context.commit('updateName', 'qx')
            }, 1000)
        }
    }
}
