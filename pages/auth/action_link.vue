<template>
	<div class="container">
		<img class="bg lazyload" :data-srcset="'/login/bg.jpg'" />
		<div class="logo">
			<svg class="logo" viewBox="0 0 512 512">
				<g class="triangles">
					<path class="secondary" d="M224.28,180.86,68.63,418.4c-16.53,25.22,1.57,58.71,31.73,58.71H411.64c30.16,0,48.26-33.49,31.73-58.71L287.72,180.86A37.92,37.92,0,0,0,224.28,180.86Z" />
					<path class="primary" d="M224.05,66.26,70,307.21c-16.14,25.24,2,58.36,32,58.36h308.1c30,0,48.1-33.12,32-58.36L288,66.26A37.92,37.92,0,0,0,224.05,66.26Z" />
				</g>
			</svg>
			<span class="title">My Tree</span>
			<h2>{{ $t('menu.auth.action_link') }}</h2>
		</div>

		<div v-if="actionCodeError != null">
			<span> {{ $t('system_messages.link_expired') }} </span>
		</div>
		<template v-else>
			<ValidationObserver v-if="!$fetchState.pending && showResetForm" ref="resetPassword" tag="form" class="form" @submit.prevent="resetPassword()">
				<inputItem :name="new_password" type="password" :rules="passwordRules" @getValue="getNewPass" />
				<input type="submit" class="submit" :value="reset_pass" />
			</ValidationObserver>
			<div v-if="!$fetchState.pending && showVerifyEmail" class="verifyEmail">
				<span>{{ $t('system_messages.email_verified') }}</span>
				<btn fill link="/auth/login">{{ $t('system_messages.continue') }}</btn>
			</div>
		</template>

		<div class="links">
			<p>{{ $t('system_messages.dont_have_account') }} ?</p>
			<nuxt-link :to="localePath('/auth/register')"> {{ $t('system_messages.sign_up') }} </nuxt-link>
			<br />
			<p>{{ $t('system_messages.already_have_account') }} ?</p>
			<nuxt-link :to="localePath('/auth/login')"> {{ $t('system_messages.sign_in') }} </nuxt-link>
		</div>

		<modal v-if="modal" type="success" @getValue="getModal">
			<svg class="icon" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="11.5" style="fill: #3a506b" />
				<path d="M9.59,18.37,4.72,13.5a.75.75,0,0,1,0-1.06l1.06-1.06a.74.74,0,0,1,1.06,0l3.28,3.28,7-7a.74.74,0,0,1,1.06,0l1.06,1.06a.75.75,0,0,1,0,1.06l-8.62,8.62a.75.75,0,0,1-1.07,0Z" style="fill: #6fffe9" />
			</svg>
			<span>{{ $t('system_messages.password_updated') }}</span>
		</modal>
	</div>
</template>

<script>
import inputItem from '~/components/inputItem.vue'
import checkbox from '~/components/checkbox.vue'
import modal from '~/components/modal'
import btn from '~/components/btn'
import { ValidationObserver } from 'vee-validate'

export default {
	components: {
		inputItem,
		ValidationObserver,
		modal,
		btn,
	},
	async fetch() {
		this.$nextTick().then(() => document.body.classList.add('dark'))

		if (!this.$route.query.mode) {
			console.log('error')
			return
		}
		console.log(this.$route.query)
		this.mode = this.$route.query.mode
		this.actionCode = this.$route.query.oobCode

		switch (this.mode) {
			case 'resetPassword':
				await this.$fireAuth
					.verifyPasswordResetCode(this.actionCode)
					.then((email) => {
						this.showResetForm = true
					})
					.catch((error) => {
						// Code is invalid or expired. Ask the user to verify their email address
						console.log(error)
						this.actionCodeError = error.code
					})
				break
			case 'verifyEmail':
				await this.$fireAuth
					.applyActionCode(this.actionCode)
					.then(() => (this.showVerifyEmail = true))
					.catch((error) => {
						// Code is invalid or expired. Ask the user to verify their email address
						console.log(error)
						this.actionCodeError = error.code
					})
				break
			case 'recoverEmail':
				// Display email recovery handler and UI.
				handleRecoverEmail(auth, actionCode, lang)
				break
		}
	},
	data: () => ({
		form: {
			newPass: null,
		},
		passwordRules: { required: true, min: 8, regexNumber: /^(?=.*[0-9])/, regexCapital: /^(?=.*[A-Z])/ }, // regexSpecialSign: /^(?=.*[!@#\$%\^&\*])/

		mode: null,
		actionCode: null,
		actionCodeError: null,

		showResetForm: false,
		showVerifyEmail: false,

		modal: false,
	}),
	computed: {
		new_password() {
			return this.$t('system_messages.new_password')
		},
		reset_pass() {
			return this.$t('system_messages.reset_pass')
		},
	},
	methods: {
		getNewPass(value) {
			this.form.newPass = value
		},
		async getModal(value) {
			if (value) {
				console.log('accept ')
				this.$router.push('/')
			} else {
				console.log('decline')
			}
			this.modal = false
		},
		async resetPassword() {
			const isValid = await this.$refs.resetPassword.validate()
			if (!isValid) return

			await this.$fireAuth
				.confirmPasswordReset(this.actionCode, this.form.newPass)
				.then((resp) => {
					console.log('password updated')
					this.modal = true
				})
				.catch((error) => {
					console.log(error)
				})
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';
@import '~/assets/mixins.scss';
.container {
	height: 100vh;
	justify-content: space-between;
	color: $bg;
	background: none;
}

.bg {
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: -1;
	object-fit: cover;
	object-position: center;

	&.lazyload,
	&.lazyloading {
		opacity: 0;
	}
	&.lazyloaded {
		opacity: 1;
		transition: all 0.35s cubic-bezier(0.215, 0.61, 0.355, 1);
	}
}

.logo {
	@include d-flex(column);
	.title {
		font-size: 2.5em;
		margin-bottom: 20px;
	}

	svg {
		width: 30%;
		height: auto;
		margin-top: 10%;
		.primary {
			transition: fill 0.25s cubic-bezier(0.37, 0, 0.63, 1);
			fill: $primary;
			opacity: 0.6;
		}
		.secondary {
			transition: fill 0.25s cubic-bezier(0.37, 0, 0.63, 1);
			fill: $secondary;
			opacity: 0.8;
		}
	}
}

.form {
	margin: 0 0 10%;
	@include d-flex(column, flex-start, flex-start, 80%);
	flex-wrap: wrap;
	color: text;
	.submit {
		width: 100%;
		padding: 10px 20px;
		line-height: 1;
		margin-top: 25px;
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

	.authError {
		@include d-flex(row, flex-start, center);
		border-radius: 5px;
		padding: 5px;
		color: #ff1461;
		user-select: none;
		.icon {
			path {
				fill: $bg;
			}
			width: 1em;
			padding: 1px;
			margin-right: 5px;
			background: $error;
			border-radius: 50px;
		}
	}
	.forgot_password {
		@include d-flex(row, center, center, 50%);
		height: 39px;

		margin-top: 25px;
		color: $secondary_dark;
	}
}

.links {
	@include d-flex(column, null, null, 80%);
	margin: 5% 0;
	color: $bg;
	a {
		width: fit-content;
		margin: 5px 0;
		font-size: 1.2em;
		text-decoration: underline;
		text-decoration-color: $primary;
		color: $bg;
	}
}
</style>
