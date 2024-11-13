<template>
    <div class="person">
        <h1>姓名：{{ name }}</h1>
        <h1>年龄：{{ age }}</h1>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">展示联系方式</button>
    </div>
</template>

<script lang="ts">
    export default {
        name:'Person',
        setup(){
            //setup函数中this是undefined,vue3中弱化this了。
            let name = '张三' //此时的name，age，tel变量 不是响应式的。下面的修改参数方法不能在页面实时刷新
            let age = 22
            let tel = '135222222'
            //方法
            function changeName(){
                name = 'zhangsan' //这样修改name，页面没有变化。因为不是响应式的
            }
            function changeAge(){
                age = 25
            }
            function showTel(){
                alert(tel)
            }
            return {name, age,changeName,changeAge,showTel}
        }
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