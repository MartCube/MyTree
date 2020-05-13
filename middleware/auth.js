export default function ({ store, redirect }) {
	if (store.getters.isAuth == false) return redirect('/login')
}
