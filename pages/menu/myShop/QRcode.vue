<template>
	<div class="container">
		<div class="menu_title">
			<div class="line"></div>
			<span>My Shop</span>
		</div>

		<vue-qrcode v-if="user.isSeller" class="qrcode" :value="user.email" :color="qrCodeOptions.color" :width="qrCodeOptions.width" :error-correction-level="qrCodeOptions.errorCorrectionLevel" />
		<btn fill :href="QRlink" download>
			download
			<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M10.2.5h3.6a1.08,1.08,0,0,1,1.08,1.08V9.13h3.93a.9.9,0,0,1,.64,1.53l-6.83,6.83a.87.87,0,0,1-1.23,0L4.55,10.66a.89.89,0,0,1,.63-1.53h4V1.58A1.07,1.07,0,0,1,10.2.5ZM23.5,17.39v5a1.08,1.08,0,0,1-1.08,1.08H1.58A1.08,1.08,0,0,1,.5,22.42v-5a1.08,1.08,0,0,1,1.08-1.08H8.17l2.2,2.2a2.29,2.29,0,0,0,3.26,0l2.2-2.2h6.59A1.08,1.08,0,0,1,23.5,17.39Zm-5.57,3.95a.9.9,0,1,0-.9.9A.89.89,0,0,0,17.93,21.34Zm2.87,0a.9.9,0,1,0-.89.9A.89.89,0,0,0,20.8,21.34Z" />
			</svg>
		</btn>
		<div class="menu_links">
			<nuxt-link to="/menu/myShop" class="item go_back">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M7.38,14.05h15.5a.61.61,0,0,0,.62-.61V10.56a.61.61,0,0,0-.62-.61H7.38V7.58a1.23,1.23,0,0,0-2.1-.87L.86,11.13a1.23,1.23,0,0,0,0,1.74l4.42,4.42a1.23,1.23,0,0,0,2.1-.87V14.05Z" />
				</svg>
				<span>Go Back</span>
			</nuxt-link>
		</div>
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
			color: { dark: '#1d2228', light: '#6fffe9' },
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

<style lang="scss">
@import '~/assets/colors.scss';

.qrcode {
	max-width: 500px;
	width: 50%;
	margin: 5% 0;
}

.btn {
	svg {
		path {
			fill: $text;
		}
		width: 1em;
		margin: 0 5px;
	}
}
</style>
