<template>
	<div class="container home-page">
		<div class="user-container" :class="{ open: triggerClass }" @click="closeBottomBar">
			<div class="wrapper">
				<div class="avatar">
					<div class="image">
						<img src="/index/user.jpg" alt="" />
					</div>
					<h1>Hello UserName !</h1>
				</div>
			</div>
			<div class="info-container">
				<div class="cups info-item">
					<div class="icon">
						<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
							<path d="M0 0h24v24H0V0z" fill="none" />
							<path d="M6 13c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5H6v8z" opacity=".3" />
							<path d="M4 19h16v2H4zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm-4 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10v8zm4-5h-2V5h2v3z" />
						</svg>
					</div>
					<p class="title">
						Free cup
					</p>
					<div class="statistic">
						<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle id="shape" cx="50" cy="50" r="45.5" stroke="black" stroke-width="9" />
						</svg>
						<div class="numbers">
							3
						</div>
					</div>
				</div>
				<div class="balance info-item">
					<div class="icon">
						<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
							<path d="M0 0h24v24H0V0z" fill="none" />
							<path d="M15 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" opacity=".3" />
							<path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12c0 3.73 2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z" />
						</svg>
					</div>
					<p class="title">
						Bonuces
					</p>
					<div class="statistic">
						<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle id="shape" cx="50" cy="50" r="45.5" stroke="black" stroke-width="9" />
						</svg>
						<div class="numbers">
							5
						</div>
					</div>
				</div>
				<div class="trees info-item">
					<div class="icon">
						<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
							<path d="M0 0h24v24H0V0z" fill="none" />
							<path d="M15 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" opacity=".3" />
							<path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12c0 3.73 2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z" />
						</svg>
					</div>
					<p class="title">
						Trees
					</p>
					<div class="statistic">
						<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle id="shape" cx="50" cy="50" r="45.5" stroke="black" stroke-width="9" />
						</svg>
						<div class="numbers">
							7
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom-container" :class="{ open: triggerClass }" @click="openBottomBar">
			<div class="title-container">
				<h2 class="title">
					Our products
				</h2>
			</div>
			<div class="bottom-content">
				<div class="slider-container">
					<card v-for="card in cards" id="card.id" :key="card.id" :image="card.image" :rate="card.rate" :title="card.title"></card>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import card from '~/components/card'

export default {
	middleware: 'auth',
	components: {
		card,
	},
	data() {
		return {
			cards: [
				{ id: 1, title: 'Cofee-shop', image: '/index/coffee_shop1.jpg', rate: 5 },
				{ id: 2, title: 'Rachel! Who ?!', image: '/index/coffee_shop2.jpg', rate: 4 },
				{ id: 3, title: 'Coffee to go', image: '/index/coffee_shop3.jpg', rate: 5 },
				{ id: 4, title: 'Cofee-shop', image: '/index/coffee_shop1.jpg', rate: 5 },
				{ id: 5, title: 'Rachel! Who ?!', image: '/index/coffee_shop2.jpg', rate: 4 },
				{ id: 6, title: 'Coffee to go', image: '/index/coffee_shop3.jpg', rate: 3 },
			],
			triggerClass: true,
		}
	},
	computed: {
		QRscan() {
			return this.$store.getters.QRscan
		},
		user() {
			return this.$store.getters.user
		},
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
	&::after {
		background-image: url('/index/bg.jpg');
		background-size: cover;
		filter: blur(0.6px);
		background-color: rgba(0, 0, 0, 0.4);
		background-blend-mode: saturation;
		content: '';
		background-position: right bottom;
		width: 100%;
		height: 60%;
		position: absolute;
		z-index: 0;
	}

	.user-container {
		width: 100%;
		height: 50vh;
		z-index: 2;
		color: #fff;
		transition: all 1s cubic-bezier(0.65, 0, 0.35, 1);

		padding: 1rem;
		width: 100%;
		overflow: hidden;
		&.open {
			height: 10vh;
			overflow: hidden;
			.wrapper {
				.avatar {
					.image {
						width: 2.5rem;
						margin-right: 1rem;
						height: 2.5rem;
						border-radius: 50%;
						overflow: hidden;
						border: 2px solid #364784;
					}
					h1 {
						font-size: 1rem;
					}
				}
			}
		}
		.wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			.avatar {
				display: flex;
				width: 100%;
				align-items: center;
				justify-content: space-between;
				h1 {
					font-size: 1.5rem;
					transition: all 0.6s cubic-bezier(0.5, 0, 0.75, 0);
					display: flex;
					flex-grow: 1;
				}
				.image {
					width: 5rem;
					margin: 0 10px;
					height: 5rem;
					border-radius: 50%;
					transition: all 0.6s cubic-bezier(0.5, 0, 0.75, 0);
					overflow: hidden;
					border: 3px solid $primary;
				}
				img {
					width: 100%;
					height: 100%;
					object-fit: contain;
					object-position: center;
				}
			}
		}
		.info-container {
			display: flex;
			width: 100%;
			justify-content: space-between;
			padding: 1rem;
			margin-top: 1rem;
			align-items: flex-start;
			.info-item {
				width: 30%;
				justify-content: center;
				p.title {
					font-size: 0.8em;
					text-align: center;
				}
				.icon {
					display: flex;
					justify-content: center;
					svg {
						width: 2rem;
						height: 2rem;
						fill: $primary;
					}
				}
				.statistic {
					display: flex;
					justify-content: center;
					align-items: center;
					margin-top: 1rem;
					background-image: url('/index/circle.svg');
					background-position: center;
					background-size: contain;
					position: relative;
					background-repeat: no-repeat;
					svg {
						width: 5rem;
						height: 5rem;
						#shape {
							fill: none;
							stroke: $primary;
							stroke-dasharray: 100;
							stroke-dashoffset: 400;
							stroke-width: 7;
							transition: all 4s ease-in-out;
						}
					}
					.numbers {
						height: 100%;
						width: 100%;
						position: absolute;
						z-index: 1;
						color: $secondary;
						font-size: 2em;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
				&.balance {
					.statistic {
						svg #shape {
							stroke-dasharray: 100;
							stroke-dashoffset: 100;
						}
					}
				}
				&.trees {
					.statistic {
						svg #shape {
							stroke-dasharray: 100;
							stroke-dashoffset: 300;
						}
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
		height: 50vh;
		filter: drop-shadow(2px 4px 14px rgba(0, 0, 0, 0.6));
		transition: all 1s cubic-bezier(0.65, 0, 0.35, 1);
		&.open {
			height: 90vh;
			filter: drop-shadow(0 0 4rem rgba(0, 0, 0, 1));
		}

		.title-container {
			width: 100%;
			display: flex;
			margin: 1.5rem 0;
			align-items: center;
			background-color: #fff;
			z-index: 3;
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
</style>
