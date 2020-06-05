<template>
	<div class="container">
		<!-- <div class="products">
			<h2>Promotion</h2>
			<div class="grid">
				<card>Latte Macchiato</card>
				<card>Irish Coffee</card>
			</div>
		</div> -->
		<div class="QRscan">
			{{ QRscan }}
		</div>
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
	},
	methods: {},
}
</script>

<style lang="scss" scoped></style>
