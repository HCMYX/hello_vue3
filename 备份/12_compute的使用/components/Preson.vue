<template>
    <div class="person">
        姓：<input type="text" v-model="firstName"> <br>
        名：<input type="text" v-model="lastName"> <br>
        姓名：<span>{{ fullName }}</span>
        <button @click="changeFullName">将名称改成li-si</button>
    </div>
</template>


<script  lang="ts" setup name = "Preson">
    import {computed, ref} from 'vue'

    let firstName = ref('')
    let lastName = ref('')

    // fullName是一个计算属性，且是只读的
/*     let fullName = computed(()=>{
        return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    }) */

    
    let fullName = computed({
        get(){
            return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
        },
        set(val){
            const [str1,str2] = val.split('-')
            firstName.value = str1
            lastName.value = str2
        }
    })

    function changeFullName(){
        fullName.value = 'li-si'
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