<template>
	<div class="bar">
		<nuxt-link class="link menu" to="/user">
			<div class="burger-button">
				<div class="wrapper">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</nuxt-link>
		<nuxt-link class="link home" to="/">
			<svg viewBox="0 0 512 512" @click="homeAnim">
				<path class="secondary" d="M224.28,180.86,68.63,418.4c-16.53,25.22,1.57,58.71,31.73,58.71H411.64c30.16,0,48.26-33.49,31.73-58.71L287.72,180.86A37.92,37.92,0,0,0,224.28,180.86Z" />
				<path class="primary" d="M224.05,66.26,70,307.21c-16.14,25.24,2,58.36,32,58.36h308.1c30,0,48.1-33.12,32-58.36L288,66.26A37.92,37.92,0,0,0,224.05,66.26Z" />
			</svg>
		</nuxt-link>
		<nuxt-link class="link map" to="/map">
			<svg viewBox="0 0 200 200" @click="mapAnim">
				<path class="secondary" d="M.08,198.37A1.2,1.2,0,0,0,1.2,200H52.66l5.93-38.39H14Z" />
				<path class="secondary" d="M28.24,124.15,19.08,148.3H60.64l3.86-24.93H29.37A1.21,1.21,0,0,0,28.24,124.15Z" />
				<polygon class="secondary" points="66.11 200 128.36 200 71.33 166.25 66.11 200" />
				<path class="secondary" d="M120.8,131.69a300.66,300.66,0,0,1-17.08,25.19,4.7,4.7,0,0,1-7.44,0A300.66,300.66,0,0,1,79.2,131.69q-1-1.69-2-3.36l-3.67,23.76L101,168.37l33.73-45h-9.14Q123.41,127.39,120.8,131.69Z" />
				<path class="secondary" d="M181.75,150.48l-10-26.33a1.21,1.21,0,0,0-1.13-.78H151.4l-20.32,27.11Z" />
				<path class="secondary" d="M199.92,198.37,186.8,163.78H121.11l-8.55,11.41L154.48,200H198.8A1.2,1.2,0,0,0,199.92,198.37Z" />
				<path class="primary" d="M84,130.57c3.06,5,6.08,9.54,8.66,13.28C97,150,100,154,100,154s2.68-3.49,6.53-9c2.78-4,6.18-9.08,9.61-14.68,1.37-2.24,2.75-4.57,4.1-6.94,7.09-12.5,13.32-26.36,13.32-36.48a33.56,33.56,0,1,0-67.12,0c0,10.12,6.23,24,13.32,36.48C81.16,125.84,82.59,128.25,84,130.57Zm16-57.34A13.73,13.73,0,1,1,86.27,87,13.73,13.73,0,0,1,100,73.23Z" />
			</svg>
		</nuxt-link>
		<nuxt-link class="link QRcode" to="/qr">
			<svg viewBox="0 0 512 512">
				<rect class="primary" x="66.1" y="66.1" width="91.15" height="91.15" rx="7.6" ry="7.6" />
				<rect class="primary" x="66.1" y="354.75" width="91.15" height="91.15" rx="7.6" ry="7.6" />
				<rect class="primary" x="354.75" y="66.1" width="91.15" height="91.15" rx="7.6" ry="7.6" />
				<path class="secondary" d="M196.75,204.35H26.6a7.6,7.6,0,0,1-7.6-7.6V26.6A7.6,7.6,0,0,1,26.6,19H196.75a7.6,7.6,0,0,1,7.6,7.6V196.75A7.6,7.6,0,0,1,196.75,204.35Zm-155-15.2H181.56a7.59,7.59,0,0,0,7.59-7.59V41.79a7.59,7.59,0,0,0-7.59-7.6H41.79a7.6,7.6,0,0,0-7.6,7.6V181.56A7.59,7.59,0,0,0,41.79,189.15Z" />
				<path class="secondary" d="M485.4,204.35H315.25a7.6,7.6,0,0,1-7.6-7.6V26.6a7.6,7.6,0,0,1,7.6-7.6H485.4a7.6,7.6,0,0,1,7.6,7.6V196.75A7.6,7.6,0,0,1,485.4,204.35Zm-155-15.2H470.21a7.59,7.59,0,0,0,7.6-7.59V41.79a7.6,7.6,0,0,0-7.6-7.6H330.44a7.59,7.59,0,0,0-7.59,7.6V181.56A7.59,7.59,0,0,0,330.44,189.15Z" />
				<path class="secondary" d="M196.75,493H26.6a7.6,7.6,0,0,1-7.6-7.6V315.25a7.6,7.6,0,0,1,7.6-7.6H196.75a7.6,7.6,0,0,1,7.6,7.6V485.4A7.6,7.6,0,0,1,196.75,493Zm-155-15.19H181.56a7.59,7.59,0,0,0,7.59-7.6V330.44a7.59,7.59,0,0,0-7.59-7.59H41.79a7.59,7.59,0,0,0-7.6,7.59V470.21A7.6,7.6,0,0,0,41.79,477.81Z" />
				<path class="secondary" d="M345.33,259H168.19a4,4,0,0,1-4.1-3.8h0a4,4,0,0,1,4.1-3.8H345.33a4,4,0,0,1,4.1,3.8h0A4,4,0,0,1,345.33,259Z" />
				<path class="secondary" d="M490.63,259H388.26c-1.3,0-2.37-1.7-2.37-3.8h0c0-2.1,1.07-3.8,2.37-3.8H490.63c1.31,0,2.37,1.7,2.37,3.8h0C493,257.34,491.94,259,490.63,259Z" />
				<path class="secondary" d="M129.68,259H21.5c-1.38,0-2.5-1.7-2.5-3.8h0c0-2.1,1.12-3.8,2.5-3.8H129.68c1.38,0,2.5,1.7,2.5,3.8h0C132.18,257.34,131.06,259,129.68,259Z" />
				<path class="secondary" d="M253,396.76V308.18c0-1.13,1.7-2.05,3.8-2.05h0c2.1,0,3.8.92,3.8,2.05v88.58c0,1.13-1.7,2.05-3.8,2.05h0C254.66,398.81,253,397.89,253,396.76Z" />
				<path class="secondary" d="M253,491.5v-65c0-.83,1.7-1.5,3.8-1.5h0c2.1,0,3.8.67,3.8,1.5v65c0,.83-1.7,1.5-3.8,1.5h0C254.66,493,253,492.33,253,491.5Z" />
				<path class="secondary" d="M253,204.85V161c0-.56,1.7-1,3.8-1h0c2.1,0,3.8.45,3.8,1v43.84c0,.56-1.7,1-3.8,1h0C254.66,205.87,253,205.41,253,204.85Z" />
				<path class="secondary" d="M253,109.94V21.06c0-1.14,1.7-2.06,3.8-2.06h0c2.1,0,3.8.92,3.8,2.06v88.88c0,1.14-1.7,2.06-3.8,2.06h0C254.66,112,253,111.08,253,109.94Z" />
				<path class="secondary" d="M391.7,354.63l-83,128a10.28,10.28,0,0,0,8.63,15.88h166A10.29,10.29,0,0,0,492,482.58L409,354.63A10.29,10.29,0,0,0,391.7,354.63Z" />
				<path class="primary" d="M391.63,289.45l-82.1,129.69a10.29,10.29,0,0,0,8.7,15.8H482.42a10.29,10.29,0,0,0,8.7-15.8L409,289.45A10.29,10.29,0,0,0,391.63,289.45Z" />
			</svg>
		</nuxt-link>
	</div>
</template>

<script>
import { homeAnim, mapAnim } from '~/assets/animate'

export default {
	methods: {
		menuAnim() {},
		homeAnim() {
			var triangles = document.querySelectorAll('.home svg path')
			homeAnim(triangles)
		},
		mapAnim() {
			var pointer = document.querySelectorAll('.map svg .primary')
			mapAnim(pointer)
		},
		QRcodeAnim() {},
	},
}
</script>

<style lang="scss">
$bg: rgba(56, 60, 65, 1);
$primary: #9eef6a;
$secondary: #0ee3b1;

.bar {
	width: 100%;
	height: 75px;
	position: absolute;
	bottom: 0;
	z-index: 9999;

	background: #fff;
	box-shadow: 0px 0px 25px -18px rgba(56, 60, 65, 0.5);
	display: flex;
	justify-content: space-around;
	// &.nuxt-link-active {}
	.link {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		width: 100%;

		user-select: none;
		-webkit-tap-highlight-color: rgba(158, 239, 106, 0.1);
	}
	.menu {
		.burger-button {
			position: relative;
			width: 40px;
			height: 40px;

			.wrapper {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				flex-direction: column;
			}

			span {
				background-color: $primary;
				width: 100%;
				transition: all 1s linear;
				height: 4px;
				border-radius: 2px;

				&:nth-child(1) {
					align-self: flex-start;
					width: 50%;
					margin-bottom: 7px;
					background-color: $secondary;
				}
				&:nth-child(3) {
					margin-top: 7px;
					width: 50%;
					align-self: flex-end;
					background-color: $secondary;
				}
			}
		}
	}
	.home {
		svg {
			.primary {
				opacity: 0.8;
			}
		}
	}
	.map,
	.QRcode,
	.home {
		svg {
			rect,
			.bg {
				fill: $bg;
			}
			.primary {
				fill: $primary;
			}
			.secondary {
				fill: $secondary;
			}
			width: 50px;
			height: 50px;
		}
	}
}
</style>
