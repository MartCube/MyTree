export const state = () => ({
	QRscan: 'no scan',
})

// Functions that return back data contained in the state.
export const getters = {
	QRscan: (state) => state.QRscan,
}

// Functions that directly mutate the state.
export const mutations = {
	setQRscan(state, result) {
		state.QRscan = result
	},
}

// Functions that call mutations on the state. They can call multiple mutations, can call other actions, and they support asynchronous operations.
export const actions = {
	async StoreQRscan(context, result) {
		context.commit('setQRscan', result)
	},
}
