<template>
	<div class="container">
		<div class="menu_title">
			<div class="line"></div>
			<span>Account settings</span>
		</div>

		<div class="menu_links">
			<div class="item">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M23.06,9.07a.27.27,0,0,1,.44.21v9.19a2.16,2.16,0,0,1-2.16,2.15H2.66A2.16,2.16,0,0,1,.5,18.47V9.29a.27.27,0,0,1,.44-.21c1,.78,2.34,1.77,6.92,5.1,1,.69,2.55,2.15,4.14,2.14s3.23-1.48,4.15-2.14C20.73,10.85,22.06,9.85,23.06,9.07ZM12,14.87c1,0,2.54-1.31,3.3-1.85,6-4.33,6.41-4.71,7.79-5.79a1.06,1.06,0,0,0,.41-.85V5.53a2.16,2.16,0,0,0-2.16-2.15H2.66A2.15,2.15,0,0,0,.5,5.53v.85a1.06,1.06,0,0,0,.41.85C2.29,8.31,2.74,8.69,8.7,13c.76.54,2.26,1.87,3.3,1.85Z" />
				</svg>
				<span> {{ user.email }}</span>
			</div>
			<nuxt-link class="item" to="/account/changePassword">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M23.5,8.41a7.9,7.9,0,0,1-9.38,7.76L13,17.39a1.08,1.08,0,0,1-.81.36H10.56v1.8a1.08,1.08,0,0,1-1.08,1.08H7.69v1.79A1.08,1.08,0,0,1,6.61,23.5h-5A1.08,1.08,0,0,1,.5,22.42v-3.5a1.07,1.07,0,0,1,.32-.77l7.26-7.27a8.08,8.08,0,0,1-.39-2.47,7.91,7.91,0,1,1,15.81,0ZM15.59,6.25a2.16,2.16,0,1,0,2.16-2.16A2.16,2.16,0,0,0,15.59,6.25Z" />
				</svg>
				<span>Change Password</span>
			</nuxt-link>
			<div class="item">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M16.11,7.55c-.68-4.14-2.26-7-4.11-7S8.57,3.41,7.9,7.55ZM7.55,12c0,1,.06,2,.15,3h8.6c.09-1,.15-1.94.15-3s-.06-2-.15-3H7.7C7.61,10,7.55,11,7.55,12ZM22.61,7.55A11.52,11.52,0,0,0,15.28,1,15.72,15.72,0,0,1,17.6,7.55ZM8.72,1A11.51,11.51,0,0,0,1.4,7.55h5A15.72,15.72,0,0,1,8.72,1ZM23.11,9H17.79c.09,1,.15,2,.15,3s-.06,2-.15,3H23.1a11.2,11.2,0,0,0,.4-3,11.63,11.63,0,0,0-.39-3Zm-17,3a29.24,29.24,0,0,1,.15-3H.9A11.23,11.23,0,0,0,.9,15H6.21C6.12,14,6.07,13,6.07,12ZM7.9,16.45c.67,4.14,2.26,7.05,4.1,7.05s3.43-2.91,4.11-7ZM15.29,23a11.51,11.51,0,0,0,7.32-6.57h-5A15.72,15.72,0,0,1,15.29,23ZM1.4,16.45A11.51,11.51,0,0,0,8.72,23,15.72,15.72,0,0,1,6.4,16.45Z" />
				</svg>
				<span>Change Language</span>
			</div>
			<nuxt-link to="/menu" class="item go_back">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M7.38,14.05h15.5a.61.61,0,0,0,.62-.61V10.56a.61.61,0,0,0-.62-.61H7.38V7.58a1.23,1.23,0,0,0-2.1-.87L.86,11.13a1.23,1.23,0,0,0,0,1.74l4.42,4.42a1.23,1.23,0,0,0,2.1-.87V14.05Z" />
				</svg>
				<span>Go Back</span>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	middleware: 'auth',
	components: {
		// card,
	},
	data: () => ({}),
	computed: {
		user() {
			return this.$store.getters.user
		},
	},
	methods: {},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

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
