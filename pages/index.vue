<template>
	<div class="container">
		index page
	</div>
</template>

<script>
import card from '~/components/card.vue'

export default {
	middleware: 'auth',
	components: {
		// card,
	},
	data() {
		return {}
	},
	computed: {
		QRscan() {
			return this.$store.getters.QRscan
		},
		user() {
			return this.$store.getters.user
		},
	},
	methods: {
		scan() {
			this.$store.dispatch('StoreQRscan', 'mart')
		},
	},
}
</script>

<style lang="scss" scoped></style>
