<template>
	<div class="titleBar">
		<div class="line"></div>

		<span> <slot> title slot </slot> </span>

		<div v-if="back" class="go_back" @click="$router.back()">
			<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M7.38,14.05h15.5a.61.61,0,0,0,.62-.61V10.56a.61.61,0,0,0-.62-.61H7.38V7.58a1.23,1.23,0,0,0-2.1-.87L.86,11.13a1.23,1.23,0,0,0,0,1.74l4.42,4.42a1.23,1.23,0,0,0,2.1-.87V14.05Z" />
			</svg>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		back: {
			type: Boolean,
			default: true,
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.titleBar {
	width: 100%;
	height: 70px;
	margin-bottom: 10%;
	box-shadow: 0px 0px 25px -18px rgba(76, 81, 87, 1);

	display: flex;
	justify-content: flex-start;
	align-items: center;

	span {
		user-select: none;
		flex-grow: 1;
		text-decoration: none;
		font-size: 1.5em;
		color: $text;
		margin: 0 5%;
	}

	.line {
		width: 4px;
		border-radius: 15px;
		margin-left: 5%;
		height: 50%;
		background: $primary;
	}
	.go_back {
		background-color: $primary;
		border-radius: 10px;
		margin-right: 20px;
		display: flex;
		svg {
			width: 40px;
			height: 40px;
			fill: $secondary;
			padding: 10px;
			border-radius: 100%;
			transition: all 0.15s cubic-bezier(0.37, 0, 0.63, 1);
		}
	}
}
</style>
