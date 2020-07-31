<template>
	<div class="modal">
		<template v-if="type == 'YesNo'">
			<div class="content">
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
	will-change: transform, opacity;
	position: fixed;
	@include d-flex();
	height: 100vh;
	z-index: 100;

	.overlay {
		position: fixed;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1;
		top: 0;
		width: 100vw;
		height: 100vh;
		opacity: 1;
	}
	.content {
		@include d-flex(center, center, 75vw);
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
			margin: 15px 0;
			text-align: center;
			font-size: 1.2em;
		}

		.buttons-wrapper {
			@include d-flex(space-around, center);
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

		.icon {
			width: 1.5em;
			margin-right: 1.5em;
		}
	}
}
</style>
