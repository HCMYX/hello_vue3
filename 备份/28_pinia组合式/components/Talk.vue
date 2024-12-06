// 写html结构
<template>
    <div class="talk">
        <button @click="getTalk">获取一句话</button>
        <ul>
            <li v-for="talks in talkList" :key="talks.id"> {{ talks.title }}</li>
        </ul>
    </div>
</template>

//JS 或 TS
<script lang="ts" setup name="Talk">
    import { useTalkStore } from "@/store/talk";
    import { storeToRefs } from "pinia";

    const talkStore = useTalkStore()
    const {talkList} = storeToRefs(talkStore)

    talkStore.$subscribe((mutate,state)=>{
        localStorage.setItem('talkList',JSON.stringify(state.talkList))
    })
    async function getTalk(){
        talkStore.getAtalk()
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