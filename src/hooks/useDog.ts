import { reactive, ref } from 'vue';
import axios from 'axios'

export default function (){
    //https://dog.ceo/api/breed/pembroke/images/random
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_4080.jpg'
    ])
    async function getDog(){
        try{
            let result= await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(result.data.message)
        }catch(error){
            alert(error)
        }
    }
    //向外部提供
    return {dogList,getDog}
}
