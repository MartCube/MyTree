<template>
	<a class="btn" :class="{ fill: fill }" @click="$router.push(link)">
		<slot><h1>btn slot</h1></slot>
	</a>
</template>

<script>
export default {
	props: {
		link: {
			type: String,
			default: '',
		},
		fill: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style lang="scss" scoped>
$primary: #0ee3b1;
$secondary: #00155f;
$text: #fff;
$bg: #4c5157;

.btn {
	cursor: pointer;
	user-select: none;
	text-decoration: none;
	-webkit-tap-highlight-color: transparent;

	border: 2px solid #fff;

	border-radius: 25px;
	padding: 10px 20px;
	margin: 10px 0;

	color: $text;
	font-size: 1.2em;
	text-align: center;

	transition: all 0.3s ease;
	&:hover {
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
	}
	&:active {
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
	}

	&.fill {
		background-color: $primary;
		border: 2px solid transparent;
	}
}
</style>
