<template>
	<div class="modal">
		<template v-if="type == 'YesNo'">
			<div class="content YesNo">
				<div class="text">
					<slot>Slot Text</slot>
				</div>
				<div class="buttons-wrapper">
					<btn fill class="ok" @click.native="emitValue(true)">Yes</btn>
					<btn class="cancel" @click.native="emitValue(false)">No</btn>
				</div>
			</div>
			<div class="overlay"></div>
		</template>
		<template v-if="type == 'success'">
			<div class="content" @click="emitValue(true)">
				<div class="text">
					<svg class="icon" viewBox="0 0 24 24">
						<circle cx="12" cy="12" r="11.5" style="fill: #3a506b;" />
						<path d="M9.59,18.37,4.72,13.5a.75.75,0,0,1,0-1.06l1.06-1.06a.74.74,0,0,1,1.06,0l3.28,3.28,7-7a.74.74,0,0,1,1.06,0l1.06,1.06a.75.75,0,0,1,0,1.06l-8.62,8.62a.75.75,0,0,1-1.07,0Z" style="fill: #6fffe9;" />
					</svg>
					<slot>Slot Text</slot>
				</div>
			</div>
			<div class="overlay" @click="emitValue(true)"></div>
		</template>
		<template v-if="type == 'error'">
			<div class="content" @click="emitValue(true)">
				<div class="text">
					<svg class="icon" viewBox="0 0 24 24">
						<circle cx="12" cy="12" r="11.5" style="fill: #3a506b;" />
						<path d="M14.27,12l3.42-3.41a1.09,1.09,0,0,0,0-1.52l-.76-.76a1.09,1.09,0,0,0-1.52,0L12,9.73,8.59,6.31a1.09,1.09,0,0,0-1.52,0l-.76.76a1.09,1.09,0,0,0,0,1.52L9.73,12,6.31,15.41a1.09,1.09,0,0,0,0,1.52l.76.76a1.09,1.09,0,0,0,1.52,0L12,14.27l3.41,3.42a1.09,1.09,0,0,0,1.52,0l.76-.76a1.09,1.09,0,0,0,0-1.52Z" style="fill: #ff1461;" />
					</svg>
					<slot>Slot Text</slot>
				</div>
			</div>
			<div class="overlay" @click="emitValue(true)"></div>
		</template>
	</div>
</template>

<script>
import btn from '~/components/btn'
import { modalAnim } from '~/assets/animate'

export default {
	name: 'Modal',
	components: {
		btn,
	},
	props: {
		type: {
			type: String,
			default: 'YesNo',
		},
	},
	mounted() {
		var content = document.querySelector('.modal .content')
		var overlay = document.querySelector('.modal .overlay')
		modalAnim(content, overlay)
	},
	methods: {
		emitValue(value) {
			this.$emit('getValue', value)
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';
@import '~/assets/mixins.scss';

.modal {
	position: fixed;
	@include d-flex();
	height: 100vh;
	z-index: 100;

	.overlay {
		will-change: transform, opacity;
		position: fixed;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1;
		top: 0;
		width: 100vw;
		height: 100vh;
		opacity: 1;
	}
	.content {
		@include d-flex(column, center, center, fit-content);
		height: auto;
		opacity: 1;
		z-index: 4;
		padding: 15px;
		border-radius: 10px;
		box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.2);
		flex-direction: column;
		background-color: #fff;
		.text {
			flex: 1 1;
			@include d-flex();
			text-align: center;
			font-size: 1.2em;
			color: $text;

			.icon {
				width: 1.5em;
				margin-right: 15px;
			}
		}

		.buttons-wrapper {
			@include d-flex(row, space-around, center);
			.ok {
				background-color: $secondary;
				color: $primary;
				width: 40%;
				text-transform: initial;
			}
			.cancel {
				border: 2px solid $secondary;
				color: $secondary;
				width: 40%;
				text-transform: initial;
			}
		}

		&.YesNo {
			width: 75vw;
			.text {
				margin: 15px 0;
			}
		}
	}
}
</style>
