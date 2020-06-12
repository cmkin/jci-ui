<template>
  <div id="app">
	  外部value:{{value}}
	<jci-input v-model="value" type="number" :abc="value"></jci-input>
	
	
	<jci-input  placeholder="Enter text" style="width: 200px;" v-model="value" type="number" :suffix="value"></jci-input>
	
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
	  return{
		  value:"ios-search"
	  }
  },
  components: {
    
  }
}
</script>

<style>

</style>
