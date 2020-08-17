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
@import '~/assets/mixins.scss';

.btn {
	@include d-flex(row, center, center, initial);
	cursor: pointer;
	user-select: none;
	text-decoration: none;
	-webkit-tap-highlight-color: transparent;
	border: 2px solid $secondary;
	border-radius: 25px;
	padding: 10px 20px;
	margin: 10px 0;
	color: $secondary;
	font-size: 1.2em;
	text-transform: capitalize;
	line-height: 1;
	transition: all 0.3s ease;
	&:active {
		box-shadow: 0px 0px 15px -5px $secondary;
	}
	&.fill {
		background-color: $secondary;
		color: white;
		border: 2px solid transparent;
	}
}
</style>
