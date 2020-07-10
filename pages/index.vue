<template>
	<div class="container home-page">
		<div class="top-container" :class="{ open: triggerClass }" @click="closeBottomBar">
			<div class="user-card">
				{{ user.email }}
				<svg class="icon" viewBox="0 0 512 512">
					<polygon points="133.6,383.9 188.5,286.4 162.8,284.4 203.9,220.8 178.2,218.8 233,147.1 209,145.2 262.1,53.7 262.7,55.9 262.8,53 315.9,144.5 291.9,146.5 346.7,218.1 321,220.1 362.1,283.7 336.4,285.7 391.3,383.2 346.2,382.6 346.3,382.8 " />
					<rect x="252.6" y="370" width="19.6" height="89" />

					<polygon points="86.8,423.6 127.3,351.8 108.3,350.3 138.6,303.4 119.7,301.9 160.1,249.1 142.4,247.7 181.6,180.2 182,181.9 182,179.7 221.2,247.2 203.5,248.6 243.9,301.4 224.9,302.9 255.3,349.8 236.3,351.3 276.7,423.1 243.5,422.7 243.6,422.8" />
					<rect x="174.6" y="410.7" width="14.5" height="48.3" />

					<polygon points="274.7,429.9 308,370.7 292.4,369.5 317.4,330.8 301.8,329.6 335.1,286.1 320.5,284.9 352.8,229.4 353.1,230.8 353.1,228.9 385.4,284.5 370.8,285.7 404.1,329.2 388.5,330.4 413.5,369 397.9,370.3 431.1,429.4 403.8,429.1 403.8,429.2" />
					<rect x="347" y="415.3" width="11.9" height="43.8" />
				</svg>
			</div>
		</div>
		<div class="bottom-container" :class="{ open: triggerClass }" @click="openBottomBar">
			<div class="arrow">
				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
				</svg>
			</div>
			<div class="title-container">
				<h2 class="title">Our products</h2>
			</div>
			<div class="bottom-content">
				<div class="slider-container">
					<card v-for="shop in shopList" :key="shop.image" :image="shop.image" :rate="5" :title="shop.title"></card>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import card from '~/components/card'
import RadialProgressBar from 'vue-radial-progress'

export default {
	middleware: 'auth',
	components: {
		card,
		// RadialProgressBar,
	},
	async asyncData({ app }) {
		var shopList = []
		await app.$fireStore
			.collection('shops')
			.get()
			.then(function (querySnapshot) {
				querySnapshot.forEach(function (doc) {
					shopList.push(doc.data())
					console.log(doc)
				})
			})

		return {
			shopList: shopList,
		}
	},
	data: () => ({
		cards: [
			{ id: 1, title: 'Cofee-shop', image: '/index/coffee_shop1.jpg', rate: 5 },
			{ id: 2, title: 'Rachel! Who ?!', image: '/index/coffee_shop2.jpg', rate: 4 },
			{ id: 3, title: 'Coffee to go', image: '/index/coffee_shop3.jpg', rate: 5 },
			{ id: 4, title: 'Cofee-shop', image: '/index/coffee_shop1.jpg', rate: 5 },
			{ id: 5, title: 'Rachel! Who ?!', image: '/index/coffee_shop2.jpg', rate: 4 },
			{ id: 6, title: 'Coffee to go', image: '/index/coffee_shop3.jpg', rate: 3 },
		],
		completedSteps: 5,
		totalSteps: 10,
		startColor: '#6fffe9',
		stopColor: '#6fffe9',
		innerStrokeColor: 'rgba(255,255,255,.4)',
		innerStrokeWidth: 6,
		strokeWidth: 6,
		diameter: 80,
		triggerClass: false,
		bgImage: '/login/bg.jpg',
	}),
	computed: {
		QRscan() {
			return this.$store.getters.QRscan
		},
		user() {
			return this.$store.getters.user
		},
	},
	mounted() {
		this.$nextTick().then(() => document.body.classList.remove('dark'))
	},
	methods: {
		openBottomBar() {
			this.triggerClass = !this.triggerClass
			console.log(this.triggerClass)
		},
		closeBottomBar() {
			this.triggerClass = false
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
		padding: 5%;
		padding-top: 10vh;
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
			.icon {
				width: 50px;
				margin: 10px;

				fill: $primary;
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
			margin: 10px auto;
			width: fit-content;
			svg {
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
