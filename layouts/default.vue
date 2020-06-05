<template>
	<div>
		<nuxt />
		<transition name="bar" mode="out-in">
			<bar v-if="isAuth" />
		</transition>
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
