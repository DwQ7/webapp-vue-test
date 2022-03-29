import {request} from "@/network/request";

export function getHomeMultiData(){
    return request({
        url:'/home/multidata'
    })
}