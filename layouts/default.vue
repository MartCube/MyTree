<template>
	<div>
		<nuxt />
		<bar v-if="isAuth" />
	</div>
</template>

<script>
import bar from '~/components/bar.vue'

export default {
	components: {
		bar,
	},
	computed: {
		isAuth() {
			return this.$store.getters.isAuth
		},
	},
}
</script>
