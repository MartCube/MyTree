<template>
	<div class="container home-page">
		<div class="top-container">
			<div class="user-card">
				<span>Welcome {{ user.email }}</span>
				<div class="info">
					<div class="trees">
						<svg class="icon" viewBox="0 0 512 512">
							<polygon style="fill: #00a38b;" points="133.6,383.9 188.5,286.4 162.8,284.4 203.9,220.8 178.2,218.8 233,147.1 209,145.2 262.1,53.7 262.7,55.9 262.8,53 315.9,144.5 291.9,146.5 346.7,218.1 321,220.1 362.1,283.7 336.4,285.7 391.3,383.2 346.2,382.6 346.3,382.8 " />
							<rect x="252.6" y="370" width="19.6" height="89" />

							<polygon style="fill: #00f5d0;" points="86.8,423.6 127.3,351.8 108.3,350.3 138.6,303.4 119.7,301.9 160.1,249.1 142.4,247.7 181.6,180.2 182,181.9 182,179.7 221.2,247.2 203.5,248.6 243.9,301.4 224.9,302.9 255.3,349.8 236.3,351.3 276.7,423.1 243.5,422.7 243.6,422.8" />
							<rect x="174.6" y="410.7" width="14.5" height="48.3" />

							<polygon style="fill: #00ccad;" points="274.7,429.9 308,370.7 292.4,369.5 317.4,330.8 301.8,329.6 335.1,286.1 320.5,284.9 352.8,229.4 353.1,230.8 353.1,228.9 385.4,284.5 370.8,285.7 404.1,329.2 388.5,330.4 413.5,369 397.9,370.3 431.1,429.4 403.8,429.1 403.8,429.2" />
							<rect x="347" y="415.3" width="11.9" height="43.8" />
						</svg>
						<span class="number">{{ shopScans }}</span>
					</div>
					<div class="coins" @click="fakeScan()">
						<svg class="icon" viewBox="0 0 512 512">
							<path d="M52,272v31.13c0,16.19,34,34.29,79.43,34.29a158,158,0,0,0,32.39-3.27V292.32a173.37,173.37,0,0,1-32.39,3C97,295.34,68.19,286.2,52,272Zm0-58.54V244.6c0,16.18,34,34.27,79.43,34.27a158.06,158.06,0,0,0,32.39-3.26V233.8a173.37,173.37,0,0,1-32.39,3c-34.43,0-63.24-9.13-79.43-23.35ZM460,244.6c0-16.18-34-34.29-79.44-34.29a157.9,157.9,0,0,0-32.38,3.27v62a158.6,158.6,0,0,0,32.38,3.27C426,278.89,460,260.8,460,244.6ZM52,186.05c0,16.19,34,34.29,79.43,34.29a158.06,158.06,0,0,0,32.39-3.26V155a158.07,158.07,0,0,0-32.39-3.27C86,151.77,52,169.87,52,186.05Zm0,144.47v31.15C52,377.84,86,396,131.43,396a157.32,157.32,0,0,0,32.39-3.28V350.86a173.37,173.37,0,0,1-32.39,3c-34.43,0-63.24-9.12-79.43-23.34Zm296.18,20.35v41.82A158.64,158.64,0,0,0,380.56,396C426,396,460,377.86,460,361.67V330.52c-16.19,14.23-45,23.37-79.44,23.37a175.07,175.07,0,0,1-32.38-3Zm0-58.53v41.81a159.3,159.3,0,0,0,32.38,3.26c45.47,0,79.44-18.1,79.44-34.27V272c-16.19,14.23-45,23.36-79.44,23.36a173.36,173.36,0,0,1-32.38-3ZM176.57,137.06v31.15c0,16.16,34,34.26,79.42,34.26s79.44-18.1,79.44-34.26V137.06c-16.19,14.22-45,23.35-79.44,23.35S192.76,151.28,176.57,137.06ZM256,75.37c-45.45,0-79.42,18.11-79.42,34.29S210.54,144,256,144s79.44-18.1,79.44-34.29S301.46,75.37,256,75.37ZM176.57,254.13v31.14c0,16.2,34,34.29,79.42,34.29s79.44-18.09,79.44-34.29V254.13c-16.19,14.23-45,23.35-79.44,23.35S192.76,268.36,176.57,254.13Zm0-58.55v31.15c0,16.2,34,34.29,79.42,34.29s79.44-18.09,79.44-34.29V195.58C319.24,209.82,290.39,219,256,219S192.76,209.83,176.57,195.58Zm0,117.08v31.15c0,16.17,34,34.29,79.42,34.29s79.44-18.12,79.44-34.29V312.66C319.24,326.87,290.39,336,256,336S192.76,326.88,176.57,312.66Zm0,58.53v31.16c0,16.17,34,34.28,79.42,34.28s79.44-18.11,79.44-34.28V371.19c-16.19,14.24-45,23.36-79.44,23.36S192.76,385.44,176.57,371.19Z" />
						</svg>
						<span class="number">{{ user.scans }}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom-container" :class="{ open: toggleClass }">
			<div class="arrow" @click="toggleBar">
				<svg height="24" viewBox="0 0 24 24" width="24">
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
				</svg>
			</div>
			<div class="title-container">
				<h2 class="title">Our products</h2>
			</div>
			<div class="bottom-content">
				<div class="slider-container">
					<card v-for="(shopItem, i) in shopList" :id="shopItem.id" :key="i" :image="shopItem.data.image" :title="shopItem.data.title" :description="shopItem.data.description"></card>
				</div>
			</div>
		</div>

		<modal v-if="modalScan" type="success" @getValue="getModal">
			<svg class="icon" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="11.5" style="fill: #3a506b;" />
				<path d="M9.59,18.37,4.72,13.5a.75.75,0,0,1,0-1.06l1.06-1.06a.74.74,0,0,1,1.06,0l3.28,3.28,7-7a.74.74,0,0,1,1.06,0l1.06,1.06a.75.75,0,0,1,0,1.06l-8.62,8.62a.75.75,0,0,1-1.07,0Z" style="fill: #6fffe9;" />
			</svg>
			<span>Successful Scan</span>
		</modal>
	</div>
</template>

<script>
import card from '~/components/card'
import modal from '~/components/modal'

export default {
	middleware: 'auth',
	components: {
		card,
		modal,
	},
	async asyncData({ app }) {
		var shopList = []
		await app.$fireStore
			.collection('shops')
			.get()
			.then(function (querySnapshot) {
				querySnapshot.forEach(function (doc) {
					shopList.push({
						id: doc.id,
						data: doc.data(),
					})
				})
			})
		console.log(shopList)

		return {
			shopList: shopList,
		}
	},
	data: () => ({
		toggleClass: false,
		modalScan: false,
	}),
	computed: {
		user() {
			return this.$store.getters.user
		},
		shopScans() {
			return this.$store.getters.shop.shopScans
		},
		userScans() {
			return this.$store.getters.user.scans
		},
	},
	watch: {
		userScans(newValue, oldValue) {
			console.log('watcher', newValue, oldValue)
			if (oldValue != 0) {
				console.log('shop scanned')
				this.modalScan = true
			}
		},
	},
	mounted() {
		this.$nextTick().then(() => document.body.classList.remove('dark'))
	},
	methods: {
		fakeScan() {
			this.$store.dispatch('StoreQRscan', 'marya_shop@gmail.com')
		},
		toggleBar() {
			this.toggleClass = !this.toggleClass
		},
		async getModal(value) {
			if (value) {
				console.log('accept ')
			} else {
				console.log('decline')
			}
			this.modalScan = false
		},
	},
}
</script>

<style lang="scss">
@import '~/assets/colors.scss';

.container.home-page {
	position: relative;
	width: 100%;
	background: $secondary;
	.top-container {
		z-index: 2;
		width: 100%;
		height: 50vh;
		padding: 10vh 5%;
		overflow: hidden;

		transition: padding 0.4s linear;

		.user-card {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			align-content: center;

			width: 100%;
			height: 100%;
			border-radius: 40px;
			background: linear-gradient(145deg, #344860, #3e5672);
			box-shadow: 10px 10px 40px #31445b, -10px -10px 40px #435c7b;
			color: white;
			.info {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				align-content: center;
				.trees,
				.coins {
					width: 40%;

					display: flex;
					justify-content: center;
					align-items: center;
					align-content: center;
					.icon {
						width: 50px;
						margin: 10px;

						fill: $primary;
						rect {
							fill: #1d2228;
						}
					}
					.number {
						margin: 10px;
					}
				}
			}
		}
	}

	.bottom-container {
		z-index: 3;
		background-color: #fff;
		border-radius: 30px 30px 0 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		width: 100%;
		// top: 50vh;
		transform: translateY(50vh);

		position: absolute;
		height: 90vh;
		// filter: drop-shadow(2px 4px 14px rgba(0, 0, 0, 0.6));
		transition: transform 0.6s cubic-bezier(0, 0.55, 0.45, 1);
		will-change: transform;

		&.open {
			transform: translateY(10vh);
			// filter: drop-shadow(0 0 4rem rgba(0, 0, 0, 1));
			.arrow {
				svg {
					animation: bottomBarArrow 1.5s linear 0.5s infinite;
				}
			}
		}
		.arrow {
			width: 100%;
			display: flex;
			justify-content: center;
			svg {
				margin: 10px;
				fill: $secondary;
				transform: rotateX(180deg);
				// animation: bottomBarArrowReverse 1.5s linear 0.5s infinite;
			}
		}
		.title-container {
			width: 100%;
			display: flex;
			align-items: center;
			background-color: #fff;
			z-index: 3;
			margin: 10px 0;
			position: relative;
			padding: 0 1.5rem;
			h2.title {
				width: 100%;
				display: flex;
				position: relative;
				color: #191919;
				padding-left: 1rem;
				border-left: 5px solid $primary;
			}
		}
		.bottom-content {
			margin-bottom: 4rem;
			overflow-y: auto;
			width: 100%;
			height: 100%;
			.slider-container {
				display: flex;
				justify-content: center;
				width: 100%;
				align-items: center;
				flex-direction: column;
			}
		}
	}
}

@keyframes bottomBarArrow {
	0% {
		opacity: 1;
		transform: translateY(0);
		transform: rotate(0);
	}
	100% {
		opacity: 0;
		transform: translateY(10px);
		transform: rotate(0);
	}
}
@keyframes bottomBarArrowReverse {
	0% {
		opacity: 1;
		transform: translateY(-10px);
		transform: rotate(180deg);
	}
	100% {
		opacity: 0;
		transform: translateY(0);
		transform: rotate(180deg);
	}
}
</style>
