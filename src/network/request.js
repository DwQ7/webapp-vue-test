import axios from 'axios'

export function request(config) {
    return new Promise((resolve, reject) => {
        // 1.创建axios的实例对象
        const instance = axios.create({
            baseURL: 'http://123.207.32.32:8000',
            timeout: 5000
        })

        // 过滤器(拦截器)
        instance.interceptors.response.use(res => {
            return res.data
        })

        // 通过实例发送网络请求
        instance(options)
            .then(res => {
                resolve(res)
            }).catch(err => {
            reject(err)
        })
    })
}