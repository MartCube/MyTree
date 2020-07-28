<template>
	<ValidationProvider v-slot="{ errors, classes }" :rules="rules" :mode="mode" tag="div" class="form_group">
		<div v-if="errors.length" class="error" :class="classes">
			{{ errors[0] }}
			<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M15.1,18.9c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1S15.1,17.2,15.1,18.9z M9.2,3l0.5,10.6c0,0.5,0.4,0.9,0.9,0.9h2.6c0.5,0,0.9-0.4,0.9-0.9L14.8,3c0-0.5-0.4-1-0.9-1h-3.7C9.6,2,9.2,2.4,9.2,3z" />
			</svg>
		</div>

		<input v-if="type == 'input'" v-model="input_value" :type="type" class="input" :placeholder="name" :name="name" />
		<textarea v-if="type == 'textarea'" v-model="input_value" :type="type" class="input" :placeholder="name" :name="name" />
	</ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
	components: {
		ValidationProvider,
	},
	props: {
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			default: 'input',
		},
		rules: {
			type: String,
			default: 'required',
		},
		mode: {
			type: String,
			default: 'lazy',
		},
	},
	data: () => ({
		input_value: '',
	}),
	computed: {
		shop() {
			return this.$store.getters.shop
		},
	},
	methods: {
		emitValue(event) {
			this.$emit('getValue', this.input_value)
		},
	},
}
</script>

<style lang="scss">
@import '~/assets/colors.scss';

.form_group {
	position: relative;
	width: 100%;
	height: 100%;

	.error {
		position: absolute;
		top: 0;
		right: 0;
		margin: 5px 0;
		font-size: 0.8em;
		display: none;
		color: $text;

		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		.icon {
			path {
				fill: $bg;
			}
			width: 1em;
			padding: 1px;
			margin: 0 5px;
			background: $error;
			border-radius: 50px;
		}
		&.invalid {
			display: flex;
		}
	}
	.input {
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
	textarea.input {
		height: 100%;
		font-size: 1.2em;
	}
}
</style>
