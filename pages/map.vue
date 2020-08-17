<template>
	<div class="container">
		<svg class="icon_my_location" viewBox="0 0 24 24" @click="getLocation">
			<path class="secondary" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22ZM12,4a8,8,0,1,0,8,8A8,8,0,0,0,12,4Z" />
			<rect class="secondary" x="11.13" y="17" width="1.75" height="7" />
			<rect class="secondary" y="11.13" width="7" height="1.75" />
			<rect class="secondary" x="17" y="11.13" width="7" height="1.75" />
			<rect class="secondary" x="11.13" width="1.75" height="7" />
			<circle class="secondary" cx="12" cy="12" r="4" />
		</svg>

		<gmaps-map class="map" :options="mapOptions">
			<template v-slot:loading>
				<div></div>
			</template>

			<gmaps-marker v-for="(shop, i) in shopList" :key="i" class="shop" :position="shop.position" :icon="icon" />
		</gmaps-map>
	</div>
</template>

<script>
import { gmapsMap, gmapsMarker } from 'x5-gmaps'
import modal from '~/components/modal'

export default {
	components: { gmapsMap, gmapsMarker },
	async asyncData({ app }) {
		var shopList = []
		await app.$fireStore
			.collection('shops')
			.get()
			.then(function (querySnapshot) {
				querySnapshot.forEach(function (doc) {
					shopList.push(doc.data())
				})
			})

		return {
			shopList: shopList,
		}
	},
	data: () => ({
		mapOptions: {
			center: { lat: 50.45158, lng: 30.527538 },
			zoom: 10,
			rotateControl: true,
			fullscreenControl: false,
			mapTypeControl: false,
			scaleControl: false,
			zoomControl: false,
			streetViewControl: false,
		},
		icon: require('~/static/icons/location.svg'),
	}),
	computed: {
		modal() {
			return this.$store.getters.modal
		},
	},
	methods: {
		getLocation() {
			if (navigator.geolocation) navigator.geolocation.getCurrentPosition(this.setLocation, this.locationError)
			else alert('Geolocation is not supported by this browser.')
		},
		setLocation(pos) {
			this.mapOptions = { ...this.mapOptions, center: { lat: pos.coords.latitude, lng: pos.coords.longitude } }
		},
		locationError(error) {
			if (error.PERMISSION_DENIED) alert('User denied the request for Geolocation.')
			else if (error.POSITION_UNAVAILABLE) alert('Location information is unavailable.')
			else if (error.TIMEOUT) alert('The request to get user location timed out.')
			else alert('An unknown error occurred.')
		},
		show(value) {
			console.log('clicked', value)
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.icon_my_location {
	position: absolute;
	bottom: 30px;
	right: 30px;
	z-index: 2;
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
</style>
