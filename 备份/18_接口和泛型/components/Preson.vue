<template>
    <div class="person">
        ？？？
    </div>
</template>

<script setup lang="ts" name = "Preson">
    import {type PersonInter, type Persons} from '@/types'

    let person:PersonInter = {id:'shfjs', name:'zhangsan', age:20}

    let personList:Persons = [
        {id:'shfjs1', name:'zhangsan1', age:20},
        {id:'shfjs2', name:'zhangsan2', age:20},
        {id:'shfjs3', name:'zhangsan3', age:20}
    ]
</script>
<style>
    .person{
        background-color: #279dcb;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>