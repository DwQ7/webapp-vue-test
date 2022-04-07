import {request2} from "@/network/request";

export function testRequest(){
    return request2({
        url:'/test'
    })
}
