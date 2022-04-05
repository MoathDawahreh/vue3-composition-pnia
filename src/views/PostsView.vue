<template>
	<div class="posts">
		<h1>posts</h1>
		<div class="posts-list">
			<ul>
				<li v-for="post in posts" :key="post.id">
					<RouterLink :to="{ name: 'postDetail', params: { id: post.id } }">
						{{ post.title }}
					</RouterLink>
				</li>
			</ul>
			<textarea></textarea>
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import {
	isInDestructureAssignment,
	walkBlockDeclarations,
} from '@vue/compiler-core'

const posts = ref([
	{ id: 1, title: 'first post' },
	{ id: 2, title: 'second post' },
	{ id: 3, title: 'third post' },
])
</script>
