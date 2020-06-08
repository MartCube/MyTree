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

		<ValidationObserver ref="signin" tag="form" class="auth" @submit.prevent="Submit('signIn')">
			<inputItem name="Email" :rules="'email|required'" @getValue="getEmail" />
			<inputItem name="Password" :rules="'min:8|required'" type="password" @getValue="getPass" />
			<span v-if="authError !== null" class="authError">{{ authError }} <i class="icon icon-attention"></i></span>
			<input type="submit" class="submit" value="Sign In" />
			<div class="SMedias">
				<div class="media">
					<i class="icon icon-facebook"></i>
				</div>
				<div class="media">
					<i class="icon icon-google"></i>
				</div>
			</div>
		</ValidationObserver>

		<div class="links">
			<p>Don't have an account ?</p>
			<nuxt-link to="/register">
				Sign Up
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import inputItem from '~/components/inputItem.vue'
import btn from '~/components/btn.vue'
import { slideRight } from '~/assets/animate'
import { ValidationObserver } from 'vee-validate'
import checkbox from '~/components/checkbox.vue'

export default {
	components: {
		inputItem,
		ValidationObserver,
	},
	data: () => ({
		form: {
			action: 'signIn',
			email: '',
			password: '',
			isSeller: false,
		},
	}),
	computed: {
		authError() {
			return this.$store.getters.authError
		},
	},
	beforeDestroy: function () {
		this.$store.commit('setError', null)
	},
	methods: {
		getEmail(value) {
			this.form.email = value
		},
		getPass(value) {
			this.form.password = value
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
$bg: #1d2228;
$primary: #0ee3b1;
$secondary: rgba(17, 153, 142, 0.75);
$text: #fff;

.container {
	justify-content: space-between;
	color: $text;
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

		color: $text;
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
	}
}

.links {
	width: 80%;
	margin: 5% 0;
	display: flex;
	flex-direction: column;
	color: $text;
	a {
		width: fit-content;
		margin: 5px 0;

		font-size: 1.2em;
		text-decoration: underline;
		color: $text;
	}
}
</style>
