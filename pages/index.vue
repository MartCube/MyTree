<template>
	<div class="container">
		<!-- <div class="waves">
			<svg width="100vw" height="50vh" viewBox="0 0 1000 1000" preserveAspectRatio="none">
				<path fill="#0ee3b1" d="M.5,1000.5V.5h1000v464s0,267-224,265c-153-1.37-552,3-552,3C.5,732.5.5,1000.5.5,1000.5Z" />
			</svg>
		</div> -->
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
		// bar,
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
