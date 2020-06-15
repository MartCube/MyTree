<template>
	<div class="container">
		<div class="menu_title">
			<div class="line"></div>
			<span>Account settings</span>
		</div>

		<div class="menu_links">
			<div class="item">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M19,11c0,1.85-0.51,3.65-1.38,5.21l-1.45-1.45 c1.29-1.94,1.07-4.58-0.64-6.29c-1.95-1.95-5.12-1.95-7.07,0c-1.95,1.95-1.95,5.12,0,7.07c1.71,1.71,4.35,1.92,6.29,0.64 l1.72,1.72c-1.19,1.42-2.73,2.51-4.47,3.04C7.98,19.69,5,15.52,5,11V6.3l7-3.11l7,3.11V11z M12,15c-1.66,0-3-1.34-3-3s1.34-3,3-3 s3,1.34,3,3S13.66,15,12,15z" />
				</svg>
				<span> {{ user.email }}</span>
			</div>
			<div class="item">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M19,11c0,1.85-0.51,3.65-1.38,5.21l-1.45-1.45 c1.29-1.94,1.07-4.58-0.64-6.29c-1.95-1.95-5.12-1.95-7.07,0c-1.95,1.95-1.95,5.12,0,7.07c1.71,1.71,4.35,1.92,6.29,0.64 l1.72,1.72c-1.19,1.42-2.73,2.51-4.47,3.04C7.98,19.69,5,15.52,5,11V6.3l7-3.11l7,3.11V11z M12,15c-1.66,0-3-1.34-3-3s1.34-3,3-3 s3,1.34,3,3S13.66,15,12,15z" />
				</svg>
				<span>change password</span>
			</div>
			<div class="item">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
				</svg>
				<span>About</span>
			</div>
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
	methods: {},
}
</script>

<style lang="scss" scoped>
.info {
	width: 80%;
	margin: 10% 0;
}
</style>
