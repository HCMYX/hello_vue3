// 写html结构
<template>
    <div class="talk">
        <button @click="getTalk">获取一句话</button>
        <ul>
            <li v-for="talks in talkStore.talkList" :key="talks.id"> {{ talks.title }}</li>
        </ul>
    </div>
</template>

//JS 或 TS
<script lang="ts" setup name="Talk">
    import axios from 'axios'
    import { nanoid } from "nanoid";
    import { useTalkStore } from "@/store/talk";

    const talkStore = useTalkStore()

    async function getTalk(){
        let {data} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        let obj = {id:nanoid(),title:data.content}
        talkStore.talkList.unshift(obj)
    }
</script>

// 样式
<style scoped>
.talk{
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    margin-top: 20px;
}
</style>