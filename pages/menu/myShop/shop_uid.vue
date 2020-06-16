<template>
	<div class="container">
		<div class="shop">
			<img :src="shop.image" alt="" />

			<input ref="fileUpload" class="fileUpload" type="file" @change="OnFileSelected" />
			<div class="upload" @click="Upload">
				Upload
			</div>
		</div>
		<div class="menu_links">
			<nuxt-link to="/menu/myShop" class="item go_back">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M7.38,14.05h15.5a.61.61,0,0,0,.62-.61V10.56a.61.61,0,0,0-.62-.61H7.38V7.58a1.23,1.23,0,0,0-2.1-.87L.86,11.13a1.23,1.23,0,0,0,0,1.74l4.42,4.42a1.23,1.23,0,0,0,2.1-.87V14.05Z" />
				</svg>
				<span>Go Back</span>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	data: () => ({
		file: null,
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

			storageRef
				.child(`shop/${this.file.name}`)
				.getDownloadURL()
				.then(function (url) {
					// `url` is the download URL for 'images/stars.jpg'
					console.log(url)

					// var img = document.getElementById('myimg')
					// img.src = url
				})
		},
		Upload() {
			this.$refs.fileUpload.click()
		},
	},
}
</script>

<style lang="scss">
.shop {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	img {
		width: 50%;
		margin: 10%;
	}

	.upload {
		background: #ccc;
		margin: 20px 0;
		padding: 10px;
	}

	.fileUpload {
		display: none;
	}
}
</style>
