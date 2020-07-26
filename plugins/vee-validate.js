import { extend } from 'vee-validate'
import { required, email, min, regex } from 'vee-validate/dist/rules'

extend('required', {
	...required,
	message: ' empty field', // the error message
})

extend('email', {
	...email,
	message: 'email not valid',
})

extend('min', {
	...min,
	message: 'min 8 char',
})

extend('regexNumber', {
	...regex,
	message: 'include number',
})

extend('regexSpecialSign', {
	...regex,
	message: 'include special sign',
})
