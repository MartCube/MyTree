<template>
	<qrcode-stream class="QRcontainer" @decode="onDecode" @init="onInit">
		<div v-if="loading" class="loading-indicator">
			<spinner />
		</div>
		<p>{{ result }}</p>
	</qrcode-stream>
</template>

<script>
import spinner from '~/components/spinner.vue'

export default {
	components: {
		spinner,
	},
	data() {
		return {
			loading: false,
			result: 'no results',
		}
	},
	methods: {
		onDecode(result) {
			this.result = result
		},

		async onInit(promise) {
			this.loading = true

			try {
				await promise
			} catch (error) {
				console.log(error.name)
			} finally {
				this.loading = false
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.QRcontainer {
	position: fixed;
	z-index: 1000;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
}
.loading-indicator {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	svg {
		margin: 10px 0;
	}
}
</style>
