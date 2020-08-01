<template>
	<div class="container">
		<div class="menu_title">
			<div class="line"></div>
			<span>Feedback</span>
			<nuxt-link to="/menu" class="go_back">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M7.38,14.05h15.5a.61.61,0,0,0,.62-.61V10.56a.61.61,0,0,0-.62-.61H7.38V7.58a1.23,1.23,0,0,0-2.1-.87L.86,11.13a1.23,1.23,0,0,0,0,1.74l4.42,4.42a1.23,1.23,0,0,0,2.1-.87V14.05Z" />
				</svg>
			</nuxt-link>
		</div>

		<ValidationObserver ref="feedback" tag="form" class="form" name="feedback" data-netlify="true" netlify-honeypot="bot-field" method="POST" autocomplete="off" netlify @submit.prevent="feedback()">
			<!-- Netlify Honneypot -->
			<input type="hidden" name="bot-field" value="feedback" />
			<input type="hidden" name="Email" :value="feedback" />

			<inputItem dark name="Subject" :rules="'required'" @getValue="getSubject" />
			<inputItem dark name="Message" :rules="'required'" @getValue="getMessage" />

			<input type="submit" class="submit" value="Submit" />
		</ValidationObserver>

		<modal v-if="modal" type="success" @getValue="getModal">
			<svg class="icon" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="11.5" style="fill: #3a506b;" />
				<path d="M9.59,18.37,4.72,13.5a.75.75,0,0,1,0-1.06l1.06-1.06a.74.74,0,0,1,1.06,0l3.28,3.28,7-7a.74.74,0,0,1,1.06,0l1.06,1.06a.75.75,0,0,1,0,1.06l-8.62,8.62a.75.75,0,0,1-1.07,0Z" style="fill: #6fffe9;" />
			</svg>
			<span>Successfully Send</span>
		</modal>
	</div>
</template>

<script>
import modal from '~/components/modal'
import inputItem from '~/components/inputItem.vue'
import { ValidationObserver } from 'vee-validate'
export default {
	components: { modal, inputItem, ValidationObserver },
	data: () => ({
		modal: false,
		form: {
			email: '',
			subject: '',
			message: '',
		},
	}),
	computed: {
		user() {
			return this.$store.getters.user
		},
	},
	methods: {
		getEmail(value) {
			this.form.email = value
		},
		getSubject(value) {
			this.form.pass = value
		},
		getMessage(value) {
			this.form.newPass = value
		},
		async feedback() {
			const isValid = await this.$refs.feedback.validate()
			if (!isValid) return
			document.querySelector('.form').submit()
			this.modal = true
		},
		getModal(value) {
			// document.querySelector('.form').reset()
			this.modal = false
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';
@import '~/assets/mixins.scss';

.form {
	margin-bottom: 10%;
	@include d-flex(row, center, center, 80%);
	flex-wrap: wrap;
	.submit {
		width: 100%;
		padding: 10px 20px;
		margin-top: 10px;
		border: none;
		border-radius: 25px;
		background-color: $secondary;
		color: $bg;
		font-size: 1.2em;
		font-family: 'config';
		text-align: center;
		transition: all 0.2s ease;
		cursor: pointer;
		user-select: none;
		text-decoration: none;
		-webkit-tap-highlight-color: transparent;
		&:active {
			box-shadow: 0px 0px 20px -10px rgba(17, 153, 142, 0.75);
		}
		&:focus {
			outline: none;
		}
	}
}
</style>
