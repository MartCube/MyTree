<template>
	<div class="container">
		<div class="logo">
			<svg width="25%" viewBox="0 0 206.04 237.57">
				<!-- eslint-disable-next-line prettier/prettier -->
				<path fill="#0ee3b1" d="M164.12,125.77a73.38,73.38,0,0,0-44.34-4.5A64.28,64.28,0,0,1,145.23,77a61.28,61.28,0,0,1,50-10.49c-7,28.17-34.49,38.29-52.32,38.37,5.11-10.95,21-26.26,41.28-32-13.91-1.78-28.58,5.71-36.89,12.27S133.4,100,131.88,108.34l-.87,4.84,4.87.68c9.62,1.32,25.16-.15,39.89-8.28,11.41-6.3,25.8-18.66,29.6-41.79l.67-4.13-4-1.17a70.82,70.82,0,0,0-62.41,10.88,73.38,73.38,0,0,0-26.06,36.14A64.27,64.27,0,0,1,87.91,61.32a61.27,61.27,0,0,1,15.9-48.5c20.91,20.13,15.91,49,7.07,64.5C104,67.41,98.62,46,103.81,25.57,95.31,36.72,94.47,53.18,96,63.65s6,19.43,12.42,24.91l3.75,3.19,3-3.89c6-7.67,12.44-21.86,12.77-38.68.25-13-3.26-31.67-21.39-46.53L103.33,0l-3,2.89A70.81,70.81,0,0,0,78.53,62.38,73.36,73.36,0,0,0,96.8,103a64.33,64.33,0,0,1-51.1.11,61.28,61.28,0,0,1-34.05-38C39.53,57.07,62.05,75.84,71,91.25c-12,1-33.24-5-48.35-19.75C28.1,84.43,41.93,93.39,51.76,97.31s19.8,4.56,27.78,1.7l4.64-1.66-1.86-4.56c-3.66-9-12.7-21.71-27.11-30.41-11.15-6.73-29-13-51-4.73L.31,59.13l1,4.06A70.84,70.84,0,0,0,41.93,111.8a73.35,73.35,0,0,0,44.33,4.5,64.22,64.22,0,0,1-25.45,44.3,61.28,61.28,0,0,1-49.95,10.49c7-28.18,34.49-38.3,52.33-38.38-5.12,11-21,26.27-41.28,32,13.9,1.78,28.57-5.71,36.88-12.27s13.86-14.87,15.37-23.21l.88-4.85-4.88-.67c-9.62-1.33-25.15.15-39.89,8.28-11.4,6.29-25.8,18.65-29.59,41.79L0,177.91l4,1.17A70.87,70.87,0,0,0,66.43,168.2a73.68,73.68,0,0,0,21.33-24.93,74.17,74.17,0,0,0,4.73-11.22,64.28,64.28,0,0,1,25.64,44.19,61.28,61.28,0,0,1-15.89,48.51c-20.91-20.13-15.92-49-7.07-64.5,6.93,9.91,12.25,31.3,7.07,51.75,8.49-11.16,9.34-27.61,7.82-38.08s-6-19.44-12.42-24.92l-3.76-3.18-3,3.89c-6,7.66-12.45,21.85-12.78,38.68-.25,13,3.26,31.67,21.4,46.53l3.24,2.65,3-2.9a70.86,70.86,0,0,0,21.78-59.49,73.58,73.58,0,0,0-18.27-40.64,64.27,64.27,0,0,1,51.09-.11,61.28,61.28,0,0,1,34.06,38c-27.89,8.05-50.41-10.72-59.4-26.12,12.05-1,33.25,5,48.36,19.75-5.42-12.93-19.24-21.9-29.07-25.81s-19.81-4.57-27.79-1.71l-4.63,1.67,1.85,4.56c3.66,9,12.7,21.71,27.12,30.4,11.15,6.73,29,13,51,4.74l3.92-1.48-1-4.06A70.85,70.85,0,0,0,164.12,125.77ZM96,113.53a73.17,73.17,0,0,0,8.07-3.47,73.12,73.12,0,0,0,7,5.25,74.37,74.37,0,0,0-1,8.72A75.13,75.13,0,0,0,102,127.5a76.46,76.46,0,0,0-7-5.25A73.86,73.86,0,0,0,96,113.53Z"/>
			</svg>
			<h2>MyTree</h2>
		</div>

		<div class="auth">
			<div v-show="!showSignIn" class="intro">
				<btn link="register">Sign up</btn>
				<btn fill @click.native="ShowSignIn">Login</btn>
			</div>

			<ValidationObserver v-show="showSignIn" ref="signin" tag="form" class="signin" @submit.prevent="Submit">
				<inputItem name="Email" :rules="'email|required'" @getValue="getEmail" />
				<inputItem name="Password" :rules="'min:8|required'" type="password" @getValue="getPass" />
				<span v-if="authError !== ''" class="authError">{{ authError }} <i class="icon icon-attention"></i></span>
				<input type="submit" class="submit" value="Sign In" />
				<div class="links">
					<n-link to="/register">Don't have an account ? </n-link>
					<n-link to="/login">Forgot password ? </n-link>
				</div>
			</ValidationObserver>
		</div>

		<div class="waves">
			<svg viewBox="0 0 1000 1000">
				<path d="M1000,669C635,748,296,387,1,429L0,1000H1000Z" />
				<path d="M1000,500C602,434,482,859,0,701v299H1000Z" />
			</svg>
		</div>
	</div>
</template>

<script>
import inputItem from '~/components/inputItem.vue'
import btn from '~/components/btn.vue'
import { slideRight } from '~/assets/animate'
import { ValidationObserver } from 'vee-validate'

export default {
	components: {
		inputItem,
		btn,
		ValidationObserver,
	},
	data: () => ({
		showSignIn: false,
		form: {
			action: 'signIn',
			email: '',
			password: '',
		},
	}),
	computed: {
		authError() {
			return this.$store.getters.authError
		},
	},
	methods: {
		getEmail(value) {
			this.form.email = value
		},
		getPass(value) {
			this.form.password = value
		},
		ShowSignIn() {
			this.showSignIn = !this.showSignIn
			slideRight(document.querySelectorAll('.auth .signin'))
		},
		async Submit() {
			const isValid = await this.$refs.signin.validate()
			if (!isValid) return
			await this.$store.dispatch('authenticateUser', this.form)
		},
	},
}
</script>

<style lang="scss" scoped>
$primary: #0ee3b1;
$text: #d2d9db;

.container {
	justify-content: flex-start;
}
.logo {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	margin: 10% 0;
	letter-spacing: 3px;
	h2 {
		margin: 10px 0;
	}
}

.auth {
	width: 70%;

	display: flex;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	.intro {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.signin {
		opacity: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		.submit {
			cursor: pointer;
			user-select: none;
			text-decoration: none;
			-webkit-tap-highlight-color: transparent;

			border: 2px solid #0ee3b1;
			border-radius: 25px;
			padding: 10px 20px;
			margin-top: 15px;

			background-color: transparent;
			color: #d2d9db;
			font-size: 1.2em;
			font-family: 'config';
			text-align: center;

			transition: all 0.2s ease;
			&:active {
				box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
			}
			&:focus {
				outline: none;
			}

			&.fill {
				background-color: #0ee3b1;
				color: #383c41;
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
		}
		.links {
			display: flex;
			flex-direction: column;

			a {
				user-select: none;
				text-decoration: underline;
				color: $text;
				font-size: 0.9em;
				text-align: center;
				margin: 10px 0;
			}
		}
	}
}

.waves {
	width: 100%;
	height: 50%;
	position: absolute;
	bottom: 0;

	z-index: -1;
	svg {
		display: flex;
		path {
			opacity: 0.5;
			fill: $primary;
		}
	}
}
</style>
