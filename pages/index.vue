<template>
	<div class="container">
		<div class="waves">
			<svg viewBox="0 0 1000 1000">
				<path d="M.5,1000.5V.5h1000v464s0,267-224,265c-153-1.37-552,3-552,3C.5,732.5.5,1000.5.5,1000.5Z" />
			</svg>
		</div>
		<div class="products">
			<h2>Promotions</h2>
			<div class="grid">
				<card>Latte Macchiato</card>
				<card>Irish Coffee</card>
			</div>
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
		card,
	},
	data() {
		return {
			intro: true,
			signin: false,
		}
	},
	methods: {},
}
</script>

<style lang="scss">
$color1: #7fc7af;
$color2: #70f381;
$color3: #22adc2;
$color4: #2bc1a6;
$color5: #0ee3b1;

.container {
	justify-content: flex-end;
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
	position: absolute;
	top: 0;

	svg path {
		fill: $color5;
	}
}
</style>
