import {defineStore} from 'pinia'
export const useCountStore = defineStore('count',{
    
    //真正存储数据的地方
    state(){
        return{
            sum:6,
            school:'12',
            address:'123'

        }
    },
    //actions里面放的是一个个动作方法，用于响应组件中的动作
    actions:{
        increment(){
            this.sum +=1
        }
    }
})