import Vue from 'vue'
import x5GMaps from 'x5-gmaps'

// export default ({ $config: { gmapKey } }) => {
// 	Vue.use(x5GMaps, gmapKey)
// }

Vue.use(x5GMaps, process.env.gmapKey)
