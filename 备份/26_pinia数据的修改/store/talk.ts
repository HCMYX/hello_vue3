import {defineStore} from 'pinia'
export const useTalkStore = defineStore('talk',{
    //真正存储数据的地方
    state(){
        return{
            talkList:[
                {id:'001',title:'001'}
            ]
        }
    }
})