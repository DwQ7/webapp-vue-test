import {request} from "@/network/request";

export function getHomeMultiData(){
    return request({
        url:'/home/multidata'
    })
}

export function getHomeGoodList(type,page){
    return request(({
        url:'/home/data',
        params:{
            type,
            page
        }
    }))
}