<template>
  <div class="posts">
    <h1> posts </h1>
    <div class="posts-list">
      <ul>
        <li v-for="post in posts" :key="post.id">
          <RouterLink :to="{ name: 'postDetail', params: { id: post.id }}"
>
            {{ post.title }}
          </RouterLink>
        </li>
      </ul>
    <textarea></textarea>
  </div>
  </div>
</template>
<script setup lang="ts">
import { isInDestructureAssignment, walkBlockDeclarations } from "@vue/compiler-core";
 const posts = [
  {
    id: 1,
    title: "Hello World",
  },
  {
    id: 2,
    title: "Bye World",
  },
];
 
</script>


 
