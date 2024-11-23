<template>
    <div class="person">
        <h1>情况三：监视reactive定义的对象类型数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改人</button>
    </div>
</template>


<script  lang="ts" setup name = "Preson">
    import {computed, reactive, watch} from 'vue'

    /* 情况一：监视reactive定义的对象类型数据 且默认是开启深度监视，且无法关闭 */
    let person = reactive({name:'zhangsan',age:18})
    function changeName(){
        person.name += '~'
    }
    function changeAge(){
        person.age += 1
    }
    function changePerson(){
        Object.assign(person,{name:'lisi',age:60})
    }

    watch(person,(newValue,oldValue)=>{
        console.log('person发生变化',newValue,oldValue)
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