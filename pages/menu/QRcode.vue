<template>
	<div class="container">
		<div class="menu_title">
			<div class="line"></div>
			<span>My Shop</span>
		</div>

		<vue-qrcode v-if="user.isSeller" ref="qrcode" class="qrcode" :value="user.email" :color="qrCodeOptions.color" :width="qrCodeOptions.width" :error-correction-level="qrCodeOptions.errorCorrectionLevel" />

		<btn fill @click.native="downloadQR">
			download
			<svg viewBox="0 0 24 24">
				<path d="M10.2.5h3.6a1.08,1.08,0,0,1,1.08,1.08V9.13h3.93a.9.9,0,0,1,.64,1.53l-6.83,6.83a.87.87,0,0,1-1.23,0L4.55,10.66a.89.89,0,0,1,.63-1.53h4V1.58A1.07,1.07,0,0,1,10.2.5ZM23.5,17.39v5a1.08,1.08,0,0,1-1.08,1.08H1.58A1.08,1.08,0,0,1,.5,22.42v-5a1.08,1.08,0,0,1,1.08-1.08H8.17l2.2,2.2a2.29,2.29,0,0,0,3.26,0l2.2-2.2h6.59A1.08,1.08,0,0,1,23.5,17.39Zm-5.57,3.95a.9.9,0,1,0-.9.9A.89.89,0,0,0,17.93,21.34Zm2.87,0a.9.9,0,1,0-.89.9A.89.89,0,0,0,20.8,21.34Z" />
			</svg>
		</btn>

		<div class="menu_links">
			<nuxt-link to="/menu" class="item go_back">
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
	name: 'QRcode',
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
	}),
	computed: {
		user() {
			return this.$store.getters.user
		},
	},
	methods: {
		downloadQR() {
			const a = document.createElement('a')
			a.href = this.$refs.qrcode.dataUrl
			a.download = 'QRcode.png'
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)
		},
	},
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
			fill: white;
		}
		width: 1em;
		margin: 0 5px;
	}
}

.menu_title {
	width: 100%;
	height: 70px;
	margin-bottom: 10%;
	box-shadow: 0px 0px 25px -18px rgba(76, 81, 87, 1);

	display: flex;
	justify-content: flex-start;
	align-items: center;

	span {
		user-select: none;
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
		position: absolute;
		right: 5%;
		width: 40px;
		height: 40px;
		fill: $secondary_dark;
		padding: 10px;
		border-radius: 100%;

		transition: all 0.15s cubic-bezier(0.37, 0, 0.63, 1);

		&:active {
			background: rgba(14, 227, 177, 0.2);
			fill: $primary_dark;
		}
	}
}

.menu_links {
	width: 80%;
	flex-grow: 1;
	padding-bottom: 70px;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	.item {
		width: 100%;
		margin: 10px 0;
		user-select: none;
		border-radius: 15px;

		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		align-content: center;
		&:last-child {
			position: absolute;
			width: 80%;
			bottom: 100px;
			left: 10%;
		}

		text-decoration: none;
		color: $text;
		font-size: 1.2em;

		transition: all 0.15s cubic-bezier(0.37, 0, 0.63, 1);
		&:active {
			background: rgba($primary, 0.3);
		}

		.icon {
			width: 50px;
			padding: 10px;
			border-radius: 15px;

			fill: $secondary;
			background: $primary;
		}

		span {
			margin: 0 5%;
		}
	}
}
</style>
