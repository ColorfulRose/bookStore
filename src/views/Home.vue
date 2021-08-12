<template>
  <div class="home">
    {{banner}}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {onMounted,ref} from 'vue'
import {getHomeAllData} from "../network/home";

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup(){
    const banner =ref([])
    onMounted(()=>{
      getHomeAllData().then(res =>{
          banner.value = res.sliders
          console.log(res)
        }
      ).catch(err=>{})

    })
    return {banner}
  }

}
</script>
