import { vuexfireMutations, firestoreAction } from 'vuexfire'

export const state = () => ({
	myList: [],
})

// Functions that directly mutate the state.
export const mutations = {
	...vuexfireMutations,
}

// Functions that call mutations on the state. They can call multiple mutations, can call other actions, and they support asynchronous operations.
export const actions = {
	bindMyList: firestoreAction(async function ({ bindFirestoreRef }) {
		const ref = this.$fireStore.collection('users').doc('MashaDocID')
		await bindFirestoreRef('myList', ref, { wait: true })
	}),
}
