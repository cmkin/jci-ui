<template>
  <div id="app">
	  外部value:{{value}}
	<jci-input v-model="value"></jci-input>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
	  return{
		  value:"123"
	  }
  },
  components: {
    
  }
}
</script>

<style>

</style>
