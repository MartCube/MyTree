<template>
	<div class="container shop" :class="{ edit_mode: edit, map_mode: showMap }">
		<div class="btns">
			<div class="edit">
				<svg v-if="!edit" class="icon" viewBox="0 0 24 24" @click="editOn">
					<path d="M16.58,5.1l3.6,3.6a.39.39,0,0,1,0,.55L11.46,18l-3.71.41a.78.78,0,0,1-.86-.86l.41-3.7L16,5.1a.4.4,0,0,1,.56,0ZM23,4.18,21.1,2.23a1.58,1.58,0,0,0-2.21,0L17.48,3.65a.39.39,0,0,0,0,.55l3.6,3.6a.39.39,0,0,0,.55,0L23,6.39A1.56,1.56,0,0,0,23,4.18ZM15.83,15.6v4.06H3.06V6.89h9.17a.52.52,0,0,0,.34-.14l1.6-1.6a.48.48,0,0,0-.34-.82H2.42A1.92,1.92,0,0,0,.5,6.25V20.3a1.92,1.92,0,0,0,1.92,1.92H16.47a1.92,1.92,0,0,0,1.92-1.92V14a.48.48,0,0,0-.82-.34L16,15.26A.52.52,0,0,0,15.83,15.6Z" />
				</svg>
				<svg v-if="edit" class="icon" viewBox="0 0 24 24" @click="save">
					<path class="cls-1" d="M22.78,5.53,18.47,1.22A2.47,2.47,0,0,0,16.73.5H3A2.46,2.46,0,0,0,.5,3V21A2.46,2.46,0,0,0,3,23.5H21A2.46,2.46,0,0,0,23.5,21V7.27a2.47,2.47,0,0,0-.72-1.74ZM12,20.21a3.29,3.29,0,1,1,3.29-3.28A3.29,3.29,0,0,1,12,20.21ZM16.93,4.58V9.74a.62.62,0,0,1-.62.62H4.4a.61.61,0,0,1-.61-.62V4.4a.61.61,0,0,1,.61-.61H16.13a.6.6,0,0,1,.44.18l.18.17A.67.67,0,0,1,16.93,4.58Z" />
				</svg>
			</div>
			<div class="delete">
				<svg class="icon" viewBox="0 0 24 24" @click="deleteShop()">
					<path d="M3.38,21.34A2.16,2.16,0,0,0,5.53,23.5H18.47a2.16,2.16,0,0,0,2.15-2.16h0V6.25H3.38ZM15.59,9.84a.72.72,0,0,1,1.44,0V19.91a.72.72,0,0,1-1.44,0Zm-4.31,0a.72.72,0,0,1,1.44,0V19.91a.72.72,0,0,1-1.44,0ZM7,9.84a.72.72,0,0,1,1.44,0V19.91a.72.72,0,0,1-1.44,0Zm14.37-7.9H16l-.42-.84a1.07,1.07,0,0,0-1-.6H9.43a1.06,1.06,0,0,0-1,.6l-.42.84H2.66a.72.72,0,0,0-.72.72V4.09a.72.72,0,0,0,.72.72H21.34a.72.72,0,0,0,.72-.72V2.66A.72.72,0,0,0,21.34,1.94Z" />
				</svg>
			</div>
			<n-link class="back" :to="localePath('/myShop')">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M7.38,14.05h15.5a.61.61,0,0,0,.62-.61V10.56a.61.61,0,0,0-.62-.61H7.38V7.58a1.23,1.23,0,0,0-2.1-.87L.86,11.13a1.23,1.23,0,0,0,0,1.74l4.42,4.42a1.23,1.23,0,0,0,2.1-.87V14.05Z" />
				</svg>
			</n-link>
		</div>

		<div v-if="showMap" id="map">
			<gmaps-map :options="mapOptions">
				<template v-slot:loading>
					<div></div>
				</template>
				<gmaps-marker ref="shop" :options="shopOptions" />
			</gmaps-map>
			<svg class="icon_my_location" viewBox="0 0 24 24" @click="getLocation">
				<path class="secondary" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22ZM12,4a8,8,0,1,0,8,8A8,8,0,0,0,12,4Z" />
				<rect class="secondary" x="11.13" y="17" width="1.75" height="7" />
				<rect class="secondary" y="11.13" width="7" height="1.75" />
				<rect class="secondary" x="17" y="11.13" width="7" height="1.75" />
				<rect class="secondary" x="11.13" width="1.75" height="7" />
				<circle class="secondary" cx="12" cy="12" r="4" />
			</svg>
			<svg class="icon_save" viewBox="0 0 24 24" @click="savePosition">
				<path class="secondary" d="M22.78,5.53,18.47,1.22A2.47,2.47,0,0,0,16.73.5H3A2.46,2.46,0,0,0,.5,3V21A2.46,2.46,0,0,0,3,23.5H21A2.46,2.46,0,0,0,23.5,21V7.27a2.47,2.47,0,0,0-.72-1.74ZM12,20.21a3.29,3.29,0,1,1,3.29-3.28A3.29,3.29,0,0,1,12,20.21ZM16.93,4.58V9.74a.62.62,0,0,1-.62.62H4.4a.61.61,0,0,1-.61-.62V4.4a.61.61,0,0,1,.61-.61H16.13a.6.6,0,0,1,.44.18l.18.17A.67.67,0,0,1,16.93,4.58Z" />
			</svg>
		</div>

		<div class="image" @click="Upload">
			<img ref="image" class="lazyload" :src="shop.image" />

			<template v-if="edit">
				<div class="color_overlay"></div>
				<div class="text">Upload Image</div>
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
					<p v-if="!edit">View on map</p>
					<p v-else @click="pickPosition">Pick your position on map</p>
				</div>
			</div>
			<div class="description">
				<p v-if="!edit">{{ shop.description }}</p>
				<textarea v-else ref="description" :value="shop.description" />
			</div>
		</div>

		<modal v-if="imgModal" type="error" @getValue="getImgModal">
			<span>Image to big</span>
		</modal>
		<modal v-if="deleteModal" @getValue="getDeleteModal">
			<span>Delete this shop ?</span>
		</modal>
	</div>
</template>

<script>
import { gmapsMap, gmapsMarker } from 'x5-gmaps'
import btn from '~/components/btn'
import modal from '~/components/modal'

export default {
	middleware: ['auth'], //'shop'
	components: { gmapsMap, gmapsMarker, modal },
	data: () => ({
		imgModal: false,
		deleteModal: false,
		file: null,
		edit: false,
		showMap: false,
		mapOptions: {
			center: { lat: 0, lng: 0 },
			zoom: 12,
			rotateControl: true,
			fullscreenControl: false,
			mapTypeControl: false,
			scaleControl: false,
			zoomControl: false,
			streetViewControl: false,
		},
		shopOptions: {
			position: { lat: 0, lng: 0 },
			icon: require('~/static/icons/location.svg'),
			draggable: true,
		},
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
			if (!this.file) return

			var storageRef = this.$fireStorage.ref()
			var imageRef = storageRef.child(`shop/${this.user.email}`)

			if (this.file.size > 300000) {
				this.modal = true
				return
			}
			await imageRef.put(this.file)
			console.log(' Uploaded!')

			var ImgUrl
			await storageRef
				.child(`shop/${this.user.email}`)
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
			this.shopOptions.position = this.shop.position
			this.mapOptions.center = this.shop.position
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
				position: this.shopOptions.position,
				shopScans: 0,
				scanLogs: [],
			})

			//	create new shop in db
			await this.$fireStore.collection('shops').doc(this.user.email).set(this.shop)

			this.edit = false
			console.log('saved')
		},

		getLocation() {
			if (navigator.geolocation) navigator.geolocation.getCurrentPosition(this.setLocation, this.locationError)
			else alert('Geolocation is not supported by this browser.')
		},
		setLocation(pos) {
			this.mapOptions = { ...this.mapOptions, center: { lat: pos.coords.latitude, lng: pos.coords.longitude } }
			this.shopOptions = { ...this.shopOptions, position: { lat: pos.coords.latitude, lng: pos.coords.longitude } }
		},
		locationError(error) {
			if (error.PERMISSION_DENIED) alert('User denied the request for Geolocation.')
			else if (error.POSITION_UNAVAILABLE) alert('Location information is unavailable.')
			else if (error.TIMEOUT) alert('The request to get user location timed out.')
			else alert('An unknown error occurred.')
		},

		pickPosition() {
			console.log('pickPosition')
			this.showMap = true
		},
		savePosition() {
			console.log('savePosition')
			this.shopOptions.position = this.$refs.shop.marker.position.toJSON()
			this.showMap = false
		},

		getImgModal(value) {
			this.imgModal = false
		},
		getDeleteModal(value) {
			if (value) {
				console.log('proceed to shop delete')
			}
			this.deleteModal = false
		},

		deleteShop() {
			this.deleteModal = true
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';
@import '~/assets/mixins.scss';
.shop {
	background: $text;
	position: relative;
	&.map_mode {
		overflow: hidden;
	}

	.btns {
		position: absolute;
		top: 5%;
		right: 5%;
		z-index: 5;
		@include d-flex(column, center, center, initial);

		.icon {
			width: 40px;
			padding: 10px;
			margin: 10px;
			border-radius: 15px;
			background: white;
			fill: $secondary;
		}
		.delete > .icon {
			fill: $error;
		}
	}

	.image {
		@include d-flex();
		height: 40vh;
		z-index: 2;
		position: absolute;
		top: 0;
		color: #fff;
		img {
			height: 50vh;
			width: inherit;
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
			@include d-flex();
		}
		.fileUpload {
			display: none;
		}
	}
	.content {
		@include d-flex(column, flex-start);
		height: 70vh;
		flex-grow: 1;
		top: 35vh;
		position: absolute;
		overflow: hidden;
		z-index: 3;
		background-color: $bg;
		border-radius: 30px 30px 0 0;
		filter: drop-shadow(2px 4px 14px rgba(0, 0, 0, 0.6));
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
			margin: 10% 0 5% 0;
			z-index: 3;
			@include d-flex(null, center, center, 70%);
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
			@include d-flex(column, null, null, 70%);
			.item {
				@include d-flex(row, flex-start);
				margin-bottom: 5%;
				p {
					margin: 0 10px;
				}
				.icon {
					width: 1.2em;
					margin: 0 2px;
					fill: $secondary;
				}
				&.map {
					text-decoration: underline;
				}
			}
		}
		.description {
			width: 70%;
			margin: 5% 0;
			textarea {
				width: 100%;
				height: 100%;
				display: block;
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
}

#map {
	z-index: 91;
	width: 100%;
	height: 100vh;
	.icon_save,
	.icon_my_location {
		position: absolute;
		bottom: 5vh;
		right: 5vh;
		z-index: 92;
		width: 50px;
		padding: 10px;
		background: $bg;
		border-radius: 15px;
		.primary {
			fill: $primary;
		}
		.secondary {
			fill: $secondary;
		}
	}
	.icon_save {
		left: 5vh;
	}
}
</style>
