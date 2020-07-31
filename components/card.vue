<template>
	<div class="card">
		<n-link :to="`${id}`">
			<div link class="image">
				<img class="lazyload" :data-src="image" alt />
			</div>
			<div class="info">
				<h2>{{ title }}</h2>
				<!-- <div class="rating">
					<span v-for="r in rate" :key="r.id">
						<img src="/index/star.svg" alt="" />
					</span>
				</div> -->
				<div class="description">
					<p>{{ description }}</p>
				</div>
			</div>
		</n-link>
	</div>
</template>

<script>
export default {
	name: 'Card',
	props: {
		id: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	data() {
		return {}
	},
	methods: {},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.card {
	width: 80vw;
	margin: 15px 5px;
	height: 30vw;
	overflow: hidden;
	a {
		// color: #fff;
		text-decoration: none;
		display: flex;
		align-items: stretch;
		height: 100%;
	}
	.image {
		width: 100%;
		height: 100%;

		overflow: hidden;
		border-radius: 5px 0 0 5px;
		position: relative;
		background-color: $secondary;
		img {
			width: 100%;
			height: 100%;

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
	.info {
		font-weight: 600;
		font-size: 1.1rem;
		display: flex;
		width: 100%;
		justify-content: flex-start;
		flex-direction: column;
		align-items: flex-start;
		color: #191919;
		padding: 5px 10px 0;
		background: rgba(255, 255, 255, 0.32);
		position: relative;
		&::before {
			content: '';
			width: 4px;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			background-color: $primary;
		}
		h2 {
			font-size: 1em;
			line-height: 1;
		}
		.description {
			font-weight: 400;
			margin-top: 5px;
			font-family: sans-serif;
			font-size: 13px;
			line-height: initial;
		}
		.rating {
			display: flex;
			margin: 3px 0;
			span {
				height: fit-content;
				display: flex;
			}
			img {
				width: 10px;
				height: 10px;
			}
		}
	}
}
</style>
