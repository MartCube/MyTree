export default (context) => {
	const { app, store } = context

	return new Promise((resolve, reject) => {
		app.$fireAuth.onAuthStateChanged((user) => {
			if (user) {
				console.log('logged in', user.email)
				return resolve(store.dispatch('setUser', user.email))
			}
			console.log('logged out')
			return resolve()
		})
	})
}
