<template>
	<div>
		<teleport to=".modals-container">
			<div class="modal" >
				<h1>this is a modal</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
					molestias est dolore explicabo, illo inventore, corporis facere
					consectetur ab magnam neque vero adipisci omnis saepe sed ipsa. Sed,
					incidunt laboriosam.
				</p>
				<button >Hide modal</button>
			</div>
		</teleport>
	</div>
</template>

<style>
.modal {
	background: rgb(85, 85, 37);
	padding: 10px;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
}
</style>
