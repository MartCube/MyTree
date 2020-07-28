<template>
	<div class="container">
		<div class="menu_title">
			<div class="line"></div>
			<span>Menu</span>
		</div>

		<div class="menu_links">
			<nuxt-link class="item" to="/account">
				<svg class="icon" viewBox="0 0 24 24">
					<path d="M12,13.44A6.47,6.47,0,1,0,5.53,7,6.47,6.47,0,0,0,12,13.44Zm5.75,1.44H15.27a7.89,7.89,0,0,1-6.54,0H6.25A5.74,5.74,0,0,0,.5,20.63v.71A2.16,2.16,0,0,0,2.66,23.5H21.34a2.16,2.16,0,0,0,2.16-2.16v-.71A5.74,5.74,0,0,0,17.75,14.88Z" />
				</svg>
				<span>Account</span>
			</nuxt-link>
			<nuxt-link v-if="user.isSeller" class="item" to="/myShop">
				<svg class="icon" viewBox="0 0 24 24">
					<path d="M22.34,7.17,20.05,3.53A1.11,1.11,0,0,0,19.1,3H4.9a1.11,1.11,0,0,0-1,.53L1.66,7.17A3.13,3.13,0,0,0,3.73,12a2.59,2.59,0,0,0,.48,0,3.49,3.49,0,0,0,2.6-1.17A3.45,3.45,0,0,0,9.4,12,3.49,3.49,0,0,0,12,10.83a3.45,3.45,0,0,0,5.18,0A3.49,3.49,0,0,0,19.78,12a2.59,2.59,0,0,0,.48,0A3.13,3.13,0,0,0,22.34,7.17Zm-2.55,6a4.49,4.49,0,0,1-1-.14V16.5H5.25V13a4.57,4.57,0,0,1-1,.14,4.46,4.46,0,0,1-.63-.05A5.41,5.41,0,0,1,3,13v6.92A1.13,1.13,0,0,0,4.13,21H19.88A1.12,1.12,0,0,0,21,19.88V13a3.86,3.86,0,0,1-.57.12,4.72,4.72,0,0,1-.64.05Z" />
				</svg>
				<span>My Shop</span>
			</nuxt-link>
			<div class="item">
				<svg class="icon" viewBox="0 0 24 24">
					<path d="M21.65,4.1,12.85.44a2.16,2.16,0,0,0-1.69,0L2.36,4.1A2.2,2.2,0,0,0,1,6.13c0,9.1,5.25,15.39,10.15,17.43a2.16,2.16,0,0,0,1.69,0C16.77,21.93,23,16.28,23,6.13A2.21,2.21,0,0,0,21.65,4.1ZM12,20.72V3.26l8.06,3.36c-.15,6.94-3.76,12-8.06,14.1Z" />
				</svg>
				<span>Privacy Policy </span>
			</div>
			<div class="item">
				<svg class="icon" viewBox="0 0 24 24">
					<path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,4.88a1.86,1.86,0,1,1-1.86,1.86A1.86,1.86,0,0,1,12,5.88Zm2.48,11.27a.53.53,0,0,1-.53.53h-3.9a.53.53,0,0,1-.53-.53V16.08a.53.53,0,0,1,.53-.53h.53V12.71h-.53a.53.53,0,0,1-.53-.53V11.11a.53.53,0,0,1,.53-.53h2.84a.53.53,0,0,1,.53.53v4.44H14a.53.53,0,0,1,.53.53Z" />
				</svg>
				<span>About My Tree</span>
			</div>

			<div class="item" @click="userSignOut">
				<svg class="icon" viewBox="0 0 24 24">
					<path d="M22.7,12.74l-7.34,7.34a1.05,1.05,0,0,1-1.79-.75V15.14H7.64a1,1,0,0,1-1-1.05V9.9a1,1,0,0,1,1-1h5.93V4.67a1.05,1.05,0,0,1,1.79-.75l7.34,7.34A1.06,1.06,0,0,1,22.7,12.74ZM9.38,19.86V18.11a.52.52,0,0,0-.52-.52H5.19a1.4,1.4,0,0,1-1.4-1.4V7.81a1.4,1.4,0,0,1,1.4-1.4H8.86a.52.52,0,0,0,.52-.52V4.14a.52.52,0,0,0-.52-.52H5.19A4.2,4.2,0,0,0,1,7.81v8.38a4.2,4.2,0,0,0,4.19,4.19H8.86A.52.52,0,0,0,9.38,19.86Z" />
				</svg>
				<span>Sign Out</span>
			</div>
		</div>

		<modal v-if="modalSignOut" @getValue="getModalSignOut">
			Do you want to Sign Out ?
		</modal>
	</div>
</template>

<script>
import modal from '~/components/modal'

export default {
	middleware: 'auth',
	components: {
		modal,
	},
	data: () => ({
		modalSignOut: false,
	}),
	computed: {
		user() {
			return this.$store.getters.user
		},
	},
	methods: {
		userSignOut() {
			this.modalSignOut = true
		},
		getModalSignOut(value) {
			if (value) {
				this.$fireAuth.signOut()
				this.$store.commit('setAuth', false)
				this.$router.push('/login')
			} else this.modalSignOut = false
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';
</style>
