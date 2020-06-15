export const state = () => ({
	QRscan: 'no scan',
	authError: null,
	isAuth: false,
	user: null,
	shop: {
		image: '/index/coffee_shop1.jpg',
		title: 'Shop Title',
		description: '',
		rate: '0',
	},
})

// Functions that return back data contained in the state.
export const getters = {
	QRscan: (state) => state.QRscan,
	user: (state) => state.user,
	authError: (state) => state.authError,
	isAuth: (state) => state.isAuth,
	shop: (state) => state.shop,
}

// Functions that directly mutate the state.
export const mutations = {
	async setQRscan(state, result) {
		state.QRscan = result
		state.user.userScansCounter++
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
}

// Functions that call mutations on the state. They can call multiple mutations, can call other actions, and they support asynchronous operations.
export const actions = {
	async StoreQRscan({ commit, state }, result) {
		//	update store
		await commit('setQRscan', result)

		//	update firabase
		var updCounter = state.user.userScansCounter
		await this.$fireStore.collection('users').doc(state.user.email).update({
			userScansCounter: updCounter,
		})
		// update seller db (seller email is stored in result)
		// make a trigger function onUpdate
		// this.$router.push('/')
	},
	async authenticateUser({ commit }, userPayload) {
		var user // create user
		if (userPayload.isSeller) {
			user = {
				email: userPayload.email,
				isSeller: userPayload.isSeller,
				userScansCounter: 0,
				sellerScansCounter: 0,
				scanList: [],
			}
		} else {
			user = {
				email: userPayload.email,
				isSeller: userPayload.isSeller,
				userScansCounter: 0,
			}
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
							commit('setUser', user)
							this.$router.push('/')
						}
					})
					.catch(function (error) {
						if (error.code === 'auth/email-already-in-use') commit('setError', 'Email already in use')
					})
			} else if (userPayload.action == 'signIn') {
				await this.$fireAuth
					.signInWithEmailAndPassword(userPayload.email, userPayload.password)
					.then(async (cred) => {
						if (cred != null) {
							//	get user from db
							var ref = this.$fireStore.collection('users').doc(userPayload.email)
							user = await ref.get()
							//	update store
							commit('setUser', user.data())
							commit('setAuth', true)
							this.$router.push('/')
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
	},
	async setUser({ commit }, userPayload) {
		commit('setAuth', true)

		//	get user from db
		var ref = this.$fireStore.collection('users').doc(userPayload)
		var user = await ref.get()

		//	update store
		commit('setUser', user.data())
	},
}
