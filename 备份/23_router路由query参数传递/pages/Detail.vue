<template>
    <ul class="news-list">
        <li>编号:{{route.query.id}}</li>
        <li>标题:{{route.query.title}}</li>
        <li>内容:{{route.query.content}}</li>
    </ul>
</template>

<script setup lang="ts" name="detail">
    import { toRefs } from "vue";
    import { useRoute } from "vue-router";
    let route = useRoute()
    let {query} = toRefs(route)
    
</script>
<style scoped>
.news-list{
    list-style: none;
    padding-left: 20px;
}
.news-list>li{
    line-height: 30px;
}
</style>