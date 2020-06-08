<template>
	<div class="container">
		<h2>Account</h2>
		<div class="userInfo">
			<p><i class="icon icon-user" />{{ user.email }}</p>
			<p><i class="icon icon-qrcode" />scans {{ user.userScansCounter }}</p>
		</div>
		<div class="btn" @click="scan">
			<span>fake scan</span>
		</div>
		<div class="QRscan">
			{{ QRscan }}
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
	methods: {
		scan() {
			this.$store.dispatch('StoreQRscan', 'mart')
		},
	},
}
</script>

<style lang="scss" scoped>
.userInfo {
	margin: 20px 0;
	p {
		margin: 5px 0;
	}
}
.btn {
	user-select: none;
	margin: 20px;
	padding: 10px 20px;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
}
</style>
