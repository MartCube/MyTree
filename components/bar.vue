<template>
	<div class="bar">
		<nuxt-link class="link menu" to="/menu">
			<svg viewBox="0 0 512 512" @click="menuAnim">
				<rect class="top" x="83" y="111.5" width="173" height="41" rx="20.5" ry="20.5" />
				<rect class="mid" x="83" y="235.5" width="346" height="41" rx="20.5" ry="20.5" />
				<rect class="bot" x="256" y="360" width="173" height="41" rx="20.5" ry="20.5" />
			</svg>
		</nuxt-link>
		<nuxt-link class="link home" to="/">
			<svg viewBox="0 0 512 512" @click="homeAnim">
				<g class="triangles">
					<path class="secondary" d="M224.28,180.86,68.63,418.4c-16.53,25.22,1.57,58.71,31.73,58.71H411.64c30.16,0,48.26-33.49,31.73-58.71L287.72,180.86A37.92,37.92,0,0,0,224.28,180.86Z" />
					<path class="primary" d="M224.05,66.26,70,307.21c-16.14,25.24,2,58.36,32,58.36h308.1c30,0,48.1-33.12,32-58.36L288,66.26A37.92,37.92,0,0,0,224.05,66.26Z" />
				</g>
			</svg>
		</nuxt-link>
		<nuxt-link class="link map" to="/map">
			<svg viewBox="0 0 512 512" @click="mapAnim">
				<path class="secondary" d="M5.2,436a3,3,0,0,0,1.73,3.89,3.08,3.08,0,0,0,1.08.2H137.18l14.88-96.36H40.14Z" />
				<path class="secondary" d="M75.88,249.67l-23,60.62H157.21l9.69-62.57H78.72A3,3,0,0,0,75.88,249.67Z" />
				<path class="secondary" d="M202.53,248.36l-13,71.44,68.95,40.87,84.66-113H320.23" />
				<path class="secondary" d="M461.19,315.76l-25.1-66.09a3,3,0,0,0-2.83-1.95H385l-51,68Z" />
				<path class="secondary" d="M506.8,436l-32.93-86.82H309l-21.46,28.64,105.22,62.27H504A3,3,0,0,0,506.8,436Z" />
				<path class="secondary" d="M183,349l-20,86.91a3,3,0,0,0,2.82,4.09H334" />
				<path class="primary" d="M215.84,265.79c7.68,12.55,15.26,23.94,21.74,33.33C248.47,314.56,256,324.6,256,324.6s6.73-8.76,16.39-22.59c7-10,15.51-22.79,24.12-36.85,3.44-5.62,6.9-11.47,10.29-17.42,17.8-31.37,33.44-66.16,33.44-91.56a84.24,84.24,0,0,0-168.48,0c0,25.4,15.64,60.24,33.44,91.56C208.71,253.92,212.3,260,215.84,265.79ZM256,121.87a34.41,34.41,0,1,1-.1,0Z" />
			</svg>
		</nuxt-link>
		<nuxt-link class="link qr" to="/qr">
			<svg viewBox="0 0 512 512" @click="QRcodeAnim">
				<path class="scannerLine" d="M501.67,18H12.33C6.07,18,1,16.38,1,14.35H1c0-2,5.07-3.67,11.33-3.67H501.67c6.26,0,11.33,1.64,11.33,3.67h0C513,16.38,507.93,18,501.67,18Z" />
				<g class="boxes">
					<rect class="primary" x="72.21" y="72.29" width="88.22" height="88.22" rx="7.35" ry="7.35" />
					<rect class="primary" x="72.21" y="351.66" width="88.22" height="88.22" rx="7.35" ry="7.35" />
					<rect class="primary" x="351.58" y="72.29" width="88.22" height="88.22" rx="7.35" ry="7.35" />
				</g>
				<g>
					<path class="secondary" d="M198.67,206.09H34a7.35,7.35,0,0,1-7.35-7.35V34.06A7.35,7.35,0,0,1,34,26.71H198.67A7.35,7.35,0,0,1,206,34.06V198.74A7.35,7.35,0,0,1,198.67,206.09Zm-150-14.7H184a7.35,7.35,0,0,0,7.35-7.35V48.76A7.35,7.35,0,0,0,184,41.41H48.69a7.36,7.36,0,0,0-7.36,7.35V184A7.36,7.36,0,0,0,48.69,191.39Z" />
					<path class="secondary" d="M478,206.09H313.35a7.35,7.35,0,0,1-7.35-7.35V34.06a7.35,7.35,0,0,1,7.35-7.35H478a7.35,7.35,0,0,1,7.35,7.35V198.74A7.35,7.35,0,0,1,478,206.09Zm-150-14.7H463.33a7.36,7.36,0,0,0,7.36-7.35V48.76a7.36,7.36,0,0,0-7.36-7.35H328.06a7.35,7.35,0,0,0-7.35,7.35V184A7.35,7.35,0,0,0,328.06,191.39Z" />
					<path class="secondary" d="M198.67,485.47H34a7.35,7.35,0,0,1-7.35-7.35V313.43A7.35,7.35,0,0,1,34,306.08H198.67a7.35,7.35,0,0,1,7.35,7.35V478.12A7.35,7.35,0,0,1,198.67,485.47Zm-150-14.71H184a7.35,7.35,0,0,0,7.35-7.35V328.14a7.36,7.36,0,0,0-7.35-7.36H48.69a7.37,7.37,0,0,0-7.36,7.36V463.41A7.36,7.36,0,0,0,48.69,470.76Z" />
				</g>
				<g>
					<path class="secondary" d="M342.47,259H171a3.84,3.84,0,0,1-4-3.68h0a3.83,3.83,0,0,1,4-3.67H342.47a3.83,3.83,0,0,1,4,3.67h0A3.84,3.84,0,0,1,342.47,259Z" />
					<path class="secondary" d="M483.1,259H384c-1.27,0-2.29-1.65-2.29-3.68h0c0-2,1-3.67,2.29-3.67H483.1c1.26,0,2.29,1.64,2.29,3.67h0C485.39,257.38,484.36,259,483.1,259Z" />
					<path class="secondary" d="M133.75,259H29.05c-1.33,0-2.42-1.65-2.42-3.68h0c0-2,1.09-3.67,2.42-3.67h104.7c1.34,0,2.42,1.64,2.42,3.67h0C136.17,257.38,135.09,259,133.75,259Z" />
					<path class="secondary" d="M253.07,392.32V306.59c0-1.09,1.65-2,3.68-2h0c2,0,3.67.89,3.67,2v85.73c0,1.1-1.64,2-3.67,2h0C254.72,394.3,253.07,393.42,253.07,392.32Z" />
					<path class="secondary" d="M253.07,484v-62.9c0-.8,1.65-1.46,3.68-1.46h0c2,0,3.67.66,3.67,1.46V484c0,.81-1.64,1.46-3.67,1.46h0C254.72,485.47,253.07,484.82,253.07,484Z" />
					<path class="secondary" d="M253.07,206.58V164.16c0-.55,1.65-1,3.68-1h0c2,0,3.67.44,3.67,1v42.42c0,.55-1.64,1-3.67,1h0C254.72,207.57,253.07,207.13,253.07,206.58Z" />
					<path class="secondary" d="M253.07,114.73v-86c0-1.1,1.65-2,3.68-2h0c2,0,3.67.89,3.67,2v86c0,1.1-1.64,2-3.67,2h0C254.72,116.72,253.07,115.83,253.07,114.73Z" />
				</g>
				<g class="triangles">
					<path class="secondary" d="M381.75,352.06,311.82,458.78a17,17,0,0,0,14.25,26.38H465.93a17,17,0,0,0,14.25-26.38L410.25,352.06A17,17,0,0,0,381.75,352.06Z" />
					<path class="primary" d="M381.64,300.57,312.43,408.83a17,17,0,0,0,14.35,26.22H465.22a17,17,0,0,0,14.35-26.22L410.36,300.57A17,17,0,0,0,381.64,300.57Z" />
				</g>
			</svg>
		</nuxt-link>
	</div>
</template>

<script>
import { menuAnim, homeAnim, mapAnim, QRcodeAnim } from '~/assets/animate'

export default {
	data: () => ({
		menuActive: false,
	}),

	methods: {
		menuAnim() {
			var top = document.querySelector('.menu .top')
			var bot = document.querySelector('.menu .bot')
			this.menuActive = !this.menuActive
			menuAnim(top, bot, this.menuActive)
		},
		homeAnim() {
			var triangles = document.querySelectorAll('.home svg path')
			homeAnim(triangles)
		},
		mapAnim() {
			var pointer = document.querySelectorAll('.map svg .primary')
			mapAnim(pointer)
		},
		QRcodeAnim() {
			var line = document.querySelectorAll('.qr svg .scannerLine')
			QRcodeAnim(line)
		},
	},
}
</script>

<style lang="scss">
$bg: #4c5157;
$primary: #0ee3b1;
$secondary: #00155f;

.bar {
	width: 100%;
	height: 75px;
	position: absolute;
	bottom: 0;
	z-index: 9999;

	background: #fff;
	box-shadow: 0px 0px 25px -18px rgba(76, 81, 87, 1);
	display: flex;
	justify-content: space-around;

	.link {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		width: 100%;

		user-select: none;
		-webkit-tap-highlight-color: rgba(14, 227, 177, 0.2);

		svg {
			.primary,
			.mid {
				transition: fill 0.25s cubic-bezier(0.37, 0, 0.63, 1);
				fill: #4c5157;
			}
			.secondary,
			.top,
			.bot {
				transition: fill 0.25s cubic-bezier(0.37, 0, 0.63, 1);
				fill: #9298a0;
			}

			.triangles .primary {
				opacity: 0.8;
			}
			.scannerLine {
				opacity: 0;
			}
			width: 50px;
			height: 50px;
		}
		&.nuxt-link-exact-active {
			.primary,
			.mid {
				fill: $primary;
			}
			.secondary,
			.top,
			.bot {
				fill: $secondary;
			}
		}
	}
}
</style>
