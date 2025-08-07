<template>
  <component v-if="route.name" :is="layoutComponent">
    <router-view />
  </component>
</template>

<script>
import { computed } from "vue";
import { useRoute } from 'vue-router'
import PublicLayout from "@/layouts/PublicLayout"
import DefaultLayout from "@/layouts/DefaultLayout"

export default {
  name: "App",
  components: {
    PublicLayout,
    DefaultLayout
  },
  
  setup(){
    // defining current layout
    const route = useRoute(); 
    
    const layoutComponent = computed(() => {
       return route.meta.isPublic ? "PublicLayout" : "DefaultLayout"
    });

    return {
      layoutComponent,
      route
    }
  }
};
</script>


