export const state = () => ({
	user: {
		email: '',
		isSeller: false,
		scans: 0,
	},
	shop: {
		image: 'https://firebasestorage.googleapis.com/v0/b/my-tree-app.appspot.com/o/local%2Fcoffee_shop.jpg?alt=media&token=d6a7d68d-6048-4515-9f2e-70e2e4e344a3',
		title: 'My Tree Coffee Shop',
		description: 'This is short description about the coffee shop.',
		position: { lat: 0, lng: 0 },
		shopScans: 0,
		scanLogs: [
			{
				date: {
					date: '0',
					time: '00:00:00',
				},
				users: 0,
			},
		],
	},

	// store about auth should be separated
	isAuth: false,
	authError: null,
	loading: false,
})

// Functions that return back data contained in the state.
export const getters = {
	user: (state) => state.user,
	shop: (state) => state.shop,
	isAuth: (state) => state.isAuth,
	authError: (state) => state.authError,
	loading: (state) => state.loading,
}

// Functions that directly mutate the state.
export const mutations = {
	setUser(state, user) {
		state.user = user
	},
	setShop(state, payload) {
		const scanLogsArray = []
		Object.keys(payload.scanLogs).forEach((key) => {
			scanLogsArray.push(payload.scanLogs[key])
		})
		scanLogsArray.reverse()

		payload.scanLogs = scanLogsArray
		state.shop = Object.assign(payload)
	},
	setAuth(state, value) {
		state.isAuth = value
	},
	setError(state, error) {
		state.authError = error
	},
	setLoading(state, value) {
		state.loading = value
	},
}

// Functions that call mutations on the state. They can call multiple mutations, can call other actions, and they support asynchronous operations.
export const actions = {
	async StoreQRscan({ commit, state }, result) {
		// ##### this will be deleted from here since its not related with store

		console.log('scanned shop: ', result)

		// create Scan log DateTime
		var date = new Date()
		var optionsDate = {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour12: false,
		}
		var optionsTime = {
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			hour12: false,
		}

		var dateObject = {
			date: new Intl.DateTimeFormat('default', optionsDate).format(date),
			time: new Intl.DateTimeFormat('default', optionsTime).format(date),
		}
		// create scanLog
		var scanLog = {
			user: state.user.email,
			date: dateObject,
		}

		// update shop scanLogs array
		await this.$fireStore
			.collection('shops')
			.doc(result)
			.update({ scanLogs: this.$fireStoreObj.FieldValue.arrayUnion(scanLog) })
	},
	async authenticateUser({ commit }, userPayload) {
		// create user
		var user = {
			email: userPayload.email,
			isSeller: false,
			scans: 0,
		}

		await commit('setLoading', true)

		if (userPayload.action == 'signIn') {
			await this.$fireAuth
				.signInWithEmailAndPassword(userPayload.email, userPayload.password)
				.then(async (cred) => {
					if (cred != null) {
						if (cred.user.emailVerified) {
							//	get user from db
							var ref = this.$fireStore.collection('users').doc(userPayload.email)
							user = await ref.get()
							//	get shop from db
							ref = this.$fireStore.collection('shops').doc(userPayload.email)
							var shop = await ref.get()
							//	update store
							await commit('setUser', user.data())
							await commit('setShop', shop.data())
							await commit('setAuth', true)
						} else {
							commit('setError', 'Email is not verified')
							commit('setLoading', false)
						}
					}
				})
				.catch(function (error) {
					if (error.code == 'auth/user-not-found') {
						commit('setError', 'User not found')
						commit('setLoading', false)
					}
					if (error.code == 'auth/wrong-password') {
						commit('setError', 'Wrong password')
						commit('setLoading', false)
					}
				})
			this.$router.push('/')
		}
		if (userPayload.action == 'signUp') {
			await this.$fireAuth
				.createUserWithEmailAndPassword(userPayload.email, userPayload.password)
				.then(async (cred) => {
					if (cred != null) {
						console.log(cred)
						//	create new user in DB
						await this.$fireStore.collection('users').doc(userPayload.email).set(user)
					}
				})
				.catch(function (error) {
					if (error.code == 'auth/email-already-in-use') {
						commit('setError', 'Email already in use')
						commit('setLoading', false)
					}
				})
		}
	},
	async setUser({ commit }, userPayload) {
		commit('setAuth', true)

		//	get user from db
		this.$fireStore
			.collection('users')
			.doc(userPayload)
			.onSnapshot(
				function (doc) {
					console.log('Current user data: ', doc.data())
					commit('setUser', doc.data())
				},
				function (error) {
					console.log(error)
					// After an error, the listener will not receive any events and there is no need to detach listener
				},
			)

		//	get shop from db
		this.$fireStore
			.collection('shops')
			.doc(userPayload)
			.onSnapshot(
				function (doc) {
					if (!doc.exists) {
						console.log('shop data not found!')
						return
					}
					console.log('Current shop data: ', doc.data())
					commit('setShop', doc.data())
				},
				function (error) {
					console.log(error)
					// After an error, the listener will not receive any events and there is no need to detach listener
				},
			)
	},
}
