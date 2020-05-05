<template>
	<div class="container">
		<h2>Scan QRcode</h2>
		<div class="loading">
			<spinner v-show="!loaded" />
			<img class="image lazyload" data-srcset="/QRcode.png" alt="QRcode" @load="onLoaded" />
		</div>
	</div>
</template>

<script>
import spinner from '~/components/spinner.vue'

export default {
	components: {
		spinner,
	},
	data: () => ({
		loaded: false,
	}),
	methods: {
		onLoaded() {
			this.loaded = true
		},
	},
}
</script>

<style lang="scss" scoped>
$width: 100%;
.loading {
	max-width: 75%;
	width: 100%;
	height: 50%;
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	.image {
		// align-self: center;
		display: flex;
		width: 100%;

		&.lazyload,
		&.lazyloading {
			opacity: 0;
		}
		&.lazyloaded {
			opacity: 1;
			transition: all 0.6s cubic-bezier(0.45, 0, 0.55, 1);
		}
	}
}
</style>
