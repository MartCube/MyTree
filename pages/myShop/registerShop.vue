<template>
	<div class="container">
		<titleBar link="/menu">
			Register Shop
		</titleBar>
		<p>Privacy Policy and terms for register shop</p>
	</div>
</template>

<script>
import VueQrcode from 'vue-qrcode'
import btn from '~/components/btn.vue'
import titleBar from '~/components/titleBar'

export default {
	name: 'RegisterShop',
	components: { titleBar },
	data: () => ({}),
	computed: {
		user() {
			return this.$store.getters.user
		},
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
