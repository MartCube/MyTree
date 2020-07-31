<template>
	<div class="container">
		<div class="menu_title">
			<div class="line"></div>
			<span>Statistcs</span>
			<nuxt-link to="/menu" class="go_back">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M7.38,14.05h15.5a.61.61,0,0,0,.62-.61V10.56a.61.61,0,0,0-.62-.61H7.38V7.58a1.23,1.23,0,0,0-2.1-.87L.86,11.13a1.23,1.23,0,0,0,0,1.74l4.42,4.42a1.23,1.23,0,0,0,2.1-.87V14.05Z" />
				</svg>
			</nuxt-link>
		</div>
		<div class="inner-container">
			<div class="item">
				<h2>shop scans</h2>
				<p>{{ shopScans }}</p>
			</div>
			<div class="item">
				<h2>scan history</h2>
				<div v-for="(scanLog, i) in scanLogs" :key="i">
					<p>
						{{ scanLog.user }}
						<span>{{ scanLog.name }}</span>
						<span>{{ scanLog.users }}</span>
					</p>
				</div>
			</div>
			<div class="chart">
				<la-cartesian text-color="#3a506b" :padding="[20, 20, 20, 20]" :bound="[0]" autoresize :data="chartData">
					<defs>
						<linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1">
							<stop stop-color="#6fffe9" offset="0%" stop-opacity="1"></stop>
							<stop stop-color="#6fffe9" offset="50%" stop-opacity="0.2"></stop>
							<stop stop-color="#6fffe9" offset="100%" stop-opacity="0"></stop>
						</linearGradient>
					</defs>
					<la-area fill-color="url(#area-fill)" dot curve prop="users"></la-area>
					<la-x-axis :gridline="true" :font-size="12" prop="name"></la-x-axis>
					<la-y-axis :font-size="12"></la-y-axis>
				</la-cartesian>
			</div>
		</div>

		<transition name="modal">
			<modal v-if="modal" @getValue="getModal">
				Accept scan ?
			</modal>
		</transition>
	</div>
</template>

<script>
import modal from '~/components/modal'
import { Cartesian, Line } from 'laue'
export default {
	name: 'Statistics',
	components: {
		modal,
		LaCartesian: Cartesian,
	},
	data: () => ({
		modal: false,
	}),
	computed: {
		user() {
			return this.$store.getters.user
		},
		shopScans() {
			return this.$store.getters.shop.shopScans
		},
		chartData() {
			let shopScansStrore = this.$store.getters.shop.scanLogs;
			console.log(shopScansStrore);
			// create an array of unique dates
			let uniqueDatesArray = [...new Set(shopScansStrore.map((x) => x.date.date))]
			let temp = []
			/* 	
				loop through date array and create new array of objects where
				name: is label(date) for chart
				users: is length of filtered array of users per day
			*/
			for (let i = 0; i < uniqueDatesArray.length; i++) {
				temp.push({
					name: uniqueDatesArray[i],
					users: shopScansStrore.filter((x) => x.date.date === uniqueDatesArray[i]).length,
				})
			}
			shopScansStrore = temp
			return shopScansStrore
		},
		scanLogs() {
			return this.$store.getters.shop.scanLogs
		},
	},
	watch: {
		scanLogs(newValue, oldValue) {
			console.log('new val', newValue, 'old val', oldValue[0].date.date)
			if (oldValue[0].date.date != 0) {
				console.log('shop scanned')
				this.modal = true
			}
		},
	},
	mounted() {},
	methods: {
		async getModal(value) {
			if (value) {
				console.log('accept scan and increment user scans')
				//	update scanned shop in firabase
				const increment = this.$fireStoreObj.FieldValue.increment(1)
				await this.$fireStore.collection('users').doc(this.scanLogs[0].user).update({ scans: increment })
			} else {
				console.log('decline scan and make timeout')
			}
			this.modal = false
		},
	},
}
</script>

<style lang="scss" scooped>
@import '~/assets/colors.scss';

.chart {
	margin-left: -10px;
}
.chart,
.inner-container {
	width: 100%;
}
.inner-container {
	// height: 63vh;
	overflow-y: auto;
}
</style>
