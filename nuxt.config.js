const pkg = require('./package')

module.exports = {
	mode: 'spa',
	head: {
		title: 'My Tree App',
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1' }, { name: 'keywords', content: 'mart, cube, portfolio, site, web, developer' }, { hid: 'description', name: 'description', content: pkg.description }],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' }],
	},

	privateRuntimeConfig: {
		apiKey: process.env.apiKey,
		authDomain: process.env.authDomain,
		databaseURL: process.env.databaseURL,
		projectId: process.env.projectId,
		storageBucket: process.env.storageBucket,
		messagingSenderId: process.env.messagingSenderId,
		appId: process.env.appId,
		measurementId: process.env.measurementId,
		gmapKey: process.env.NUXT_ENV_GMapKey,
	},

	// Customize the progress-bar color
	loading: false,
	loadingIndicator: {
		name: 'wandering-cubes',
		color: '#3a506b',
		background: 'white',
	},

	// Global css
	css: ['~/assets/style.scss'],

	// Plugins to load before mounting the App
	plugins: [{ src: `@/plugins/x5gMap.js` }, { src: `@/plugins/lazysizes.client.js` }, { src: '@/plugins/qrReader.js', mode: 'client' }, { src: '@/plugins/qrGenerator.js' }, { src: '@/plugins/vee-validate.js' }, { src: '@/plugins/fireauth.js' }, { src: '@/plugins/charts.js' }],

	// Nuxt.js modules
	modules: ['@nuxtjs/pwa', '@nuxtjs/firebase', 'nuxt-i18n'],

	pwa: {
		manifest: {
			name: 'My Tree',
			short_name: 'My Tree',
			// display: 'Fullscreen',
			theme_color: '#3a506b',
			background_color: '#ffffff',
			start_url: 'https://mytreeapp.netlify.app',
			icons: [
				{
					src: '/favicon/android-chrome192.png',
					sizes: '192x192',
					type: 'image/png',
				},
				{
					src: '/favicon/android-chrome512.png',
					sizes: '512x512',
					type: 'image/png',
				},
			],
		},
		workbox: {
			// dev: true,
			swURL: 'installApp.js',
			// offline: true,
		},
	},

	firebase: {
		config: {
			apiKey: process.env.apiKey,
			authDomain: process.env.authDomain,
			databaseURL: process.env.databaseURL,
			projectId: process.env.projectId,
			storageBucket: process.env.storageBucket,
			messagingSenderId: process.env.messagingSenderId,
			appId: process.env.appId,
			measurementId: process.env.measurementId,
			gmapKey: process.env.gmapKey,
		},
		services: {
			firestore: true,
			auth: true,
			storage: true,
		},
	},

	i18n: {
		defaultLocale: 'en',
		lazy: true,
		langDir: 'locales/',
		locales: [
			{
				code: 'ua',
				name: 'UA',
				file: 'ua.js',
			},
			{
				code: 'en',
				name: 'EN',
				file: 'en.js',
			},
		],
	},

	generate: {
		fallback: true,
	},

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
