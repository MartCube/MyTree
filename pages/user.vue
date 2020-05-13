<template>
	<div class="container">
		<!-- <div class="loading">
			<spinner v-show="!loaded" />
			<img class="image lazyload" data-srcset="/QRcode.png" alt="QRcode" @load="onLoaded" />
		</div> -->
		<div class="logout" @click="userSignOut">
			<i class="icon icon-logout" />
			<span>Logout</span>
		</div>
		<div class="userInfo">
			<p><i class="icon icon-user" />{{ user.email }}</p>
			<p><i class="icon icon-qrcode" />scans {{ user.userScansCounter }}</p>
		</div>

		<span v-if="user.isSeller">Custom generated QRcode</span>
		<vue-qrcode v-if="user.isSeller" class="qrcode" :value="user.email" :color="qrCodeOptions.color" :width="qrCodeOptions.width" :error-correction-level="qrCodeOptions.errorCorrectionLevel" />
	</div>
</template>

<script>
// import spinner from '~/components/spinner.vue'
import VueQrcode from 'vue-qrcode'
import btn from 'vue-qrcode'

export default {
	middleware: 'auth',
	components: {
		// spinner,
		VueQrcode,
	},
	data: () => ({
		loaded: false,
		qrCodeOptions: {
			color: { dark: '#383c41', light: '#0ee3b1' },
			width: 500,
			errorCorrectionLevel: 'M',
		},
	}),
	computed: {
		user() {
			return this.$store.getters.user
		},
	},
	methods: {
		onLoaded() {
			this.loaded = true
		},
		userSignOut() {
			this.$fireAuth.signOut()
			this.$store.commit('setAuth', false)
			this.$store.commit('setUser', null)
			this.$router.push('/')
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	justify-content: flex-start;
}
.loading {
	max-width: 75%;
	width: 100%;
	height: 50%;
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	.image {
		// align-self: center;
		display: flex;
		width: 100%;

		&.lazyload,
		&.lazyloading {
			opacity: 0;
		}
		&.lazyloaded {
			opacity: 1;
			transition: all 0.6s cubic-bezier(0.45, 0, 0.55, 1);
		}
	}
}

.logout {
	align-self: flex-end;

	user-select: none;
	margin: 20px;
	padding: 10px 20px;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1);

	transition: all 0.2s cubic-bezier(0.31, -0.105, 0.43, 1.59);
}
.userInfo {
	margin: 20px 0;
	p {
		margin: 5px 0;
	}
}
.qrcode {
	max-width: 500px;
	width: 50%;
	margin: 25px;
}
</style>
