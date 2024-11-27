<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">点我+1</button>
        <hr>
        <img v-for="(dog,index) in dogList" :src="dog" :key="index">
        <br>
        <button @click="getDog">加一只小狗</button>
    </div>
</template>

<script setup lang="ts" name = "Preson">
    import useSum from '@/hooks/useSum';
    import useDog from '@/hooks/useDog';

    const {sum,add}=useSum()
    const {dogList,getDog} = useDog()
</script>


<style>
    .person{
        background-color: #279dcb;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin:0 5px;
    }
    li{
        font-size: 20px;
    }
    img{
        width: 200px;
        margin-left: 10px;
    }
    
</style>