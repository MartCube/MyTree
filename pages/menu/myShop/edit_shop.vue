<template>
	<div class="container">
		<div class="shop">
			<div class="image" @click="Upload">
				<img v-if="!shop.image" src="/index/coffee_shop1.jpg" alt="my tree coffee shop" />
				<img v-else :src="shop.image" alt="my tree coffee shop" />

				<div class="color-overlay"></div>
				<div class="text">
					Upload
					<img src="/icons/image.svg" alt="" />
				</div>
				<input ref="fileUpload" class="fileUpload" type="file" @change="OnFileSelected" />
			</div>
			<div class="title">
				<h2 v-show="!editTitleShow" @click="editTitle">
					{{ shop.title }}
				</h2>
				<inputEdit v-show="editTitleShow" :name="shop.title" @change.native="editTitle" @getValue="getTitle" />
			</div>
			<div class="description">
				<p>{{ shop.description }}</p>
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
import inputEdit from '~/components/inputEdit.vue'
import { ValidationObserver } from 'vee-validate'

export default {
	components: {
		inputEdit,
	},
	data: () => ({
		file: null,
		editTitleShow: false,
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
			console.log(ImgUrl)

			// set url
			var img = document.querySelector('.shop .image img')
			img.src = ImgUrl

			//update store
			this.$store.dispatch('updateShop', { edit: 'image', value: ImgUrl })
		},
		Upload() {
			this.$refs.fileUpload.click()
		},
		getTitle(value) {
			this.$store.dispatch('updateShop', { edit: 'title', value: value })
		},
		async editTitle() {
			this.editTitleShow = !this.editTitleShow

			await this.$nextTick()
			document.querySelector('.title input').focus()
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.shop {
	width: 90%;
	margin: 5% 0;

	.image {
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		position: relative;

		img {
			width: 100%;
			height: 100%;
		}
		.color-overlay {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background: rgba(29, 34, 40, 0.5);
			opacity: 1;
			transition: all 0.35s ease;
		}
		.text {
			position: absolute;
			color: white;
			font-size: 1.8em;

			display: flex;
			justify-content: center;
			align-items: center;
			align-content: center;
			img {
				width: 1em;
				margin: 0 10px;
				height: auto;
			}
		}
		.fileUpload {
			display: none;
		}
	}
	.title {
		margin: 5% 0;

		h2 {
			font-size: 2em;
			height: 40px;
		}
	}
}
</style>
