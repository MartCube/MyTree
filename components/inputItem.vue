<template>
	<ValidationProvider v-slot="{ errors, classes }" :rules="rules" :mode="mode" tag="div" class="form_group field">
		<div v-if="errors.length" class="error" :class="classes">
			{{ errors[0] }}
			<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M15.1,18.9c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1S15.1,17.2,15.1,18.9z M9.2,3l0.5,10.6c0,0.5,0.4,0.9,0.9,0.9h2.6c0.5,0,0.9-0.4,0.9-0.9L14.8,3c0-0.5-0.4-1-0.9-1h-3.7C9.6,2,9.2,2.4,9.2,3z" />
			</svg>
		</div>

		<input :id="name" v-model="input_value" :type="type" class="form_field" :placeholder="name" :name="name" @change="emitValue" />
		<label :for="name" class="form_label">{{ name }}</label>
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
			type: [Object, String],
			required: true,
		},
		mode: {
			type: String,
			default: 'eager',
		},
	},
	data: () => ({
		input_value: '',
	}),
	methods: {
		emitValue(event) {
			this.$emit('getValue', this.input_value)
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.form_group {
	position: relative;
	padding: 25px 0 0;
	margin: 10px 0;
	width: 100%;

	.error {
		position: absolute;
		top: 0;
		right: 0;
		margin: 5px 0;
		font-size: 0.8em;
		display: none;
		color: $bg;

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

	.form_field {
		font-family: inherit;
		width: 100%;
		border: 0;
		border-bottom: 2px solid $bg;
		outline: 0;
		font-size: 1.2rem;
		color: $bg;
		padding: 7px 0;
		background: transparent;
		transition: border-color 0.2s;
		&:-webkit-autofill,
		&:-webkit-autofill:hover,
		&:-webkit-autofill:focus {
			-webkit-text-fill-color: #fff;
			box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;
			transition: background-color 5000s ease-in-out 0s;
		}
		&::placeholder {
			color: transparent;
		}
		&:placeholder-shown ~ .form_label {
			font-size: 1.1rem;
			cursor: text;
			top: 20px;
		}

		&:focus {
			~ .form_label {
				position: absolute;
				top: 0;
				display: block;
				transition: 0.2s;
				font-size: 1rem;
				color: $primary;
				font-weight: 700;
			}
			padding-bottom: 6px;
			font-weight: 700;
			border-width: 3px;
			border-image: linear-gradient(to right, $primary, $secondary);
			border-image-slice: 1;
		}
	}

	.form_label {
		position: absolute;
		top: 0;
		display: block;
		transition: 0.2s;
		font-size: 1rem;
		color: $bg;
	}
}

/* reset input */
.form_field {
	&:required,
	&:invalid {
		box-shadow: none;
	}
}
</style>
