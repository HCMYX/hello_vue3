<template>
    <div class="person">
        <h1>中国</h1>
        <h2 ref="title2">北京</h2>
        <h3>河南</h3>
        <button @click="showLog">点我输出h2的内容</button>
    </div>
</template>

<script  lang="ts" setup name = "Preson">
    import {ref, defineExpose} from 'vue'
    //创建一个ref容器
    let title2 = ref()
    let a = ref(0)
    let b = ref(1)
    let c = ref(2)
    function showLog(){
        console.log(title2.value)
    }
    //标记a,b,c。外部使用的时候可以获取这三个值
    defineExpose({a,b,c})
</script>
<style>
    .person{
        background-color: #279dcb;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>