<template>
	<div class="container">
		<div class="waves">
			<svg width="100vw" height="50vh" viewBox="0 0 1000 1000" preserveAspectRatio="none">
				<path fill="#0ee3b1" d="M.5,1000.5V.5h1000v464s0,267-224,265c-153-1.37-552,3-552,3C.5,732.5.5,1000.5.5,1000.5Z" />
			</svg>
		</div>
		<!-- <div class="products">
			<h2>Promotion</h2>
			<div class="grid">
				<card>Latte Macchiato</card>
				<card>Irish Coffee</card>
			</div>
		</div> -->
		<div>
			{{ QRscan }}
		</div>
		<bar />
	</div>
</template>

<script>
import bar from '~/components/bar.vue'
import card from '~/components/card.vue'

export default {
	components: {
		bar,
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

<style lang="scss" scoped>
$color3: #22adc2;
$color2: #2bc1a6;
$color1: #0ee3b1;

.container {
	justify-content: center;
}

.products {
	width: 100%;
	margin-bottom: 100px;
	h2 {
		margin: 0 20px;
	}
	.grid {
		display: flex;
	}
}

.waves {
	width: 100%;
	height: 50vh;
	position: absolute;
	top: 0;
}
</style>
