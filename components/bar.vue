<template>
	<div class="bar">
		<nuxt-link class="link menu" to="/menu" @click.native="menuAnim">
			<svg viewBox="0 0 512 512">
				<rect class="top" x="83" y="111.5" width="173" height="41" rx="20.5" ry="20.5" />
				<rect class="mid" x="83" y="235.5" width="346" height="41" rx="20.5" ry="20.5" />
				<rect class="bot" x="256" y="360" width="173" height="41" rx="20.5" ry="20.5" />
			</svg>
			<!-- Menu -->
		</nuxt-link>
		<nuxt-link class="link home" to="/" @click.native="homeAnim">
			<svg viewBox="0 0 512 512">
				<g class="triangles">
					<path class="secondary" d="M224.28,180.86,68.63,418.4c-16.53,25.22,1.57,58.71,31.73,58.71H411.64c30.16,0,48.26-33.49,31.73-58.71L287.72,180.86A37.92,37.92,0,0,0,224.28,180.86Z" />
					<path class="primary" d="M224.05,66.26,70,307.21c-16.14,25.24,2,58.36,32,58.36h308.1c30,0,48.1-33.12,32-58.36L288,66.26A37.92,37.92,0,0,0,224.05,66.26Z" />
				</g>
			</svg>
			<!-- Home -->
		</nuxt-link>
		<nuxt-link class="link map" to="/map" @click.native="mapAnim">
			<svg viewBox="0 0 512 512">
				<path class="secondary" d="M5.2,436a3,3,0,0,0,1.73,3.89,3.08,3.08,0,0,0,1.08.2H137.18l14.88-96.36H40.14Z" />
				<path class="secondary" d="M75.88,249.67l-23,60.62H157.21l9.69-62.57H78.72A3,3,0,0,0,75.88,249.67Z" />
				<path class="secondary" d="M202.53,248.36l-13,71.44,68.95,40.87,84.66-113H320.23" />
				<path class="secondary" d="M461.19,315.76l-25.1-66.09a3,3,0,0,0-2.83-1.95H385l-51,68Z" />
				<path class="secondary" d="M506.8,436l-32.93-86.82H309l-21.46,28.64,105.22,62.27H504A3,3,0,0,0,506.8,436Z" />
				<path class="secondary" d="M183,349l-20,86.91a3,3,0,0,0,2.82,4.09H334" />
				<path class="primary" d="M215.84,265.79c7.68,12.55,15.26,23.94,21.74,33.33C248.47,314.56,256,324.6,256,324.6s6.73-8.76,16.39-22.59c7-10,15.51-22.79,24.12-36.85,3.44-5.62,6.9-11.47,10.29-17.42,17.8-31.37,33.44-66.16,33.44-91.56a84.24,84.24,0,0,0-168.48,0c0,25.4,15.64,60.24,33.44,91.56C208.71,253.92,212.3,260,215.84,265.79ZM256,121.87a34.41,34.41,0,1,1-.1,0Z" />
			</svg>
			<!-- Find -->
		</nuxt-link>
		<nuxt-link class="link qr" to="/qr" @click.native="QRcodeAnim">
			<svg viewBox="0 0 512 512">
				<g class="boxes">
					<path class="secondary" d="M82.2,72.3h68.2c5.5,0,10,4.5,10,10v68.2c0,5.5-4.5,10-10,10H82.2c-5.5,0-10-4.5-10-10V82.3C72.2,76.8,76.7,72.3,82.2,72.3z" />
					<path class="primary" d="M82.2,351.7h68.2c5.5,0,10,4.5,10,10v68.2c0,5.5-4.5,10-10,10H82.2c-5.5,0-10-4.5-10-10v-68.2C72.2,356.1,76.7,351.7,82.2,351.7z" />
					<path class="primary" d="M361.6,72.3h68.2c5.5,0,10,4.5,10,10v68.2c0,5.5-4.5,10-10,10h-68.2c-5.5,0-10-4.5-10-10V82.3C351.6,76.8,356.1,72.3,361.6,72.3z" />
				</g>
				<g>
					<path class="secondary" d="M198.67,206.09H34a7.35,7.35,0,0,1-7.35-7.35h0V34.06A7.35,7.35,0,0,1,34,26.71H198.67A7.35,7.35,0,0,1,206,34.06V198.74A7.35,7.35,0,0,1,198.67,206.09Zm-150-14.7H184a7.35,7.35,0,0,0,7.35-7.35h0V48.76A7.35,7.35,0,0,0,184,41.41H48.69a7.36,7.36,0,0,0-7.36,7.35V184a7.37,7.37,0,0,0,7.33,7.39h0Z" />
					<path class="secondary" d="M478,206.09H313.35a7.35,7.35,0,0,1-7.35-7.35h0V34.06a7.35,7.35,0,0,1,7.35-7.35H478a7.35,7.35,0,0,1,7.35,7.35h0V198.74A7.35,7.35,0,0,1,478,206.09Zm-150-14.7H463.33a7.36,7.36,0,0,0,7.36-7.35V48.76a7.36,7.36,0,0,0-7.36-7.35H328.06a7.35,7.35,0,0,0-7.35,7.35h0V184a7.35,7.35,0,0,0,7.31,7.39h0Z" />
					<path class="secondary" d="M198.67,485.47H34a7.35,7.35,0,0,1-7.35-7.35h0V313.43A7.35,7.35,0,0,1,34,306.08H198.67a7.35,7.35,0,0,1,7.35,7.35h0V478.12a7.35,7.35,0,0,1-7.35,7.35Zm-150-14.71H184a7.35,7.35,0,0,0,7.35-7.35h0V328.14a7.36,7.36,0,0,0-7.35-7.36H48.69a7.38,7.38,0,0,0-7.36,7.36V463.41a7.36,7.36,0,0,0,7.36,7.35Z" />
				</g>
				<g>
					<path class="secondary" d="M342.47,260.32H171c-2.12.12-3.91-2.11-4-5h0c.09-2.87,1.87-5.11,4-5H342.47c2.11-.13,3.9,2.09,4,5v0h0c-.09,2.88-1.87,5.12-4,5Z" />
					<path class="secondary" d="M483.1,260.32H384c-1.27,0-2.29-2.24-2.29-5h0c0-2.72,1-5,2.29-5h99.1c1.26,0,2.29,2.24,2.29,5h0C485.39,258.12,484.36,260.32,483.1,260.32Z" />
					<path class="secondary" d="M133.75,260.32H29.05c-1.33,0-2.42-2.24-2.42-5h0c0-2.72,1.09-5,2.42-5h104.7c1.34,0,2.42,2.24,2.42,5h0C136.17,258.12,135.09,260.32,133.75,260.32Z" />
					<path class="secondary" d="M251.75,392.32V306.59c0-1.09,2.24-2,5-2h0c2.72,0,5,.89,5,2v85.73c0,1.1-2.24,2-5,2h0C254,394.3,251.75,393.42,251.75,392.32Z" />
					<path class="secondary" d="M251.75,484V421.1c0-.8,2.24-1.46,5-1.46h0c2.72,0,5,.66,5,1.46V484c0,.81-2.24,1.46-5,1.46h0C254,485.47,251.75,484.82,251.75,484Z" />
					<path class="secondary" d="M251.75,206.58V164.16c0-.55,2.24-1,5-1h0c2.72,0,5,.44,5,1v42.42c0,.55-2.24,1-5,1h0C254,207.57,251.75,207.13,251.75,206.58Z" />
					<path class="secondary" d="M251.75,114.73v-86c0-1.1,2.24-2,5-2h0c2.72,0,5,.89,5,2v86c0,1.1-2.24,2-5,2h0C254,116.72,251.75,115.83,251.75,114.73Z" />
				</g>
				<g class="triangles">
					<path class="primary" d="M381.75,352.06,311.82,458.78a17,17,0,0,0,14.25,26.38H465.93a17,17,0,0,0,14.25-26.38L410.25,352.06a17,17,0,0,0-28.5,0Z" />
					<path class="secondary" d="M381.64,300.57,312.43,408.83a17,17,0,0,0,14.35,26.22H465.22a17,17,0,0,0,14.35-26.22L410.36,300.57a17,17,0,0,0-28.72,0Z" />
				</g>
				<rect class="scannerLine" width="512" height="60" />
			</svg>
			<!-- Scan -->
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
@import '~/assets/colors.scss';

.bar {
	width: 100%;
	height: 70px;
	position: fixed;
	bottom: 0;
	z-index: 90;

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

		text-decoration: none;
		color: $text;
		color: $secondary_dark;
		letter-spacing: 2px;
		font-size: 0.9em;

		svg {
			.primary,
			.mid {
				transition: fill 0.25s cubic-bezier(0.37, 0, 0.63, 1);
				fill: $primary_dark;
			}
			.secondary,
			.top,
			.bot {
				transition: fill 0.25s cubic-bezier(0.37, 0, 0.63, 1);
				fill: $secondary_dark;
			}

			.triangles .primary {
				opacity: 0.8;
			}
			.scannerLine {
				fill: #9298a0;

				opacity: 0;
			}
			width: 45px;
			height: 45px;
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
			color: $secondary;
		}
	}
}
</style>
