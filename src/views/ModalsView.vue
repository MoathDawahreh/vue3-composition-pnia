<template>
	<div class="modals">Modals page</div>
	<button @click="showModal = true">Show modals</button>
	<!-- teleport moves the modal to the body -->
<Modal v-if="showModal"></Modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'

const showModal = ref(false)
</script>
