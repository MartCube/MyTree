import Vue from 'vue'
import x5GMaps from 'x5-gmaps'

export default ({ env }) => {
	Vue.use(x5GMaps, env.NUXT_ENV_GMapKey)
}
