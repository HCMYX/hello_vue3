<template>
    <div class="person">
        <h2>姓名：{{ person.name }}</h2>
        <h2>姓名：{{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge"> 修改年龄</button>
    </div>
</template>


<script  lang="ts" setup name = "Preson">
    import {reactive,toRefs} from  'vue'
    import {ref} from  'vue'

    let person = reactive({
        name : '张三',
        age : 18
    })

    let {name,age} = toRefs(person)

    function changeName(){
        name.value += '~'
    }

    function changeAge(){
        age.value += 1
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