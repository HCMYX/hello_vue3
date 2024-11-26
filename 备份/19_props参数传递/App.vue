// 写html结构
<template>
    <Preson a = "哈哈" :list = 'personList'/>
</template>

//JS 或 TS
<script lang="ts" setup name="App">
    import Preson from './components/Preson.vue';
    import { reactive } from 'vue';
    import {type Persons } from '@/types'

    
    let personList = reactive<Persons>( [
        {id:'shfjs1', name:'张三', age:10},
        {id:'shfjs2', name:'李四', age:20},
        {id:'shfjs3', name:'王五', age:30}
    ])
</script>

// 样式
<style>
    .app{
        background-color: #ebdcdc;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>