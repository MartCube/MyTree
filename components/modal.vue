<template>
	<div class="modal" modalTrigger :class="{ open: modal.show }">
		<div class="content">
			<div class="close" @click="closeModal">
				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
					<path d="M0 0h24v24H0V0z" fill="none" />
					<path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm4 10.59L14.59 16 12 13.41 9.41 16 8 14.59 10.59 12 8 9.41 9.41 8 12 10.59 14.59 8 16 9.41 13.41 12 16 14.59z" opacity=".3" />
					<path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
				</svg>
			</div>
			<div class="text">
				<p><slot>Modal text</slot></p>
			</div>
			<div class="buttons-wrapper">
				<btn fill class="ok" @click.native="closeModal(true)">
					Ok
				</btn>
				<btn class="cancel" @click.native="closeModal(false)">
					Cancel
				</btn>
			</div>
		</div>
		<div class="overlay"></div>
	</div>
</template>

<script>
import btn from '~/components/btn'

export default {
	name: 'Modal',
	components: {
		btn,
	},
	computed: {
		modal() {
			return this.$store.getters.modal
		},
	},
	methods: {
		closeModal() {
			this.$store.commit('setModal', {
				show: false,
				type: 'prompt',
				data: 'Default message',
				value: false,
			})
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
	top: 0;
	left: 0;
	transform: scale(0);
	opacity: 0;
	z-index: 100;

	.overlay {
		position: fixed;
		background-color: rgba(255, 255, 255, 0);
		backdrop-filter: blur(10px);
		z-index: 0;
		top: 0;
		height: 100vh;
		width: 100vw;
	}
	.content {
		opacity: 0;
		padding: 15px;
		border-radius: 10px;
		box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.2);
		z-index: 4;
		position: fixed;
		@include d-flex(center, center, 70vh);
		flex-direction: column;
		top: 20vh;
		overflow: hidden;
		width: 70vw;
		height: 50vh;
		background-color: #fff;
		.text {
			flex: 1 1;
			@include d-flex();
		}
		.close {
			position: absolute;
			top: 1rem;
			right: 1rem;
			svg {
				width: 2rem;
				height: 2rem;
				fill: $secondary;
			}
		}
		.buttons-wrapper {
			@include d-flex(space-between, center);
			.ok {
				background-color: $secondary;
				color: $primary;
				width: 45%;
				text-transform: initial;
			}
			.cancel {
				border: 2px solid $secondary;
				color: $secondary;
				width: 45%;
				text-transform: initial;
			}
		}
	}
	&.open {
		transform: scale(1);
		animation: modalScaling 0.2s linear forwards;
		.overlay {
			animation: overlayScaling 0.2s linear forwards;
		}
		.content {
			animation: contentScaling 0.2s linear forwards;
		}
	}

	@keyframes modalScaling {
		0% {
			transform: scale(0);
			opacity: 0;
		}
		1% {
			transform: scale(1);
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes overlayScaling {
		0% {
			background-color: rgba(255, 255, 255, 0);
		}
		100% {
			background-color: rgba(255, 255, 255, 0.5);
			opacity: 1;
		}
	}
	@keyframes contentScaling {
		0% {
			opacity: 0;
			transform: scale(0);
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
}
</style>
