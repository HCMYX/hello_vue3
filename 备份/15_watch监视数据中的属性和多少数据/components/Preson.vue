<template>
    <div class="person">
        <h1>情况四：监视ref或reactive定义的对象类型数据的某个属性</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }},{{ person.car.c2 }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changC1">修改车1</button>
        <button @click="changeC2">修改车2</button>
        <button @click="changeCar">修改所有车</button>
    </div>
</template>


<script  lang="ts" setup name = "Preson">
    import { reactive, watch} from 'vue'
    /* 情况四：监视ref或reactive定义的对象类型数据的某个属性 */

    let person = reactive({
        name:'zhangsan',
        age: 18,
        car:{
            c1:'奔驰',
            c2:'宝马',
        }
    })
    function changeName(){
        person.name += '~'
    }
    function changeAge(){
        person.age += 1
    }
    function changC1(){
        person.car.c1 = '奥迪'
    }
    function changeC2(){
        person.car.c2 = '本田'
    }
    function changeCar(){
        person.car = {c1:'特斯拉',c2:'雪佛兰'}
    }
    watch(()=>person.name,(newValue,oldValue)=>{
        console.log('person.name发生变化',newValue,oldValue)
    })
    watch(()=>person.car.c1,(newValue,oldValue)=>{
        console.log('person.car.c1发生变化',newValue,oldValue)
    },{
        deep:true
    })
    //情况五：监视多个数据
    watch([()=>person.age, ()=>person.car], (newValue,oldValue)=>{
        console.log('person.age,person.car发生了变化',newValue,oldValue)
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