<template>
	<div class="container">
		<div class="menu_title">
			<div class="line"></div>
			<span>Statistcs</span>
		</div>

		<h2>shop scans</h2>
		<p>{{ shopScans }}</p>
		<br />
		<h2>scan history</h2>
		<div v-for="(scanLog, i) in scanLogs" :key="i">
			<p>
				{{ scanLog.user }} <span>{{ scanLog.date }}</span>
			</p>
		</div>

		<div class="menu_links">
			<nuxt-link to="/myShop" class="item go_back">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M7.38,14.05h15.5a.61.61,0,0,0,.62-.61V10.56a.61.61,0,0,0-.62-.61H7.38V7.58a1.23,1.23,0,0,0-2.1-.87L.86,11.13a1.23,1.23,0,0,0,0,1.74l4.42,4.42a1.23,1.23,0,0,0,2.1-.87V14.05Z" />
				</svg>
				<span>Go Back</span>
			</nuxt-link>
		</div>

		<transition name="modal">
			<modal v-if="modal" @getValue="getModal">
				Accept scan ?
			</modal>
		</transition>
	</div>
</template>

<script>
import modal from '~/components/modal'

export default {
	name: 'Statistics',
	components: { modal },
	data: () => ({
		modal: false,
	}),
	computed: {
		user() {
			return this.$store.getters.user
		},
		shopScans() {
			return this.$store.getters.shop.shopScans
		},
		scanLogs() {
			return this.$store.getters.shop.scanLogs
		},
	},
	watch: {
		scanLogs(newValue, oldValue) {
			console.log('watcher', newValue, oldValue)
			if (oldValue.length != 0) {
				console.log('shop scanned')
				this.modal = true
			}
		},
	},
	methods: {
		async getModal(value) {
			if (value) {
				console.log('accept scan: increment user and shop scans')

				//	update shop in firabase
				var increment = this.$fireStoreObj.FieldValue.increment(1)
				await this.$fireStore.collection('shops').doc(this.user.email).update({ shopScans: increment })

				//	update user in firabase
				increment = this.$fireStoreObj.FieldValue.increment(1)
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
</style>
