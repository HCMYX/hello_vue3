// 写html结构
<template>
    <Preson/>
</template>

//JS 或 TS
<script lang="ts">
    import Preson from './components/Preson.vue';
    export default {
        name: 'App', //组件名称
        components:{Preson}
    }
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