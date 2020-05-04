<template>
	<div class="bar">
		<div class="menu" @click="$router.push('login')">
			<div class="burger-button">
				<div class="wrapper">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<span>Menu</span>
		</div>
		<div class="map" @click="$router.push('seller')">
			<svg viewBox="0 0 200 200">
				<path class="cls-1" d="M.08,198.37A1.2,1.2,0,0,0,1.2,200H52.66l5.93-38.39H14Z" />
				<path class="cls-1" d="M28.24,124.15,19.08,148.3H60.64l3.86-24.93H29.37A1.21,1.21,0,0,0,28.24,124.15Z" />
				<polygon class="cls-1" points="66.11 200 128.36 200 71.33 166.25 66.11 200" />
				<path class="cls-1" d="M120.8,131.69a300.66,300.66,0,0,1-17.08,25.19,4.7,4.7,0,0,1-7.44,0A300.66,300.66,0,0,1,79.2,131.69q-1-1.69-2-3.36l-3.67,23.76L101,168.37l33.73-45h-9.14Q123.41,127.39,120.8,131.69Z" />
				<path class="cls-1" d="M181.75,150.48l-10-26.33a1.21,1.21,0,0,0-1.13-.78H151.4l-20.32,27.11Z" />
				<path class="cls-1" d="M199.92,198.37,186.8,163.78H121.11l-8.55,11.41L154.48,200H198.8A1.2,1.2,0,0,0,199.92,198.37Z" />
				<path class="cls-1" d="M84,130.57c3.06,5,6.08,9.54,8.66,13.28C97,150,100,154,100,154s2.68-3.49,6.53-9c2.78-4,6.18-9.08,9.61-14.68,1.37-2.24,2.75-4.57,4.1-6.94,7.09-12.5,13.32-26.36,13.32-36.48a33.56,33.56,0,1,0-67.12,0c0,10.12,6.23,24,13.32,36.48C81.16,125.84,82.59,128.25,84,130.57Zm16-57.34A13.73,13.73,0,1,1,86.27,87,13.73,13.73,0,0,1,100,73.23Z" />
			</svg>
			<span>Map</span>
		</div>
		<div class="QRcode" @click="$router.push('qr')">
			<svg viewBox="0 0 200 200">
				<path d="M49.49,93H26.72V26.73H49.49V39.59h-9.9V80.17h9.9ZM76.21,53.45H43.54V66.31H76.21Zm4,22.76H93V26.73H70.27V39.59h9.9ZM66.31,103V70.27H53.45V103ZM103,80.17H70.27V93H103ZM80.17,150.51v9.9H39.59v-9.9H26.73v22.77H93V150.51ZM53.45,123.79v32.66H66.31V123.79Zm22.76-4V107H26.73v22.76H39.59v-9.9ZM103,133.69H70.27v12.86H103ZM80.17,97v32.74H93V97Zm70.34,22.84h9.9v40.58h-9.9v12.86h22.77V107H150.51Zm-26.72,26.72h32.67V133.68H123.79Zm-4-22.76H107v49.48h22.76V160.41h-9.9ZM133.69,97v32.74h12.86V97ZM97,119.83h32.74V107H97Zm22.84-70.34v-9.9h40.58v9.9h12.86V26.72H107V49.49Zm26.72,26.72V43.54H133.68V76.21ZM200,200H0V0H200Zm-12.86-53.44h-9.9V133.68h9.89V66.31H150.51V53.44h36.62V12.86H146.55v9.9H133.68V12.87H66.31V49.49H53.44V12.87H12.86V53.45h9.9V66.31H12.87v67.38H49.49v12.87H12.87v40.58H53.45v-9.9H66.31v9.89h67.38V150.51h12.87v36.62h40.58ZM123.79,80.17V93h49.48V70.27H160.41v9.9ZM97,66.31h32.74V53.45H97ZM119.83,103V70.27H107V103Z" />
			</svg>
			<span>Scan</span>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.bar {
	width: 100%;
	height: 100px;
	position: absolute;
	bottom: 0;

	box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 1);
	display: flex;
	justify-content: space-around;

	.map,
	.menu,
	.QRcode {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		align-content: center;
		width: 100%;
		span {
			font-family: 'config_bold';
			margin: 5% 0;
		}
	}
	.menu {
		.burger-button {
			position: relative;
			width: 35px;
			height: 35px;

			.wrapper {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				flex-direction: column;
			}

			span {
				background-color: #0ee3b1;
				width: 100%;
				transition: all 1s linear;
				height: 4px;
				border-radius: 2px;
				&:nth-child(1) {
					width: 50%;
					margin-bottom: 4px;
				}
				&:nth-child(3) {
					margin-top: 4px;
					width: 50%;
					align-self: flex-end;
				}
			}
		}
	}
	.map {
		svg {
			path,
			polygon {
				fill: #0ee3b1;
			}
			width: 40px;
			height: 40px;
		}
	}
	.QRcode {
		background-color: #0ee3b1;
		border-top-left-radius: 50%;
		color: #383c41;

		svg {
			path {
				fill: #383c41;
			}
			width: 40px;
			height: 40px;
		}
	}
}
</style>
