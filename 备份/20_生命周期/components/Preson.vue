<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">点我+1</button>
    </div>
</template>

<script setup lang="ts" name = "Preson">
    import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

    let sum = ref(0)

    function add(){
        console.log('更新数据')
        sum.value += 1
    }
    //创建
    console.log('创建')

    //挂载前
    onBeforeMount(()=>{
        console.log('挂载前')
    })
    //挂载完毕
    onMounted(()=>{
        console.log('挂载完毕')
    })
    //更新前
    onBeforeUpdate(()=>{
        console.log('更新前')
    })
    //更新完毕
    onUpdated(()=>{
        console.log('更新完毕')
    })
    //卸载前
    onBeforeUnmount(()=>{
        console.log('卸载前')
    })
    //卸载完毕
    onUnmounted(()=>{
        console.log('卸载完毕')
    })
</script>
<style>
    .person{
        background-color: #279dcb;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>