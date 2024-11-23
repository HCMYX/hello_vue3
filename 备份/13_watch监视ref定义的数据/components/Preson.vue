<template>
    <div class="person">
        <h1>情况一：监视ref定义的基本类型数据</h1>
        <h2>当前求和：{{ sum }}</h2>
        <button @click="changeSum">点我 sum+1</button>
        <h1>情况一：监视ref定义的对象类型数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改人</button>
    </div>
</template>


<script  lang="ts" setup name = "Preson">
    import {computed, ref, watch} from 'vue'

    let sum = ref(0)
    function changeSum(){
        sum.value +=1
    } 
    //监视 情况一 监视ref定义的基本类型数据
    const stopWatch = watch(sum,(newValue,oldValue)=>{
        console.log('sum值变化',newValue,oldValue)
        //停止监视 
        if(newValue >=10){
            stopWatch()
        }
    })
    /* 情况一：监视ref定义的对象类型数据,监视的是对象的地址值，若想监视对象内部属性变化，需要手动开启
    第一个参数：被监视的数据
    第二个参数：监视的回调
    第三个参数：配置对象（deep，immediate 等等） */
    let person = ref({name:'zhangsan',age:18})
    function changeName(){
        person.value.name += '~'
    }
    function changeAge(){
        person.value.age += 1
    }
    function changePerson(){
        person.value = {name:'lisi',age:60}
    }

    watch(person,(newValue,oldValue)=>{
        console.log('person发生变化',newValue,oldValue)
    },{
        deep:true,//监视内部属性变化
        immediate:true//立即监视
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