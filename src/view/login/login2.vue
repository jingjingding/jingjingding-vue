<template>
	<div>
		<div>123412341234</div>
		<div v-pre>{{msg}}1234</div>
		<div>{{name}}1234</div>
		<div>{{text}}1234</div>
	</div>
</template>
<script> 	 
	import Vue from 'vue' 
	var bus = new Vue()
	export default {
		data() {
			return {
				msg: "jingjingding",
				name: "qqqqqqq",
				text: "llololoa"
			}
		},
		mounted() {
			console.log(bus)
		},
		methods: {
			aaa() {
				console.log(1)
			}
		}
	}
</script>
<style scoped>
	
</style>