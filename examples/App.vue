<template>
  <div id="app">
	  外部value:{{value}}
	<jci-input v-model="value" type="number" :abc="value"></jci-input>
	
	
	<jci-input  placeholder="Enter text" style="width: 200px;" v-model="value" type="text" :suffix="value"></jci-input>
	
	
	jci-upload:
	<jci-upload BASEURL="123"></jci-upload>
	<br />
	<!-- <jci-codemirror type="js" ></jci-codemirror>
	 -->
	<br />
	jci-code-editor:
	<jci-code-editor :autoCompletion="true" style="height: 500px;"></jci-code-editor>
	
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
		#app{
			padding: 20px;
			
		}
</style>
