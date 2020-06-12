const pkg = require('./package')

module.exports = {
	mode: 'spa',
	head: {
		title: 'My Tree App',
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1' }, { name: 'keywords', content: 'mart, cube, portfolio, site, web, developer' }, { hid: 'description', name: 'description', content: pkg.description }],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Customize the progress-bar color
	loading: { color: '#0ee3b1' },

	// Global css
	css: ['~/assets/style.scss'],

	// Plugins to load before mounting the App
	plugins: [{ src: `@/plugins/x5gMap.js` }, { src: `@/plugins/lazysizes.client.js` }, { src: '@/plugins/qrReader.js', mode: 'client' }, { src: '@/plugins/qrGenerator.js' }, { src: '@/plugins/vee-validate.js' }, { src: '@/plugins/fireauth.js' }],

	// Nuxt.js modules
	modules: ['@nuxtjs/pwa', '@nuxtjs/firebase'],

	firebase: {
		config: {
			apiKey: 'AIzaSyBneDIF1zbDHeEizyH_2WZTg8NRD8xWbvY',
			authDomain: 'my-tree-app.firebaseapp.com',
			databaseURL: 'https://my-tree-app.firebaseio.com',
			projectId: 'my-tree-app',
			storageBucket: 'my-tree-app.appspot.com',
			messagingSenderId: '168638748208',
			appId: '1:168638748208:web:081771b6e6b37d2a7bfff5',
			measurementId: 'G-E0EQY206SS',
		},
		services: {
			firestore: true,
			auth: true,
		},
	},

	pwa: {
		manifest: {
			name: 'My Tree App',
			short_name: 'My Tree',
		},
	},

	// Build configuration
	build: {
		// You can extend webpack config here
		transpile: ['x5gMaps'],

		extend(config, { isClient, loaders: { vue } }) {
			if (isClient) {
				vue.transformAssetUrls.img = ['data-src', 'src']
				vue.transformAssetUrls.source = ['data-srcset', 'srcset']
			}
		},
	},
}
