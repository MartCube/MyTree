<template>
	<div class="container">
		<qrcode-stream class="QRcontainer" :track="track" :camera="camera" @decode="onDecode" @init="onInit">
			<div v-if="loading" class="loading-indicator">
				<spinner />
			</div>
		</qrcode-stream>
	</div>
</template>

<script>
import spinner from '~/components/spinner.vue'

export default {
	middleware: 'auth',
	components: {
		spinner,
	},
	data() {
		return {
			loading: false,
			track: false,
			camera: 'auto',
		}
	},
	computed: {
		QRscan() {
			return this.$store.getters.QRscan
		},
	},
	methods: {
		onDecode(result) {
			this.$store.dispatch('StoreQRscan', result)
			this.$router.push('/')
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
	width: 100%;
	height: 100%;
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
