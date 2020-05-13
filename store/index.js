export const state = () => ({
	QRscan: 'no scan',
	authError: '',
	isAuth: false,
	user: null,
})

// Functions that return back data contained in the state.
export const getters = {
	QRscan: (state) => state.QRscan,
	user: (state) => state.user,
	authError: (state) => state.authError,
	isAuth: (state) => state.isAuth,
}

// Functions that directly mutate the state.
export const mutations = {
	async setQRscan(state, result) {
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
}

// Functions that call mutations on the state. They can call multiple mutations, can call other actions, and they support asynchronous operations.
export const actions = {
	async StoreQRscan({ commit, state }, result) {
		commit('setQRscan', result)
		const user = state.user
		//	update firabase and store
		await this.$fireStore.collection('users').doc(user.email).set(user)
		this.$router.push('/')
		// update seller firebase
		// make a trigger onUpdate
	},
	async authenticateUser({ commit, state }, userPayload) {
		try {
			if (userPayload.action == 'signUp') {
				await this.$fireAuth
					.createUserWithEmailAndPassword(userPayload.email, userPayload.password)
					.then((cred) => {
						if (cred != null) commit('setAuth', true)
					})
					.catch(function (error) {
						if (error.code === 'auth/email-already-in-use') commit('setError', 'Email already in use')
					})

				if (state.isAuth) {
					if (userPayload.isSeller) {
						// create user coresponding if he is seller or not
						const user = {
							email: userPayload.email,
							isSeller: userPayload.isSeller,
							userScansCounter: 0,
							sellerScansCounter: 0,
							scanList: [],
						}
					} else {
						const user = {
							email: userPayload.email,
							isSeller: userPayload.isSeller,
							userScansCounter: 0,
						}
					}
					//	update firabase and store
					await this.$fireStore.collection('users').doc(user.email).set(user)
					commit('setUser', user)
					this.$router.push('/')
				}
			} else if (userPayload.action == 'signIn') {
				await this.$fireAuth
					.signInWithEmailAndPassword(userPayload.email, userPayload.password)
					.then((cred) => {
						if (cred != null) commit('setAuth', true)
					})
					.catch(function (error) {
						if (error.code === 'auth/user-not-found') commit('setError', 'User not found')
						if (error.code === 'auth/wrong-password') commit('setError', 'Wrong password')
					})

				if (state.isAuth) {
					//	get user from  firabase and update store
					const loginRef = this.$fireStore.collection('users').doc(userPayload.email)
					const user = await loginRef.get()
					commit('setUser', user.data())
					this.$router.push('/')
				}
			}

			// this.$fireAuth.onAuthStateChanged((user) => {})
		} catch (err) {
			console.error(err)
		}
	},
}
