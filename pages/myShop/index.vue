<template>
	<div class="container">
		<titleBar> My Shop </titleBar>

		<div class="menu_links">
			<nuxt-link class="item" to="/myShop/editShop">
				<svg class="icon" viewBox="0 0 24 24">
					<path d="M16.58,5.1l3.6,3.6a.39.39,0,0,1,0,.55L11.46,18l-3.71.41a.78.78,0,0,1-.86-.86l.41-3.7L16,5.1a.4.4,0,0,1,.56,0ZM23,4.18,21.1,2.23a1.58,1.58,0,0,0-2.21,0L17.48,3.65a.39.39,0,0,0,0,.55l3.6,3.6a.39.39,0,0,0,.55,0L23,6.39A1.56,1.56,0,0,0,23,4.18ZM15.83,15.6v4.06H3.06V6.89h9.17a.52.52,0,0,0,.34-.14l1.6-1.6a.48.48,0,0,0-.34-.82H2.42A1.92,1.92,0,0,0,.5,6.25V20.3a1.92,1.92,0,0,0,1.92,1.92H16.47a1.92,1.92,0,0,0,1.92-1.92V14a.48.48,0,0,0-.82-.34L16,15.26A.52.52,0,0,0,15.83,15.6Z" />
				</svg>
				<span>Edit Shop</span>
			</nuxt-link>
			<nuxt-link class="item" to="/myShop/statistics">
				<svg class="icon" viewBox="0 0 24 24">
					<path d="M15.45,14.88h1.72a.62.62,0,0,0,.58-.58v-6a.62.62,0,0,0-.58-.57H15.45a.61.61,0,0,0-.57.57v6A.61.61,0,0,0,15.45,14.88Zm4.31,0h1.73a.62.62,0,0,0,.57-.58V4a.61.61,0,0,0-.57-.57H19.76a.61.61,0,0,0-.57.57V14.3A.61.61,0,0,0,19.76,14.88Zm-12.94,0H8.55a.61.61,0,0,0,.57-.58V11.14a.61.61,0,0,0-.57-.58H6.82a.62.62,0,0,0-.57.58V14.3A.62.62,0,0,0,6.82,14.88Zm4.32,0h1.72a.62.62,0,0,0,.58-.58V5.39a.62.62,0,0,0-.58-.58H11.14a.62.62,0,0,0-.58.58V14.3A.62.62,0,0,0,11.14,14.88Zm11.64,2.87H3.38V4.09a.72.72,0,0,0-.72-.71H1.22a.71.71,0,0,0-.72.71v15.1a1.44,1.44,0,0,0,1.44,1.44H22.78a.72.72,0,0,0,.72-.72V18.47A.72.72,0,0,0,22.78,17.75Z" />
				</svg>
				<span>Statistics </span>
			</nuxt-link>
			<nuxt-link class="item" to="/myShop/QRcode">
				<svg class="icon" viewBox="0 0 24 24">
					<path d="M1,10.43h9.43V1H1ZM4.14,4.14H7.29V7.29H4.14ZM13.57,1v9.43H23V1Zm6.29,6.29H16.71V4.14h3.15ZM1,23h9.43V13.57H1Zm3.14-6.29H7.29v3.15H4.14Zm17.29-3.14H23v6.29H18.29V18.29H16.71V23H13.57V13.57h4.72v1.57h3.14Zm0,7.86H23V23H21.43Zm-3.14,0h1.57V23H18.29Z" />
				</svg>
				<span>Download QRcode</span>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import titleBar from '~/components/titleBar'

export default {
	middleware: ['auth', 'shop'],
	components: { titleBar },
	data: () => ({}),
	computed: {},
	methods: {},
}
</script>
