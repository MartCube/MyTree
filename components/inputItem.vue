<template>
	<div class="form__group field">
		<input :id="name" :type="type" class="form__field" :placeholder="name" :name="name" />
		<label :for="name" class="form__label">{{ name }}</label>
	</div>
</template>
<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			default: 'input',
		},
	},
}
</script>

<style lang="scss" scoped>
$primary: #0ee3b1;
$secondary: #11998e;
$white: #fff;
$text: #d2d9db;
.form__group {
	position: relative;
	padding: 25px 0 0;
	width: 100%;
}

.form__field {
	font-family: inherit;
	width: 100%;
	border: 0;
	border-bottom: 2px solid $text;
	outline: 0;
	font-size: 1.3rem;
	color: $white;
	padding: 7px 0;
	background: transparent;
	transition: border-color 0.2s;

	&::placeholder {
		color: transparent;
	}

	&:placeholder-shown ~ .form__label {
		font-size: 1.3rem;
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
