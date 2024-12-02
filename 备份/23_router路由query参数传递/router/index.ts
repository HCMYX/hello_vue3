//创建一个路由器，并且暴露出去
import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'
import Detail from '@/pages/Detail.vue'
const router = createRouter({
    history:createWebHistory(),//路由器的工作模式
    routes:[//每个路由规则
        {
            name:'shouye',
            path:'/home',
            component:Home
        },
        {
            name:'xinwen',
            path:'/news',
            component:News,
            children:[
                {
                    path:'detail',
                    component:Detail
                }
            ]
        },
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
    ]
})
//暴露router
export default router