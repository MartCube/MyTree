<template>
	<div class="container">
		<div class="menu_title">
			<div class="line"></div>
			<span>My Shop</span>
		</div>

		<div class="menu_links">
			<nuxt-link to="myShop/QRcode" class="item">
				<svg class="icon" viewBox="0 0 24 24">
					<path d="M1,10.43h9.43V1H1ZM4.14,4.14H7.29V7.29H4.14ZM13.57,1v9.43H23V1Zm6.29,6.29H16.71V4.14h3.15ZM1,23h9.43V13.57H1Zm3.14-6.29H7.29v3.15H4.14Zm17.29-3.14H23v6.29H18.29V18.29H16.71V23H13.57V13.57h4.72v1.57h3.14Zm0,7.86H23V23H21.43Zm-3.14,0h1.57V23H18.29Z" />
				</svg>
				<span>Download QRcode</span>
			</nuxt-link>
			<nuxt-link to="myShop/edit_shop" class="item">
				<svg class="icon" viewBox="0 0 24 24">
					<path d="M16.58,5.1l3.6,3.6a.39.39,0,0,1,0,.55L11.46,18l-3.71.41a.78.78,0,0,1-.86-.86l.41-3.7L16,5.1a.4.4,0,0,1,.56,0ZM23,4.18,21.1,2.23a1.58,1.58,0,0,0-2.21,0L17.48,3.65a.39.39,0,0,0,0,.55l3.6,3.6a.39.39,0,0,0,.55,0L23,6.39A1.56,1.56,0,0,0,23,4.18ZM15.83,15.6v4.06H3.06V6.89h9.17a.52.52,0,0,0,.34-.14l1.6-1.6a.48.48,0,0,0-.34-.82H2.42A1.92,1.92,0,0,0,.5,6.25V20.3a1.92,1.92,0,0,0,1.92,1.92H16.47a1.92,1.92,0,0,0,1.92-1.92V14a.48.48,0,0,0-.82-.34L16,15.26A.52.52,0,0,0,15.83,15.6Z" />
				</svg>
				<span>Register / edit Shop</span>
			</nuxt-link>
			<nuxt-link to="/shop" class="item">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M22.34,7.17,20.05,3.53A1.11,1.11,0,0,0,19.1,3H4.9a1.11,1.11,0,0,0-1,.53L1.66,7.17A3.13,3.13,0,0,0,3.73,12a2.59,2.59,0,0,0,.48,0,3.49,3.49,0,0,0,2.6-1.17A3.45,3.45,0,0,0,9.4,12,3.49,3.49,0,0,0,12,10.83a3.45,3.45,0,0,0,5.18,0A3.49,3.49,0,0,0,19.78,12a2.59,2.59,0,0,0,.48,0A3.13,3.13,0,0,0,22.34,7.17Zm-2.55,6a4.49,4.49,0,0,1-1-.14V16.5H5.25V13a4.57,4.57,0,0,1-1,.14,4.46,4.46,0,0,1-.63-.05A5.41,5.41,0,0,1,3,13v6.92A1.13,1.13,0,0,0,4.13,21H19.88A1.12,1.12,0,0,0,21,19.88V13a3.86,3.86,0,0,1-.57.12,4.72,4.72,0,0,1-.64.05Z" />
				</svg>
				<span>View Shop</span>
			</nuxt-link>
			<nuxt-link to="/menu" class="item go_back">
				<svg class="icon" viewBox="0 0 24 24">
					<path d="M7.38,14.05h15.5a.61.61,0,0,0,.62-.61V10.56a.61.61,0,0,0-.62-.61H7.38V7.58a1.23,1.23,0,0,0-2.1-.87L.86,11.13a1.23,1.23,0,0,0,0,1.74l4.42,4.42a1.23,1.23,0,0,0,2.1-.87V14.05Z" />
				</svg>
				<span>Go Back</span>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({}),
	computed: {
		user() {
			return this.$store.getters.user
		},
	},
	mounted() {},
	methods: {},
}
</script>
