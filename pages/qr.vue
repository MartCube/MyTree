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
		user() {
			return this.$store.getters.user
		},
	},
	methods: {
		async onDecode(result) {
			console.log('scanned shop: ', result)

			// create DateTime
			var date = new Date()
			var options = {
				year: 'numeric',
				month: 'numeric',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric',
				hour12: false,
			}
			date = new Intl.DateTimeFormat('default', options).format(date)

			// create scanLog
			var scanLog = {
				user: this.user.email,
				date: date,
			}

			// update shop scanLogs array
			await this.$fireStore
				.collection('shops')
				.doc(result)
				.update({ scanLogs: this.$fireStoreObj.FieldValue.arrayUnion(scanLog) })

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
@import '~/assets/mixins.scss';

.QRcontainer {
	width: 100%;
	height: 100%;
}
.loading-indicator {
	height: 100vh;
	@include d-flex(column);
	svg {
		margin: 10px 0;
	}
}
</style>
