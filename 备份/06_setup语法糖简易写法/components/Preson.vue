<template>
    <div class="person">
        <h1>姓名：{{ name }}</h1>
        <h1>年龄：{{ age }}</h1>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">展示联系方式</button>

    </div>
</template>


<script  lang="ts" setup name = "Preson">
    let name = '张三'
    let age = 22
    let tel = '135222222'
    //方法
    function changeName(){
        name = 'zhangsan'
    }
    function changeAge(){
        age = 25
    }
    function showTel(){
        alert(tel)
    }
   
</script>
<style>
    .person{
        background-color: #279dcb;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>