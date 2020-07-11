export const state = () => ({
	QRscan: 'no scan',
	authError: null,
	isAuth: false,
	user: null,
	shop: {
		image: '/index/coffee_shop1.jpg',
		title: 'My Tree Coffee Shop',
		description: 'This is short description about the coffee shop.',
		position: { lat: 0, lng: 0 },
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
		state.user.scans++
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
	setShop(state, payload) {
		state.shop = Object.assign(payload)
	},
	setModal(state, payload) {
		state.modal = Object.assign(payload)
	},
}

// Functions that call mutations on the state. They can call multiple mutations, can call other actions, and they support asynchronous operations.
export const actions = {
	updateShop({ commit }, result) {
		commit('setShop', result)
	},
	async StoreQRscan({ commit, state }, result) {
		//	update store
		await commit('setQRscan', result)

		//	update firabase
		await this.$fireStore.collection('users').doc(state.user.email).update({
			scans: state.user.scans,
		})
		// update seller db (seller email is stored in result)
		// make a trigger function onUpdate
		// this.$router.push('/')
	},
	async authenticateUser({ commit }, userPayload) {
		// create user
		var user = {
			email: userPayload.email,
			isSeller: userPayload.isSeller,
			scans: 0,
			shopScans: 0,
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
		var ref = this.$fireStore.collection('users').doc(userPayload)
		var user = await ref.get()
		commit('setUser', user.data())

		//	get shop from db

		ref = this.$fireStore.collection('shops').doc(userPayload)
		await ref
			.get()
			.then(function (doc) {
				if (doc.exists) {
					// update store
					commit('setShop', doc.data())
				} else {
					// doc.data() will be undefined in this case
					console.log('No such document!')
				}
			})
			.catch(function (error) {
				console.log('Error getting document:', error)
			})
	},
}
