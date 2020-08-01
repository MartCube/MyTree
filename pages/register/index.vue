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
		<div class="title-page">Sign up</div>
		<ValidationObserver ref="signup" tag="form" class="auth" @submit.prevent="Submit('signIn')">
			<inputItem name="Email" :rules="emailRules" @getValue="getEmail" />
			<inputItem name="Password" :rules="passwordRules" type="password" @getValue="getPass" />
			<checkbox name="Register as a Coffee shop owner." @getValue="getSeller" />

			<div v-if="authError !== null" class="authError">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M15.1,18.9c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1S15.1,17.2,15.1,18.9z M9.2,3l0.5,10.6c0,0.5,0.4,0.9,0.9,0.9h2.6c0.5,0,0.9-0.4,0.9-0.9L14.8,3c0-0.5-0.4-1-0.9-1h-3.7C9.6,2,9.2,2.4,9.2,3z" />
				</svg>
				{{ authError }}
			</div>
			<input type="submit" class="submit" value="Sign Up" />
			<div class="SMedias">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path class="yellow" d="M22.3,9.9h-0.8v0H12v4.2h5.9c-0.9,2.4-3.2,4.2-5.9,4.2c-3.5,0-6.3-2.8-6.3-6.3S8.5,5.7,12,5.7c1.6,0,3.1,0.6,4.2,1.6l3-3c-1.9-1.7-4.4-2.8-7.1-2.8C6.2,1.5,1.5,6.2,1.5,12S6.2,22.5,12,22.5S22.5,17.8,22.5,12C22.5,11.3,22.4,10.6,22.3,9.9z" />
					<path class="red" d="M2.7,7.1l3.4,2.5C7.1,7.3,9.4,5.7,12,5.7c1.6,0,3.1,0.6,4.2,1.6l3-3c-1.9-1.7-4.4-2.8-7.1-2.8C8,1.5,4.5,3.8,2.7,7.1z" />
					<path class="green" d="M12,22.5c2.7,0,5.2-1,7-2.7L15.8,17c-1.1,0.8-2.4,1.3-3.8,1.3c-2.7,0-5-1.7-5.9-4.2l-3.4,2.6C4.4,20.2,7.9,22.5,12,22.5z" />
					<path class="blue" d="M22.3,9.9h-0.8v0H12v4.2h5.9c-0.4,1.2-1.2,2.2-2.1,2.9c0,0,0,0,0,0l3.2,2.7c-0.2,0.2,3.5-2.5,3.5-7.8C22.5,11.3,22.4,10.6,22.3,9.9z" />
				</svg>
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path class="fb" d="M17,13.4l0.6-3.9h-3.8V6.9c0-1.1,0.5-2.1,2.2-2.1h1.7V1.4c0,0-1.6-0.3-3-0.3c-3.1,0-5.1,1.9-5.1,5.3v3H6.2v3.9h3.4v9.5h4.2v-9.5H17z" />
				</svg>
			</div>
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
		passwordRules: { required: true, min: 8, regexNumber: /^(?=.*[0-9])/, regexCapital: /^(?=.*[A-Z])/ }, // regexSpecialSign: /^(?=.*[!@#\$%\^&\*])/
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
@import '~/assets/mixins.scss';
.container {
	height: 100vh;
	justify-content: flex-start;
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
	@include d-flex(column);
	.title {
		font-size: 2.5em;
	}
	svg {
		width: 30%;
		height: auto;
		margin: 3% 0 3%;
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
.title-page{
	@include d-flex(null, center, center, 80%);
	font-size: 1.5em;
	margin: 2rem 0;
	text-transform: capitalize;
}
.auth {
	margin:0 0 10%;
	@include d-flex(row, flex-start, flex-start, 80%);
	flex-wrap: wrap;
	color: text;
	.submit {
		width: 50%;
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

	.SMedias {
		margin-top: 25px;
		@include d-flex(row, flex-end, null, 50%);
		.icon {
			.yellow {
				fill: #ffc107;
			}
			.red {
				fill: #ff3d00;
			}
			.green {
				fill: #4caf50;
			}
			.blue {
				fill: #1976d2;
			}
			.fb {
				fill: #4267b2;
			}
			width: 2em;
			height: 2em;
			padding: 5px;
			margin: 5px 10px;
			background: $bg;
			border-radius: 50px;
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
		color: $bg;
	}
}
</style>
