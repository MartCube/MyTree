import Vue from 'vue'
import x5GMaps from 'x5-gmaps'

// Vue.use(x5GMaps, process.env.gmapKey)

export default ({ $config: { gmapKey } }) => {
	Vue.use(x5GMaps, gmapKey)
}
