//创建一个路由器，并且暴露出去
import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import News from '@/components/News.vue'

const router = createRouter({
    history:createWebHistory(),//路由器的工作模式
    routes:[//每个路由规则
        {
            path:'/home',
            component:Home
        },
        {
            path:'/news',
            component:News
        },
        {
            path:'/about',
            component:About
        },
    ]
})
//暴露router
export default router