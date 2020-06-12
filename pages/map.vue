<template>
	<div class="container">
		<svg class="icon_my_location" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" @click="getLocation">
			<path class="secondary" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22ZM12,4a8,8,0,1,0,8,8A8,8,0,0,0,12,4Z" />
			<rect class="primary" x="11.13" y="17" width="1.75" height="7" />
			<rect class="primary" y="11.13" width="7" height="1.75" />
			<rect class="primary" x="17" y="11.13" width="7" height="1.75" />
			<rect class="primary" x="11.13" width="1.75" height="7" />
			<circle class="primary" cx="12" cy="12" r="4" />
		</svg>
		<gmaps-map class="map" :options="mapOptions" />
	</div>
</template>

<script>
import { gmapsMap, gmapsMarker } from 'x5-gmaps'

export default {
	components: { gmapsMap },

	data: () => ({
		center: null,
		mapOptions: {
			center: { lat: -27.47, lng: 153.025 },
			zoom: 12,
			fullscreenControl: false,
			mapTypeControl: false,
			rotateControl: false,
			scaleControl: false,
			streetViewControl: false,
			zoomControl: false,
		},
	}),
	methods: {
		getLocation() {
			if (navigator.geolocation) navigator.geolocation.getCurrentPosition(this.setLocation, this.locationError)
			else alert('Geolocation is not supported by this browser.')
		},
		setLocation(pos) {
			this.mapOptions = { ...this.mapOptions, center: { lat: pos.coords.latitude, lng: pos.coords.longitude } }
			this.center = { lat: pos.coords.latitude, lng: pos.coords.longitude }
		},
		locationError(error) {
			if (error.PERMISSION_DENIED) alert('User denied the request for Geolocation.')
			else if (error.POSITION_UNAVAILABLE) alert('Location information is unavailable.')
			else if (error.TIMEOUT) alert('The request to get user location timed out.')
			else alert('An unknown error occurred.')
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.icon_my_location {
	.primary {
		fill: $primary;
	}
	.secondary {
		fill: $secondary;
	}

	position: absolute;
	bottom: 100px;
	left: 30px;
	z-index: 2;

	width: 50px;
	padding: 10px;
	background: $bg;
	border-radius: 15px;
}
.map {
	margin-bottom: 70px;
}
</style>
