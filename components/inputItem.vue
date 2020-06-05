<template>
	<ValidationProvider v-slot="{ errors, classes }" :rules="rules" :mode="mode" tag="div" class="form__group field">
		<span class="error" :class="classes"> {{ errors[0] }} <i class="icon icon-attention"></i></span>

		<input :id="name" v-model="input_value" :type="type" class="form__field" :placeholder="name" :name="name" @change="emitValue" />
		<label :for="name" class="form__label">{{ name }}</label>
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
$bg: #4c5157;
$primary: #0ee3b1;
$secondary: #11998e;
$text: #fff;
$error: #ff1461;

.form__group {
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
		color: $text;

		i {
			color: $error;
		}
		&.invalid {
			display: flex;
		}
	}
}

.form__field {
	font-family: inherit;
	width: 100%;
	border: 0;
	border-bottom: 2px solid $text;
	outline: 0;
	font-size: 1.2rem;
	color: $text;
	padding: 7px 0;
	background: transparent;
	transition: border-color 0.2s;

	&::placeholder {
		color: transparent;
	}

	&:placeholder-shown ~ .form__label {
		font-size: 1.1rem;
		cursor: text;
		top: 20px;
	}
}

.form__label {
	position: absolute;
	top: 0;
	display: block;
	transition: 0.2s;
	font-size: 1rem;
	color: $text;
}

.form__field:focus {
	~ .form__label {
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
/* reset input */
.form__field {
	&:required,
	&:invalid {
		box-shadow: none;
	}
}
</style>
