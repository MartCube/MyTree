<template>
	<a class="btn" :class="{ fill: fill }" @click="$router.push(link)">
		<slot>>btn slot></slot>
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
@import '~/assets/colors.scss';

.btn {
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;

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
	text-transform: uppercase;

	transition: all 0.3s ease;

	&:active {
		box-shadow: 0px 0px 15px -5px $secondary;
	}
	&.fill {
		background-color: $primary;
		border: 2px solid transparent;
	}
}
</style>
