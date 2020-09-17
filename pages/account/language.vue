<template>
	<div class="container">
		<TitleBar link="/account"> {{ $t('menu.account.choose_language') }} </TitleBar>

		<div class="menu_links">
			<nuxt-link v-for="locale in availableLocales" :key="locale.code" :class="{ active: locale.code == currentLocale }" class="item" :to="switchLocalePath(locale.code)">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M16.11,7.55c-.68-4.14-2.26-7-4.11-7S8.57,3.41,7.9,7.55ZM7.55,12c0,1,.06,2,.15,3h8.6c.09-1,.15-1.94.15-3s-.06-2-.15-3H7.7C7.61,10,7.55,11,7.55,12ZM22.61,7.55A11.52,11.52,0,0,0,15.28,1,15.72,15.72,0,0,1,17.6,7.55ZM8.72,1A11.51,11.51,0,0,0,1.4,7.55h5A15.72,15.72,0,0,1,8.72,1ZM23.11,9H17.79c.09,1,.15,2,.15,3s-.06,2-.15,3H23.1a11.2,11.2,0,0,0,.4-3,11.63,11.63,0,0,0-.39-3Zm-17,3a29.24,29.24,0,0,1,.15-3H.9A11.23,11.23,0,0,0,.9,15H6.21C6.12,14,6.07,13,6.07,12ZM7.9,16.45c.67,4.14,2.26,7.05,4.1,7.05s3.43-2.91,4.11-7ZM15.29,23a11.51,11.51,0,0,0,7.32-6.57h-5A15.72,15.72,0,0,1,15.29,23ZM1.4,16.45A11.51,11.51,0,0,0,8.72,23,15.72,15.72,0,0,1,6.4,16.45Z" />
				</svg>
				<span>{{ locale.name }}</span>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import TitleBar from '~/components/TitleBar'

export default {
	middleware: 'auth',
	components: { TitleBar },
	computed: {
		user() {
			return this.$store.getters.user
		},
		availableLocales() {
			return this.$i18n.locales
		},
		currentLocale() {
			return this.$i18n.locale
		},
	},
}
</script>
