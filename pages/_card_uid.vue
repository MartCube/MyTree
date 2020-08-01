<template>
	<div class="container shop">
		<div class="image">
			<img ref="image" class="lazyload" :data-src="shop.image" alt />
		</div>
		<div class="content">
			<div class="title">
				<h2>{{ shop.title }}</h2>
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
					<svg class="icon" viewBox="0 0 24 24">
						<path d="M11.13,23C4.59,13.62,3.41,12.64,3.41,9.09a8.59,8.59,0,0,1,17.18,0c0,3.45-1.18,4.38-7.72,14a1.06,1.06,0,0,1-1.74,0ZM12,12.75a3.6,3.6,0,0,0,3.65-3.66A3.51,3.51,0,0,0,12,5.54,3.58,3.58,0,0,0,8.35,9.09,3.67,3.67,0,0,0,12,12.75Z" />
					</svg>
					<p>View on map</p>
				</div>
			</div>
			<div class="description">
				<p>{{ shop.description }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ app, params }) {
		var shop
		await app.$fireStore
			.collection('shops')
			.doc(params.card_uid)
			.get()
			.then((doc) => {
				if (doc.exists) {
					shop = {
						image: doc.data().image,
						title: doc.data().title,
						description: doc.data().description,
					}
				} else {
					console.log('No such document!')
				}
			})

		return {
			shop: shop,
		}
	},
	data: () => ({}),
	methods: {},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';
@import '~/assets/mixins.scss';
.shop {
	background: $text;
	position: relative;
	.image {
		height: 40vh;
		z-index: 2;
		position: absolute;
		top: 0;
		color: #fff;
		transition: all 1s cubic-bezier(0.65, 0, 0.35, 1);
		@include d-flex();
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
			margin: 10% 0 5% 0;
			z-index: 3;
			@include d-flex(row, null, center, 70%);
			h2 {
				width: 100%;
				height: 40px;
				color: $text;
				font-size: 1.5em;
			}
		}
		.info {
			@include d-flex(column, null, null, 70%);
			.item {
				margin-bottom: 5%;
				@include d-flex(null, flex-start );
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
		}
	}
}
</style>
