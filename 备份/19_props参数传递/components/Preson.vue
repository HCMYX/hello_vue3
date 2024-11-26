<template>
    <div class="person">
        <!-- <h2>{{ a }}</h2> -->
        <ul>
            <li v-for="p in list" key ="p.id">
                {{ p.name }} --- {{ p.age }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts" name = "Preson">
    import type { Persons } from '@/types';
    import { defineProps, withDefaults } from 'vue';
    //接收a 和list
    //defineProps(['a','list'])

    //只接收list
    //defineProps(['list'])

    //接收a，同时将props保存起来
    // let x =defineProps(['a'])
    // console.log(x.a)

    //只接收list 并且限制类型
    //defineProps<{list:Persons}>()

    //接收list，限制类型，限制必要性，指定默认值 
    withDefaults(defineProps<{list?:Persons}>(),{
        //指定默认值 
        list: ()=>[{id:'asd',name:'asd',age:123}]
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