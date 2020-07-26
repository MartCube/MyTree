export const state = () => ({
	QRscan: 'no scan',
	authError: null,
	isAuth: false,
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
		scanLogs: [],
	},
})

// Functions that return back data contained in the state.
export const getters = {
	QRscan: (state) => state.QRscan,
	user: (state) => state.user,
	authError: (state) => state.authError,
	isAuth: (state) => state.isAuth,
	shop: (state) => state.shop,
	modal: (state) => state.modal,
}

// Functions that directly mutate the state.
export const mutations = {
	setQRscan(state, result) {
		state.QRscan = result
	},
	setUser(state, user) {
		state.user = user
	},
	setError(state, error) {
		state.authError = error
	},
	setAuth(state, value) {
		state.isAuth = value
	},
	setModal(state, payload) {
		state.modal = Object.assign(payload)
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
}

// Functions that call mutations on the state. They can call multiple mutations, can call other actions, and they support asynchronous operations.
export const actions = {
	async StoreQRscan({ commit, state }, result) {
		//	update store
		await commit('setQRscan', result)
		console.log('scanned shop: ', result)

		//	update scanned shop in firabase
		const increment = this.$fireStoreObj.FieldValue.increment(1)
		await this.$fireStore.collection('shops').doc(result).update({ shopScans: increment })

		// create Scan DateTime
		var date = new Date()
		var options = {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			hour12: false,
		}
		date = new Intl.DateTimeFormat('default', options).format(date)
		// create scanLog
		var scanLog = {
			user: state.user.email,
			date: date,
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
			isSeller: userPayload.isSeller,
			scans: 0,
		}

		try {
			if (userPayload.action == 'signUp') {
				await this.$fireAuth
					.createUserWithEmailAndPassword(userPayload.email, userPayload.password)
					.then(async (cred) => {
						if (cred != null) {
							//	create new user in db
							await this.$fireStore.collection('users').doc(userPayload.email).set(user)
							//	update store
							await commit('setUser', user)
						}
					})
					.catch(function (error) {
						if (error.code === 'auth/email-already-in-use') commit('setError', 'Email already in use')
					})
			}
			if (userPayload.action == 'signIn') {
				await this.$fireAuth
					.signInWithEmailAndPassword(userPayload.email, userPayload.password)
					.then(async (cred) => {
						if (cred != null) {
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
						}
					})
					.catch(function (error) {
						if (error.code === 'auth/user-not-found') commit('setError', 'User not found')
						if (error.code === 'auth/wrong-password') commit('setError', 'Wrong password')
					})
			}
		} catch (err) {
			console.error(err)
		}
		this.$router.push('/')
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

		// var ref = this.$fireStore.collection('shops').doc(userPayload)
		// await ref
		// 	.get()
		// 	.then(function (doc) {
		// 		if (doc.exists) {
		// 			// update store
		// 			commit('setShop', doc.data())
		// 		} else {
		// 			// doc.data() will be undefined in this case
		// 			console.log('No such document!')
		// 		}
		// 	})
		// 	.catch(function (error) {
		// 		console.log('Error getting document:', error)
		// 	})
	},
}
