<template>
	<div class="container">
		<div class="menu_title">
			<div class="line"></div>
			<span>Change Password</span>
		</div>

		<ValidationObserver v-show="!reAuth" ref="SignIn" tag="form" class="auth" @submit.prevent="SignIn()">
			<inputItem dark name="Email" :rules="'email|required'" @getValue="getEmail" />
			<inputItem dark name="Password" :rules="'required'" type="password" @getValue="getPass" />

			<div v-if="error !== null" class="authError">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M15.1,18.9c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1S15.1,17.2,15.1,18.9z M9.2,3l0.5,10.6c0,0.5,0.4,0.9,0.9,0.9h2.6c0.5,0,0.9-0.4,0.9-0.9L14.8,3c0-0.5-0.4-1-0.9-1h-3.7C9.6,2,9.2,2.4,9.2,3z" />
				</svg>
				{{ error }}
			</div>
			<input type="submit" class="submit" value="Sign In" />
		</ValidationObserver>

		<ValidationObserver v-if="reAuth" ref="changePassword" tag="form" class="auth" @submit.prevent="changePassword()">
			<inputItem dark name="New Password" :rules="passwordRules" type="password" @getValue="getNewPass" />
			<inputItem dark name="Confirm New Password" :rules="'required'" type="password" @getValue="getConfirmNewPass" />

			<div v-if="error !== null" class="authError">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M15.1,18.9c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1S15.1,17.2,15.1,18.9z M9.2,3l0.5,10.6c0,0.5,0.4,0.9,0.9,0.9h2.6c0.5,0,0.9-0.4,0.9-0.9L14.8,3c0-0.5-0.4-1-0.9-1h-3.7C9.6,2,9.2,2.4,9.2,3z" />
				</svg>
				{{ error }}
			</div>
			<input type="submit" class="submit" value="Change Password" />
		</ValidationObserver>

		<div class="menu_links">
			<nuxt-link to="/account" class="item go_back">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M7.38,14.05h15.5a.61.61,0,0,0,.62-.61V10.56a.61.61,0,0,0-.62-.61H7.38V7.58a1.23,1.23,0,0,0-2.1-.87L.86,11.13a1.23,1.23,0,0,0,0,1.74l4.42,4.42a1.23,1.23,0,0,0,2.1-.87V14.05Z" />
				</svg>
				<span>Go Back</span>
			</nuxt-link>
		</div>

		<modal v-if="modal" type="success" @getValue="getModal">
			<svg class="icon" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="11.5" style="fill: #3a506b;" />
				<path d="M9.59,18.37,4.72,13.5a.75.75,0,0,1,0-1.06l1.06-1.06a.74.74,0,0,1,1.06,0l3.28,3.28,7-7a.74.74,0,0,1,1.06,0l1.06,1.06a.75.75,0,0,1,0,1.06l-8.62,8.62a.75.75,0,0,1-1.07,0Z" style="fill: #6fffe9;" />
			</svg>
			<span>Password Changed</span>
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
		reAuth: false,
		passwordRules: { required: true, min: 8, regexNumber: /^(?=.*[0-9])/, regexSpecialSign: /^(?=.*[!@#\$%\^&\*])/ },
		form: {
			email: '',
			pass: '',
			newPass: '',
			confirmNewPass: '',
		},
		error: null,
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
		getPass(value) {
			this.form.pass = value
		},
		getNewPass(value) {
			this.form.newPass = value
		},
		getConfirmNewPass(value) {
			this.form.confirmNewPass = value
		},
		getModal(value) {
			this.$router.push('/')
		},
		async changePassword() {
			const isValid = await this.$refs.changePassword.validate()
			if (!isValid) return

			if (this.form.newPass != this.form.confirmNewPass) {
				this.error = 'Passwords are not equal'
				return
			} else {
				this.error = null

				const user = await this.$fireAuth.currentUser
				var modal = false
				await user
					.updatePassword(this.form.newPass)
					.then(function () {
						modal = true
						console.log('Update successful', modal)
					})
					.catch(function (error) {
						console.log(error)
					})
				this.modal = modal
			}
		},
		async SignIn() {
			const isValid = await this.$refs.SignIn.validate()
			if (!isValid) return

			// Re-authenticate user
			const user = await this.$fireAuth.currentUser
			const credential = this.$fireAuthObj.EmailAuthProvider.credential(user.email, this.form.pass)

			var reAuth = false
			await user
				.reauthenticateWithCredential(credential)
				.then(function () {
					console.log('User re-authenticated')
					reAuth = true
				})
				.catch(function (error) {
					console.log(error)
				})
			this.reAuth = reAuth
			this.$refs.SignIn.reset()
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.auth {
	width: 80%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	align-content: center;
	flex-wrap: wrap;

	p {
		color: $text;
		font-size: 1.1em;
	}
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

	.authError {
		width: 100%;
		border-radius: 5px;
		padding: 5px;
		color: #ff1461;
		user-select: none;

		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		align-content: center;

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

.menu_title {
	width: 100%;
	height: 70px;
	margin-bottom: 10%;
	box-shadow: 0px 0px 25px -18px rgba(76, 81, 87, 1);

	display: flex;
	justify-content: flex-start;
	align-items: center;

	span {
		user-select: none;
		text-decoration: none;
		font-size: 1.5em;
		color: $text;
		margin: 0 5%;
	}

	.line {
		width: 4px;
		border-radius: 15px;
		margin-left: 5%;
		height: 50%;
		background: $primary;
	}

	.go_back {
		position: absolute;
		right: 5%;
		width: 40px;
		height: 40px;
		fill: $secondary_dark;
		padding: 10px;
		border-radius: 100%;

		transition: all 0.15s cubic-bezier(0.37, 0, 0.63, 1);

		&:active {
			background: rgba(14, 227, 177, 0.2);
			fill: $primary_dark;
		}
	}
}

.menu_links {
	width: 80%;
	flex-grow: 1;
	padding-bottom: 70px;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	.item {
		width: 100%;
		margin: 10px 0;
		user-select: none;
		border-radius: 15px;

		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		align-content: center;
		&:last-child {
			position: absolute;
			width: 80%;
			bottom: 100px;
			left: 10%;
		}

		text-decoration: none;
		color: $text;
		font-size: 1.2em;

		transition: all 0.15s cubic-bezier(0.37, 0, 0.63, 1);
		&:active {
			background: rgba($primary, 0.3);
		}

		.icon {
			width: 50px;
			padding: 10px;
			border-radius: 15px;

			fill: $secondary;
			background: $primary;
		}

		span {
			margin: 0 5%;
		}
	}
}
</style>
