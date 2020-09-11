<template>
	<div class="container">
		<titleBar> Register Shop </titleBar>

		<div class="policy">
			<h2>Terms of Services</h2>
			<h3>1. Terms</h3>
			<p>By accessing our app MyTree, you agree to be bound by these terms of service, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deserunt officia corrupti quod consectetur nulla, ducimus delectus eos dolore maxime suscipit doloribus, qui dicta voluptatibus atque voluptatum nisi quasi.</p>
			<h3>2. Use Licence</h3>
			<p>Permission is granted to temporarilly download one copy of MyTree, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto placeat laborum, nobis saepe provident id. Magni quisquam ipsa similique deleniti est sapiente natus dolore aperiam.</p>
			<h3>3. Ownership</h3>
			<p>Permission is granted to temporarilly download one copy of MyTree, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto placeat laborum, nobis saepe provident id. Magni quisquam ipsa similique deleniti est sapiente natus dolore aperiam.</p>
			<h3>4. Copyright Violations</h3>
			<p>Permission is granted to temporarilly download one copy of MyTree, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto placeat laborum, nobis saepe provident id. Magni quisquam ipsa similique deleniti est sapiente natus dolore aperiam.</p>
		</div>

		<btn fill @click.native="acceptTerms()">Accept</btn>
	</div>
</template>

<script>
import btn from '~/components/btn.vue'
import titleBar from '~/components/titleBar'

export default {
	name: 'RegisterShop',
	components: { titleBar, btn },
	data: () => ({}),
	computed: {
		user() {
			return this.$store.getters.user
		},
	},
	methods: {
		async acceptTerms() {
			// make user seller
			await this.$fireStore.collection('users').doc(this.user.email).update({ isSeller: true })
			this.$router.push('/myShop')
			// allow myShop pages
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';
@import '~/assets/mixins.scss';

.policy {
	@include d-flex(column, null, null, 80%);
	height: 70vh;
	padding-top: 10%;
	overflow-y: auto;
	color: $secondary;

	h2 {
		font-size: 2em;
		margin-bottom: 10%;
	}
	h3,
	p {
		margin-bottom: 5%;
	}
}

.container {
	.titleBar {
		margin: 0;
	}
	.btn {
		width: 80%;
		margin: 5% 0;
	}
}
</style>
