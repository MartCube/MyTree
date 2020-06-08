<template>
	<div class="container">
		<div class="title">
			<div class="line"></div>
			<span>QRcode</span>
		</div>

		<h2>Your personal QRcode</h2>
		<p>Custom generated QRcode</p>
		<vue-qrcode v-if="user.isSeller" class="qrcode" :value="user.email" :color="qrCodeOptions.color" :width="qrCodeOptions.width" :error-correction-level="qrCodeOptions.errorCorrectionLevel" />

		<btn fill :href="QRlink" download>
			download
			<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M21.8,11.5v7.2c0,1.7-1.3,3-3,3H5.2c-1.7,0-3-1.3-3-3v-7.1c0-0.3,0.2-0.5,0.5-0.5h1c0.3,0,0.5,0.2,0.5,0.5v7.1c0,0.6,0.4,1,1,1h13.6c0.6,0,1-0.4,1-1v-7.1c0-0.3,0.2-0.5,0.5-0.5h1C21.6,11,21.8,11.3,21.8,11.5z" />
				<path d="M12.9,15.8l3.2-5.6c0.4-0.7-0.1-1.5-0.9-1.5H13V3.1c0-0.4-0.3-0.8-0.8-0.8h-0.4c-0.4,0-0.8,0.3-0.8,0.8v5.7H8.8c-0.8,0-1.3,0.8-0.9,1.5l3.2,5.6C11.5,16.5,12.5,16.5,12.9,15.8z" />
			</svg>
		</btn>
	</div>
</template>

<script>
import VueQrcode from 'vue-qrcode'
import btn from '~/components/btn.vue'

export default {
	components: {
		VueQrcode,
		btn,
	},
	data: () => ({
		qrCodeOptions: {
			color: { dark: '#1d2228', light: '#0ee3b1' },
			width: 500,
			errorCorrectionLevel: 'M',
		},
		QRlink: null,
	}),
	computed: {
		user() {
			return this.$store.getters.user
		},
	},
	mounted() {
		var link = document.querySelector('.qrcode')
		this.QRlink = link.src
	},
	methods: {},
}
</script>

<style lang="scss" scoped>
$primary: #0ee3b1;
$secondary: rgba(17, 153, 142, 1);
$text: #1d2228;
$bg: #fff;

.title {
	width: 100%;
	height: 70px;
	margin-bottom: 10%;
	box-shadow: 0px 0px 25px -18px rgba(76, 81, 87, 1);

	display: flex;
	justify-content: flex-start;
	align-items: center;

	span {
		text-decoration: none;
		font-size: 1.5em;
		color: $text;
		margin: 0 5%;
	}

	.line {
		width: 5%;
		height: 100%;
		background: $primary;
	}
}

.qrcode {
	max-width: 500px;
	width: 50%;
	margin: 25px;
}

.btn {
	svg {
		path {
			fill: #1d2228;
		}
		width: 1em;
		margin: 0 5px;
	}
}
</style>
