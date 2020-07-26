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
		</div>

		<ValidationObserver ref="signup" tag="form" class="auth" @submit.prevent="Submit('signIn')">
			<inputItem name="Email" :rules="emailRules" @getValue="getEmail" />
			<inputItem name="Password" :rules="passwordRules" type="password" @getValue="getPass" />
			<checkbox name="Register as a Coffee shop owner." @getValue="getSeller" />

			<span v-if="authError !== null" class="authError">{{ authError }} <i class="icon icon-attention"></i></span>
			<input type="submit" class="submit" value="Sign Up" />
		</ValidationObserver>

		<div class="links">
			<p>Already have an account ?</p>
			<nuxt-link to="/login">
				Sign In
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import inputItem from '~/components/inputItem.vue'
import checkbox from '~/components/checkbox.vue'
import { ValidationObserver } from 'vee-validate'

export default {
	components: {
		inputItem,
		checkbox,
		ValidationObserver,
	},
	data: () => ({
		form: {
			action: 'signUp',
			email: '',
			password: '',
			isSeller: false,
		},
		emailRules: { required: true, email: true },
		passwordRules: { required: true, min: 8, regexNumber: /^(?=.*[0-9])/, regexSpecialSign: /^(?=.*[!@#\$%\^&\*])/ },
	}),
	computed: {
		authError() {
			return this.$store.getters.authError
		},
	},
	mounted() {
		this.$nextTick().then(() => document.body.classList.add('dark'))
	},
	destroyed() {
		this.$store.commit('setError', null)
	},
	methods: {
		getEmail(value) {
			this.form.email = value
		},
		getPass(value) {
			this.form.password = value
		},
		getSeller(value) {
			this.form.isSeller = value
		},
		async Submit() {
			const isValid = await this.$refs.signup.validate()
			if (!isValid) return
			await this.$store.dispatch('authenticateUser', this.form)
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.container {
	justify-content: space-between;
	color: $bg;
	background: none;
}

.bg {
	width: 100%;
	height: 100%;
	position: absolute;
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
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;

	width: 100%;
	.title {
		font-size: 2.5em;
	}
	svg {
		width: 30%;
		height: auto;
		margin: 5% 0;
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

.auth {
	width: 80%;
	margin: 10% 0;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: center;
	flex-wrap: wrap;
	color: text;
	.submit {
		width: 50%;
		padding: 10px 20px;
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

	.SMedias {
		width: 50%;
		margin-top: 25px;

		display: flex;
		justify-content: flex-end;
		.media {
			padding: 10px;
			border-radius: 50%;

			color: $primary;
			font-size: 1.4em;
		}
	}
	.authError {
		width: 100%;
		align-self: center;
		color: #ff1461;
		background-color: rgba(255, 255, 255, 0.9);
		border-radius: 5px;
		margin-top: 15px;
		padding: 5px;
		text-align: center;
		user-select: none;
	}
}

.links {
	width: 80%;
	margin: 5% 0;
	display: flex;
	flex-direction: column;
	a {
		width: fit-content;
		margin: 5px 0;

		font-size: 1.2em;
		text-decoration: underline;
		color: $bg;
	}
}
</style>
