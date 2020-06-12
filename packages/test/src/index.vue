<template>
	<div>
		这是一个test组件

		<Input v-bind="$attrs" ref="input" v-model="value"   />
	</div>
</template>

<script>
	import { Input } from 'view-design'
	export default {
		name: 'jci-input',
		components:{Input},
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
