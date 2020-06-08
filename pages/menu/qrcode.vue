<template>
	<div class="container">
		<h2>Your personal QRcode</h2>

		<span v-if="user.isSeller">Custom generated QRcode</span>
		<vue-qrcode v-if="user.isSeller" class="qrcode" :value="user.email" :color="qrCodeOptions.color" :width="qrCodeOptions.width" :error-correction-level="qrCodeOptions.errorCorrectionLevel" />
	</div>
</template>

<script>
import VueQrcode from 'vue-qrcode'

export default {
	components: {
		VueQrcode,
	},
	data: () => ({
		qrCodeOptions: {
			color: { dark: '#383c41', light: '#0ee3b1' },
			width: 500,
			errorCorrectionLevel: 'M',
		},
	}),
	computed: {
		user() {
			return this.$store.getters.user
		},
	},
}
</script>

<style lang="scss" scoped>
.qrcode {
	max-width: 500px;
	width: 50%;
	margin: 25px;
}
</style>
