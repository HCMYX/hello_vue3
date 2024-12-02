<template>
    <div class="news">
        <ul>
            <li v-for="news in newslist" :key="news.id">
                <!-- 写法一-->
                <!-- <RouterLink :to="`/news/detail?id=${news.id}`" >{{news.title}}</RouterLink> -->
                <!-- 写法二-->
                <RouterLink 
                    :to="{
                        path:'/news/detail',
                        query:{
                            id:news.id,
                            title:news.title,
                            content:news.content
                        }}" 
                >{{news.title}}</RouterLink>
            </li>
        </ul>
        <div class="news-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts" name="news">
    import {  reactive } from "vue";
    import { RouterView } from "vue-router";
import Detail from "./Detail.vue";
    const newslist = reactive([
        {id:'00001',title:'经纬之间 织就传奇',content:'内容1111111111'},
        {id:'00002',title:'3名被美方错误羁押的中国公民回国',content:'内容222222222'},
        {id:'00003',title:'塔克拉玛干沙漠被围起来了',content:'内容333333333333'},
        {id:'00004',title:'东北人暴雪后骑马出门',content:'内容44444444444444'},
    ])
</script>
<style scoped>
.news{
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}
.news ul{
    margin-top: 30px;
    /* list-style: none; */
    padding-left: 10px;
}
.news li::marker{
    color: green;
}
.news li>a{
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967e;
    text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content{
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
}
</style>