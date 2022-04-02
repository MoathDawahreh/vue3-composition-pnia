<template>
  <div class="posts-detail">
    <h1> Post details {{$route.params.id}}</h1>

    <p>
      <RouterLink :to="{name:'posts'}" > back </RouterLink>
    </p>
    <button @click="showId"> Show post id </button>
  
  </div>

  <div><button @click="goHome" > Going Home In 3 seconds! </button></div>
</template>

<script setup lang="ts">
import  {useRoute, useRouter} from 'vue-router'
const route = useRoute();
const router = useRouter();

 const showId = (): void => {
   console.log (`the id is ${route.params.id}` );
};

const goHome = (): void => {

setTimeout(()=>{
  // router.push('/');

// sending user to a route with params
  router.push({
    name: 'postDetail',
    params: {
      id: 2
    }
  });
 
},3000);





};

 </script>


 
