<template>
	<div class="card">
		<div class="text">
			<h3><slot>name slot</slot></h3>
			<span>$2.35</span>
		</div>
		<img src="coffee.png" alt="" />
	</div>
</template>

<style lang="scss" scoped>
.card {
	min-width: 200px;
	min-height: 100px;
	margin: 20px;
	padding: 0 15px;

	display: flex;
	justify-content: space-around;
	align-items: center;
	align-content: center;

	border: 2px solid #4a4d52;
	border-left: 2px solid #0ee3b1;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 20px;

	.text {
		width: 50%;
	}
	img {
		width: 30px;
		margin: 0 10px;
	}
}
</style>
