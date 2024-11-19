<template>
    <div class="person">
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}万元</h2>
        <button @click="changePrice">修改汽车价格</button>
        <br>
        <h2>游戏列表：</h2>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
        <button @click="changeFirstName">修改第一个游戏名称</button>
    </div>
</template>


<script  lang="ts" setup name = "Preson">
    import {reactive} from  'vue'

    let car = reactive({brand:'奔驰', price:100})

    let games = reactive([
        {id:'id01',name:'王者荣耀'},
        {id:'id02',name:'原神'},
        {id:'id03',name:'三国志'},
    ])

    function changePrice(){
         car.price += 10
    }

    function changeFirstName(){
        games[0].name='123'
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