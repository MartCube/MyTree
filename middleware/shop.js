export default function ({ store, redirect }) {
	if (!store.state.user.isSeller) {
		return redirect('/menu')
	}
}
