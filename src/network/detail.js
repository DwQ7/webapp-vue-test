import {request} from "@/network/request";

export function getDetailGoodItem(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}
