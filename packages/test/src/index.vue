<template>
	<div>
		这是一个test组件

		<Input v-model="value" placeholder="Enter something..." style="width: 300px" />
	</div>
</template>

<script>
	export default {
		name: 'jci-input',
		data() {
			return {
				value:this.valueP
			}
		},
		model: {
			prop: 'valueP',
			event: 'input'
		},
		props: {
			valueP: [String, Number],
		},
		watch: {
			value(val) {
				this.$emit('input', val)
			}
		}

	}
</script>
