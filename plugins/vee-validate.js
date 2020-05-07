import { extend } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules'

extend('required', {
	...required,
	message: ' Field required',
})

extend('email', {
	...email,
	message: 'Email not valid', // the error message
})

extend('min', {
	...min,
	message: 'Min 8 characters', // the error message
})
