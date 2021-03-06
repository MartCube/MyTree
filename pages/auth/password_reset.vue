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
			<h2>{{ $t('system_messages.reset_pass') }}</h2>
		</div>

		<ValidationObserver ref="sendEmail" tag="form" class="form" @submit.prevent="sendEmail()">
			<inputItem :name="email" :rules="'email|required'" @getValue="getEmail" />

			<div v-if="sendEmail_error !== null" class="authError">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M15.1,18.9c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1S15.1,17.2,15.1,18.9z M9.2,3l0.5,10.6c0,0.5,0.4,0.9,0.9,0.9h2.6c0.5,0,0.9-0.4,0.9-0.9L14.8,3c0-0.5-0.4-1-0.9-1h-3.7C9.6,2,9.2,2.4,9.2,3z" />
				</svg>
				{{ sendEmail_error }}
			</div>
			<input type="submit" class="submit" :value="send_email" />
		</ValidationObserver>

		<div class="links">
			<p>{{ $t('system_messages.dont_have_account') }}  ?</p>
			<nuxt-link :to="localePath('/auth/register')"> {{ $t('system_messages.sign_up') }}  </nuxt-link>
			<br />
			<p>{{ $t('system_messages.already_have_account') }} ?</p>
			<nuxt-link :to="localePath('/auth/login')"> {{ $t('system_messages.sign_in') }} </nuxt-link>

		</div>

		<modal v-if="modalEmail" type="success" @getValue="getModal">
			<svg class="icon" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="11.5" style="fill: #3a506b" />
				<path d="M9.59,18.37,4.72,13.5a.75.75,0,0,1,0-1.06l1.06-1.06a.74.74,0,0,1,1.06,0l3.28,3.28,7-7a.74.74,0,0,1,1.06,0l1.06,1.06a.75.75,0,0,1,0,1.06l-8.62,8.62a.75.75,0,0,1-1.07,0Z" style="fill: #6fffe9" />
			</svg>
			<span>{{ $t('system_messages.email_sent') }}</span>
		</modal>
	</div>
</template>

<script>
import inputItem from '~/components/inputItem.vue'
import checkbox from '~/components/checkbox.vue'
import modal from '~/components/modal'
import { ValidationObserver } from 'vee-validate'

export default {
	components: {
		inputItem,
		ValidationObserver,
		modal,
	},
	data: () => ({
		form: {
			email: null,
			newPass: null,
		},
		sendEmail_error: null,
		modalEmail: false,
	}),
	computed: {
		email() {
			return this.$t('system_messages.email')
		},
		send_email() {
			return this.$t('system_messages.send_email')
		},
	},
	mounted() {
		this.$nextTick().then(() => document.body.classList.add('dark'))
	},
	methods: {
		getEmail(value) {
			this.form.email = value
		},
		async getModal(value) {
			if (value) {
				console.log('accept ')
				this.$router.push('/')
			} else {
				console.log('decline')
			}
			this.modalEmail = false
		},
		async sendEmail() {
			const isValid = await this.$refs.sendEmail.validate()
			if (!isValid) return

			await this.$fireAuth
				.sendPasswordResetEmail(this.form.email)
				.then(() => {
					this.modalEmail = true
				})
				.catch((error) => {
					if (error.code === 'auth/user-not-found') sendEmail_error = 'User not found'
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
