import { createRouter, createWebHistory } from 'vue-router'
  import HomeView from '../views/HomeView.vue'
  import PostsView from '../views/PostsView.vue'
  import postDetailView from '../views/postDetailView.vue'
  import ModalsView from '../views/ModalsView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component:HomeView
		},
		{
			path: '/posts',
			name: 'posts',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component:PostsView,
		},
		{
			path: '/postDetail/:id',
			name: 'postDetail',

			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: postDetailView,
		},
		{
			path: '/modals',
			name: 'modals',

			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component:ModalsView,
		},
	],
})

export default router
