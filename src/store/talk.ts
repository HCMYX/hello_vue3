import {defineStore} from 'pinia'
import axios from 'axios' 
import { nanoid } from "nanoid";

export const useTalkStore = defineStore('talk',{
    //真正存储数据的地方
    state(){
        return{
            talkList:[
                {id:'001',title:'001'}
            ]
        }
    },

    actions:{
        async getAtalk(){
            let {data} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            let obj = {id:nanoid(),title:data.content}
            this.talkList.unshift(obj)
        }
    }
})