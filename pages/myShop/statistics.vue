<template>
	<div class="container">
		<div class="menu_title">
			<div class="line"></div>
			<span>Statistcs</span>
		</div>

		<h2>shop scans</h2>
		<p>{{ shopScans }}</p>
		<br />
		<h2>scan history</h2>
		<div v-for="(scanLog, i) in scanLogs" :key="i">
			<p>
				{{ scanLog.user }} <span>{{ scanLog.date }}</span>
			</p>
		</div>

		<div class="menu_links">
			<nuxt-link to="/myShop" class="item go_back">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M7.38,14.05h15.5a.61.61,0,0,0,.62-.61V10.56a.61.61,0,0,0-.62-.61H7.38V7.58a1.23,1.23,0,0,0-2.1-.87L.86,11.13a1.23,1.23,0,0,0,0,1.74l4.42,4.42a1.23,1.23,0,0,0,2.1-.87V14.05Z" />
				</svg>
				<span>Go Back</span>
			</nuxt-link>
		</div>

		<transition name="modal">
			<modal v-if="modal" @getValue="getModal">
				Accept scan ?
			</modal>
		</transition>
	</div>
</template>

<script>
import modal from '~/components/modal'

export default {
	name: 'Statistics',
	components: { modal },
	data: () => ({
		modal: false,
	}),
	computed: {
		user() {
			return this.$store.getters.user
		},
		shopScans() {
			return this.$store.getters.shop.shopScans
		},
		scanLogs() {
			return this.$store.getters.shop.scanLogs
		},
	},
	watch: {
		scanLogs(newValue, oldValue) {
			console.log('watcher', newValue, oldValue)
			if (oldValue.length != 0) {
				console.log('shop scanned')
				this.modal = true
			}
		},
	},
	mounted() {},
	methods: {
		async getModal(value) {
			if (value) {
				console.log('accept scan and increment user scans')
				//	update scanned shop in firabase
				const increment = this.$fireStoreObj.FieldValue.increment(1)
				await this.$fireStore.collection('users').doc(this.scanLogs[0].user).update({ scans: increment })
			} else {
				console.log('decline scan and make timeout')
			}
			this.modal = false
		},
	},
}
</script>

<style lang="scss">
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
