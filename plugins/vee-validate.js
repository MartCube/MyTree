import { extend } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules'

extend('required', {
	...required,
	message: ' empty field',
})

extend('email', {
	...email,
	message: 'email not valid', // the error message
})

extend('min', {
	...min,
	message: 'min 8 char', // the error message
})
