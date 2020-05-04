<template>
	<div class="spinner looping-rhombuses-spinner">
		<div class="rhombus"></div>
		<div class="rhombus"></div>
		<div class="rhombus"></div>
	</div>
</template>

<style scoped>
.spinner {
	display: flex;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.looping-rhombuses-spinner,
.looping-rhombuses-spinner * {
	box-sizing: border-box;
}

.looping-rhombuses-spinner {
	width: calc(15px * 4);
	height: 15px;
}

.looping-rhombuses-spinner .rhombus {
	height: 15px;
	width: 15px;
	background-color: #0ee3b1;
	left: calc(15px * 4);
	position: absolute;
	margin: 0 auto;
	border-radius: 2px;
	transform: translateY(0) rotate(45deg) scale(0);
	animation: looping-rhombuses-spinner-animation 2500ms linear infinite;
}

.looping-rhombuses-spinner .rhombus:nth-child(1) {
	animation-delay: calc(2500ms * 1 / -1.5);
}

.looping-rhombuses-spinner .rhombus:nth-child(2) {
	animation-delay: calc(2500ms * 2 / -1.5);
}

.looping-rhombuses-spinner .rhombus:nth-child(3) {
	animation-delay: calc(2500ms * 3 / -1.5);
}

@keyframes looping-rhombuses-spinner-animation {
	0% {
		transform: translateX(0) rotate(45deg) scale(0);
	}
	50% {
		transform: translateX(-233%) rotate(45deg) scale(1);
	}
	100% {
		transform: translateX(-466%) rotate(45deg) scale(0);
	}
}
</style>
