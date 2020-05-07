export default function ({ store, redirect }) {
	if (store.getters.user == null) return redirect('/login')
}
