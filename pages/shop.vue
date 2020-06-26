<template>
	<div class="container shop">
		<div class="edit">
			<svg v-if="!edit" class="icon" viewBox="0 0 24 24" @click="editOn">
				<path d="M16.58,5.1l3.6,3.6a.39.39,0,0,1,0,.55L11.46,18l-3.71.41a.78.78,0,0,1-.86-.86l.41-3.7L16,5.1a.4.4,0,0,1,.56,0ZM23,4.18,21.1,2.23a1.58,1.58,0,0,0-2.21,0L17.48,3.65a.39.39,0,0,0,0,.55l3.6,3.6a.39.39,0,0,0,.55,0L23,6.39A1.56,1.56,0,0,0,23,4.18ZM15.83,15.6v4.06H3.06V6.89h9.17a.52.52,0,0,0,.34-.14l1.6-1.6a.48.48,0,0,0-.34-.82H2.42A1.92,1.92,0,0,0,.5,6.25V20.3a1.92,1.92,0,0,0,1.92,1.92H16.47a1.92,1.92,0,0,0,1.92-1.92V14a.48.48,0,0,0-.82-.34L16,15.26A.52.52,0,0,0,15.83,15.6Z" />
			</svg>
			<svg v-if="edit" class="icon" viewBox="0 0 24 24" @click="save">
				<path class="cls-1" d="M22.78,5.53,18.47,1.22A2.47,2.47,0,0,0,16.73.5H3A2.46,2.46,0,0,0,.5,3V21A2.46,2.46,0,0,0,3,23.5H21A2.46,2.46,0,0,0,23.5,21V7.27a2.47,2.47,0,0,0-.72-1.74ZM12,20.21a3.29,3.29,0,1,1,3.29-3.28A3.29,3.29,0,0,1,12,20.21ZM16.93,4.58V9.74a.62.62,0,0,1-.62.62H4.4a.61.61,0,0,1-.61-.62V4.4a.61.61,0,0,1,.61-.61H16.13a.6.6,0,0,1,.44.18l.18.17A.67.67,0,0,1,16.93,4.58Z" />
			</svg>
		</div>

		<div v-if="modal" class="modal">
			<div class="msg">
				<h2>Saving ...</h2>
			</div>
		</div>

		<div class="image" @click="Upload">
			<img ref="image" class="lazyload" :data-src="shop.image" alt="" />

			<template v-if="edit">
				<div class="color_overlay"></div>
				<div class="text">
					Upload Image
				</div>
				<input ref="fileUpload" class="fileUpload" type="file" @change="OnFileSelected" />
			</template>
		</div>
		<div class="content">
			<div class="title">
				<h2 v-if="!edit">{{ shop.title }}</h2>
				<input v-else ref="title" :value="shop.title" type="text" />
			</div>
			<div class="info">
				<div class="item rating">
					<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M10.77,1.76,8,7.45l-6.28.92a1.37,1.37,0,0,0-.76,2.34l4.54,4.43L4.39,21.4a1.37,1.37,0,0,0,2,1.45l5.62-3,5.62,3a1.37,1.37,0,0,0,2-1.45l-1.07-6.26,4.54-4.43a1.37,1.37,0,0,0-.76-2.34L16,7.45,13.23,1.76a1.37,1.37,0,0,0-2.46,0Z" />
					</svg>
					<p>4.7</p>
				</div>
				<div class="item phone">
					<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M22.84,16.75l-5-2.15a1.07,1.07,0,0,0-1.26.31l-2.22,2.72a16.64,16.64,0,0,1-8-8L9.09,7.44A1.08,1.08,0,0,0,9.4,6.18l-2.16-5A1.07,1.07,0,0,0,6,.53L1.34,1.61A1.07,1.07,0,0,0,.5,2.66,20.84,20.84,0,0,0,21.34,23.5a1.09,1.09,0,0,0,1.06-.84L23.47,18a1.09,1.09,0,0,0-.63-1.24Z" />
					</svg>
					<p>+380 723 245</p>
				</div>
				<div class="item map">
					<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M11.13,23C4.59,13.62,3.41,12.64,3.41,9.09a8.59,8.59,0,0,1,17.18,0c0,3.45-1.18,4.38-7.72,14a1.06,1.06,0,0,1-1.74,0ZM12,12.75a3.6,3.6,0,0,0,3.65-3.66A3.51,3.51,0,0,0,12,5.54,3.58,3.58,0,0,0,8.35,9.09,3.67,3.67,0,0,0,12,12.75Z" />
					</svg>
					<p>View on map</p>
				</div>
			</div>
			<div class="description">
				<p v-if="!edit">{{ shop.description }}</p>
				<textarea v-else ref="description" :value="shop.description" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	middleware: 'auth',
	data: () => ({
		file: null,
		edit: false,
		modal: false,
	}),
	computed: {
		user() {
			return this.$store.getters.user
		},
		shop() {
			return this.$store.getters.shop
		},
	},
	methods: {
		async OnFileSelected(event) {
			this.file = event.target.files[0]
			console.log(this.file)

			var storageRef = this.$fireStorage.ref()
			console.log(storageRef)

			var imageRef = storageRef.child(`shop/${this.file.name}`)
			console.log(imageRef.location.path_)

			await imageRef.put(this.file)

			console.log(' Uploaded!')

			var ImgUrl
			await storageRef
				.child(`shop/${this.file.name}`)
				.getDownloadURL()
				.then(function (url) {
					ImgUrl = url
				})

			// set url
			var img = document.querySelector('.shop .image img')
			img.src = ImgUrl
		},
		Upload() {
			if (this.edit) this.$refs.fileUpload.click()
		},

		editOn() {
			console.log('editOn')
			this.edit = true
		},

		async save() {
			var image = this.$refs.image.src
			var title = this.$refs.title.value
			var description = this.$refs.description.value

			//save chages to store
			await this.$store.commit('setShop', {
				image: image,
				title: title,
				description: description,
				position: { lat: 41.34, lng: 21.21 },
			})

			//	create new shop in db
			await this.$fireStore.collection('shops').doc(this.user.email).set(this.shop)

			this.edit = false
			console.log('saved')
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.shop {
	background: $text;
}

.edit {
	position: absolute;
	top: 5%;
	right: 5%;
	z-index: 5;

	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;

	span {
		color: white;
		margin: 0 10px;
		font-size: 1.8em;
	}
	.icon {
		width: 50px;
		padding: 10px;
		border-radius: 15px;

		fill: $secondary;
		background: $primary;
	}
}

.image {
	width: 100%;
	height: 40vh;
	z-index: 2;
	color: #fff;
	transition: all 1s cubic-bezier(0.65, 0, 0.35, 1);

	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	img {
		height: 50vh;
		width: 100%;
		object-fit: cover;
		object-position: center;

		&.lazyload,
		&.lazyloading {
			opacity: 0;
		}
		&.lazyloaded {
			opacity: 1;
			transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
		}
	}
	.color_overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba(72, 91, 114, 0.75);
		opacity: 1;
		transition: all 0.35s ease;
	}
	.text {
		user-select: none;
		position: absolute;
		color: white;
		font-size: 1.8em;

		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
	}
	.fileUpload {
		display: none;
	}
}

.content {
	width: 100%;
	height: 60vh;
	overflow: hidden;
	z-index: 3;
	background-color: $bg;
	border-radius: 30px 30px 0 0;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	align-content: center;

	filter: drop-shadow(2px 4px 14px rgba(0, 0, 0, 0.6));
	transition: all 0.6s cubic-bezier(0.5, 0, 0.75, 0);
	&::after {
		content: '';
		position: absolute;
		width: 5px;
		height: 100%;
		background-color: $primary;
		left: 5%;
	}

	.title {
		position: relative;
		width: 70%;
		margin: 10% 0 5% 0;
		z-index: 3;

		display: flex;
		align-items: center;
		h2 {
			width: 100%;
			height: 40px;
			color: $text;
			font-size: 1.5em;
		}
		input {
			width: 100%;
			height: 40px;

			outline: 0;
			border: none;
			border-bottom: 1px solid $text;

			font-size: 1.5em;
			&:focus {
				border-color: $primary;
			}
		}
	}
	.info {
		width: 70%;

		display: flex;
		flex-direction: column;
		.item {
			width: 100%;
			margin-bottom: 5%;

			display: flex;
			justify-content: flex-start;
			align-items: center;
			align-content: center;

			p {
				margin: 0 10px;
			}
			.icon {
				width: 1.2em;
				margin: 0 2px;
				fill: $primary;
			}
			&.map {
				text-decoration: underline;
			}
		}
	}
	.description {
		width: 70%;
		min-height: 15%;
		margin: 5% 0;
		overflow: auto;
		textarea {
			width: 100%;
			height: 100%;

			outline: 0;
			border: none;
			border-bottom: 1px solid $text;

			font-size: 1.2em;
			&:focus {
				border-color: $primary;
			}
		}
	}
}

.modal {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 99;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;

	background: rgba(72, 91, 114, 0.75);
	transition: all 0.35s ease;

	.msg {
		width: 50%;
		color: $secondary;
		padding: 5% 10%;
		border-radius: 15px;
		background: $bg;
	}
}
</style>
