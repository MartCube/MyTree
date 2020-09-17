<template>
	<div class="container">
		<TitleBar link="/myShop"> {{ $t('menu.my_shop.qr') }} </TitleBar>

		<vue-qrcode v-if="user.isSeller" ref="qrcode" class="qrcode" :value="user.email" :color="qrCodeOptions.color" :width="qrCodeOptions.width" :error-correction-level="qrCodeOptions.errorCorrectionLevel" />

		<btn fill @click.native="downloadQR">
			{{ $t('system_messages.download') }}
			<svg viewBox="0 0 24 24">
				<path d="M10.2.5h3.6a1.08,1.08,0,0,1,1.08,1.08V9.13h3.93a.9.9,0,0,1,.64,1.53l-6.83,6.83a.87.87,0,0,1-1.23,0L4.55,10.66a.89.89,0,0,1,.63-1.53h4V1.58A1.07,1.07,0,0,1,10.2.5ZM23.5,17.39v5a1.08,1.08,0,0,1-1.08,1.08H1.58A1.08,1.08,0,0,1,.5,22.42v-5a1.08,1.08,0,0,1,1.08-1.08H8.17l2.2,2.2a2.29,2.29,0,0,0,3.26,0l2.2-2.2h6.59A1.08,1.08,0,0,1,23.5,17.39Zm-5.57,3.95a.9.9,0,1,0-.9.9A.89.89,0,0,0,17.93,21.34Zm2.87,0a.9.9,0,1,0-.89.9A.89.89,0,0,0,20.8,21.34Z" />
			</svg>
		</btn>

		<transition name="modal">
			<modal v-if="modal" @getValue="getModal"> Accept scan ? </modal>
		</transition>
	</div>
</template>

<script>
import VueQrcode from 'vue-qrcode'

export default {
	name: 'QRcode',
	middleware: ['auth', 'shop'],
	components: {
		VueQrcode,
	},
	data: () => ({
		qrCodeOptions: {
			color: { dark: '#1d2228', light: '#6fffe9' },
			width: 500,
			errorCorrectionLevel: 'M',
		},
		modal: false,
	}),
	computed: {
		user() {
			return this.$store.getters.user
		},
		scanLogs() {
			return this.$store.getters.shop.scanLogs
		},
	},
	watch: {
		scanLogs(newValue, oldValue) {
			console.log('new val', newValue, 'old val', oldValue[0].date.date)
			if (oldValue[0].date.date != 0) {
				console.log('shop scanned')
				this.modal = true
			}
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
		async getModal(value) {
			if (value) {
				console.log('accept scan and increment user scans')
				//	update scanned shop in firabase
				const increment = this.$fireStoreObj.FieldValue.increment(1)
				await this.$fireStore.collection('users').doc(this.scanLogs[0].user).update({ scans: increment })
			} else {
				console.log('decline scan and make timeout')
			}
			this.modal = false
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
	border-radius: 25px;
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
</style>
