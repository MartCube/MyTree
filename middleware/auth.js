export default async function ({ app, store, redirect }) {
	await app.$fireAuth.onAuthStateChanged(async (user) => {
		if (user) {
			// on refresh we lose store data so we get again
			if (store.state.user === null) {
				//	get user from db
				var ref = app.$fireStore.collection('users').doc(user.email)
				var refUser = await ref.get()
				//	update store
				store.commit('setUser', refUser.data())
			}
			return
		} else {
			return redirect('/login')
		}
	})
}
