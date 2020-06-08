<template>
	<div class="container">
		<div class="title">
			<h2>Menu</h2>
		</div>
		<nuxt-link class="item" to="/menu/account">
			<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
			</svg>
			<span>Account</span>
		</nuxt-link>
		<nuxt-link class="item" to="/menu/QRcode">
			<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<g class="boxes">
					<rect x="72.21" y="72.29" width="88.22" height="88.22" rx="7.35" ry="7.35" />
					<rect x="72.21" y="351.66" width="88.22" height="88.22" rx="7.35" ry="7.35" />
					<rect x="351.58" y="72.29" width="88.22" height="88.22" rx="7.35" ry="7.35" />
				</g>
				<g>
					<path d="M198.67,206.09H34a7.35,7.35,0,0,1-7.35-7.35h0V34.06A7.35,7.35,0,0,1,34,26.71H198.67A7.35,7.35,0,0,1,206,34.06V198.74A7.35,7.35,0,0,1,198.67,206.09Zm-150-14.7H184a7.35,7.35,0,0,0,7.35-7.35h0V48.76A7.35,7.35,0,0,0,184,41.41H48.69a7.36,7.36,0,0,0-7.36,7.35V184a7.37,7.37,0,0,0,7.33,7.39h0Z" />
					<path d="M478,206.09H313.35a7.35,7.35,0,0,1-7.35-7.35h0V34.06a7.35,7.35,0,0,1,7.35-7.35H478a7.35,7.35,0,0,1,7.35,7.35h0V198.74A7.35,7.35,0,0,1,478,206.09Zm-150-14.7H463.33a7.36,7.36,0,0,0,7.36-7.35V48.76a7.36,7.36,0,0,0-7.36-7.35H328.06a7.35,7.35,0,0,0-7.35,7.35h0V184a7.35,7.35,0,0,0,7.31,7.39h0Z" />
					<path d="M198.67,485.47H34a7.35,7.35,0,0,1-7.35-7.35h0V313.43A7.35,7.35,0,0,1,34,306.08H198.67a7.35,7.35,0,0,1,7.35,7.35h0V478.12a7.35,7.35,0,0,1-7.35,7.35Zm-150-14.71H184a7.35,7.35,0,0,0,7.35-7.35h0V328.14a7.36,7.36,0,0,0-7.35-7.36H48.69a7.38,7.38,0,0,0-7.36,7.36V463.41a7.36,7.36,0,0,0,7.36,7.35Z" />
				</g>
				<g>
					<path d="M342.47,260.32H171c-2.12.12-3.91-2.11-4-5h0c.09-2.87,1.87-5.11,4-5H342.47c2.11-.13,3.9,2.09,4,5v0h0c-.09,2.88-1.87,5.12-4,5Z" />
					<path d="M483.1,260.32H384c-1.27,0-2.29-2.24-2.29-5h0c0-2.72,1-5,2.29-5h99.1c1.26,0,2.29,2.24,2.29,5h0C485.39,258.12,484.36,260.32,483.1,260.32Z" />
					<path d="M133.75,260.32H29.05c-1.33,0-2.42-2.24-2.42-5h0c0-2.72,1.09-5,2.42-5h104.7c1.34,0,2.42,2.24,2.42,5h0C136.17,258.12,135.09,260.32,133.75,260.32Z" />
					<path d="M251.75,392.32V306.59c0-1.09,2.24-2,5-2h0c2.72,0,5,.89,5,2v85.73c0,1.1-2.24,2-5,2h0C254,394.3,251.75,393.42,251.75,392.32Z" />
					<path d="M251.75,484V421.1c0-.8,2.24-1.46,5-1.46h0c2.72,0,5,.66,5,1.46V484c0,.81-2.24,1.46-5,1.46h0C254,485.47,251.75,484.82,251.75,484Z" />
					<path d="M251.75,206.58V164.16c0-.55,2.24-1,5-1h0c2.72,0,5,.44,5,1v42.42c0,.55-2.24,1-5,1h0C254,207.57,251.75,207.13,251.75,206.58Z" />
					<path d="M251.75,114.73v-86c0-1.1,2.24-2,5-2h0c2.72,0,5,.89,5,2v86c0,1.1-2.24,2-5,2h0C254,116.72,251.75,115.83,251.75,114.73Z" />
				</g>
				<g class="triangles">
					<path class="secondary" d="M381.75,352.06,311.82,458.78a17,17,0,0,0,14.25,26.38H465.93a17,17,0,0,0,14.25-26.38L410.25,352.06a17,17,0,0,0-28.5,0Z" />
					<path d="M381.64,300.57,312.43,408.83a17,17,0,0,0,14.35,26.22H465.22a17,17,0,0,0,14.35-26.22L410.36,300.57a17,17,0,0,0-28.72,0Z" />
				</g>
			</svg>
			<span>Get QRcode </span>
		</nuxt-link>

		<div class="item">
			<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M19,11c0,1.85-0.51,3.65-1.38,5.21l-1.45-1.45 c1.29-1.94,1.07-4.58-0.64-6.29c-1.95-1.95-5.12-1.95-7.07,0c-1.95,1.95-1.95,5.12,0,7.07c1.71,1.71,4.35,1.92,6.29,0.64 l1.72,1.72c-1.19,1.42-2.73,2.51-4.47,3.04C7.98,19.69,5,15.52,5,11V6.3l7-3.11l7,3.11V11z M12,15c-1.66,0-3-1.34-3-3s1.34-3,3-3 s3,1.34,3,3S13.66,15,12,15z" />
			</svg>
			<span>Privacy Policy </span>
		</div>
		<div class="item">
			<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
			</svg>
			<span>About</span>
		</div>
		<div class="item" @click="userSignOut">
			<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M11.8,21.8H4.6c-1.7,0-3-1.3-3-3V5.2c0-1.7,1.3-3,3-3h7.1c0.3,0,0.5,0.2,0.5,0.5v1c0,0.3-0.2,0.5-0.5,0.5H4.6c-0.6,0-1,0.4-1,1v13.6c0,0.6,0.4,1,1,1h7.1c0.3,0,0.5,0.2,0.5,0.5v1C12.3,21.6,12,21.8,11.8,21.8z" />
				<path d="M20.4,11.1l-5.6-3.2c-0.7-0.4-1.5,0.1-1.5,0.9V11H7.7c-0.4,0-0.8,0.3-0.8,0.8v0.4c0,0.4,0.3,0.8,0.8,0.8h5.7v2.2c0,0.8,0.8,1.3,1.5,0.9l5.6-3.2C21.1,12.5,21.1,11.5,20.4,11.1z" />
			</svg>
			<span>Sign Out</span>
		</div>
	</div>
</template>

<script>
import VueQrcode from 'vue-qrcode'

export default {
	middleware: 'auth',
	components: {
		// VueQrcode,
	},
	computed: {
		user() {
			return this.$store.getters.user
		},
	},
	methods: {
		userSignOut() {
			this.$fireAuth.signOut()
			this.$store.commit('setAuth', false)
			this.$router.push('/login')
		},
	},
}
</script>

<style lang="scss" scoped>
$primary: #0ee3b1;
$secondary: rgba(17, 153, 142, 1);
$text: #1d2228;
$bg: #fff;

.container {
	justify-content: flex-start;
}

.title {
	width: 90%;
	height: 70px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	font-size: 1.4em;
	font-family: 'config_bold';
}

.item {
	width: 90%;
	margin: 10px 0;
	user-select: none;
	border-radius: 15px;

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	align-content: center;

	text-decoration: none;
	color: $text;
	font-size: 1.2em;

	-webkit-tap-highlight-color: transparent;
	transition: all 0.15s cubic-bezier(0.37, 0, 0.63, 1);
	&:active {
		background: rgba(14, 227, 177, 0.2);
	}

	.icon {
		svg {
			fill: $text;
		}
		.primary {
			fill: $primary;
		}
		.secondary {
			fill: $secondary;
		}

		width: 50px;
		padding: 10px;
		background: $primary;
		border-radius: 15px;
	}

	span {
		margin: 0 5%;
	}
}
</style>
