<template>
	<div class="modals">Modals page</div>
	<button @click="showModal=true" >Show modals</button>
	 <!-- teleport moves the modal to the body -->
    <teleport to="body">

    
    <div class="modal" v-if="showModal">
		<h1>this is a modal</h1>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit molestias
			est dolore explicabo, illo inventore, corporis facere consectetur ab
			magnam neque vero adipisci omnis saepe sed ipsa. Sed, incidunt laboriosam.
		</p>
		<button @click="showModal=false">Hide modal</button>
	</div>
    </teleport>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const showModal = ref(false);


</script>

<style>
.modal {
	background:rgb(85, 85, 37);
	padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
     width:100%;
    height:100%;
   

}
</style>
