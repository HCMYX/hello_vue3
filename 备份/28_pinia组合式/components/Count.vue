// 写html结构
<template>
    <div class="count">
        <h2>当前求和为：{{ sum }}</h2>
        <h2>学校：{{ school }}，地址：{{ countStore.address }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
        
    </div>
</template>

//JS 或 TS
<script lang="ts" setup name="Count">
    import { ref } from 'vue'
    import { useCountStore } from "@/store/count";
    import { storeToRefs } from "pinia";
    const countStore = useCountStore()
    //storeToRefs只会关注store中的数据
    const {sum,school,address} = storeToRefs(countStore)
    let n = ref(1)

    function add(){
        //第一种修改方式
        //countStore.sum += n.value
        // 批量修改
        // countStore.$patch({
        //     sum: 888,
        //     school:'xuexiao',
        //     address:'河南'
        // })
        //第三种修改方式
        countStore.increment();
    }
    function minus(){
        countStore.sum -= n.value
    }
</script>

// 样式
<style scoped>
.count{
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
select,button{
    margin: 0 5px;
    height: 25px;
}
</style>