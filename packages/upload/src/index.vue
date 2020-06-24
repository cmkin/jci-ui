<template>
	<div class="jci-upload">
		<Upload type="drag" v-bind="$attrs" :action="BASEURL+url" :on-success="handleSuccess"  :max-size="2048">

			<div class="hasImg" style="min-height: 120px;" v-if="Files && Files[0] && Files[0].FileIsExist && Files[0].FileMd5 ">
				<img :src="BASEURL+'upload/' +  Files[0].FileMd5" alt="">
			</div>
			<div v-else style="padding: 20px 0;">
				<Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
				<p>{{title}}</p>
			</div>

		</Upload>
	</div>
</template>

<script>
	import { Upload,Icon } from 'view-design'
	export default {
		name: 'jci-upload',
		components:{Upload,Icon},
		data() {
			return {
				//BASEURL: BASEURL
			}
		},
		props: {
			BASEURL: {
				type: String,
				default:''
			},
			url: {
				type: String,
				default: 'coolice/upload'
			},
			Files: {
				type: Array,
				default: () => {
					return []
				}
			},
			title: {
				type: String,
				default: "点击上传图片"
			}
		},
		mounted() {

		},
		methods: {
			handleSuccess(res, file) {
				if (res.Succeed) {
					//this.Files = res.Data
					// console.log(this.$parent)
					this.$emit("uploadFiles", res.Data)
					// this.$parent.model.Files = res.Data
				} else {
					this.$Message.error(res.Message)
				}
			},
		}
	}
</script>

<style lang="less">
	.jci-upload {
		.hasImg {
			img {
				display: block;
				width: 100%;
			}
		}
	}
</style>
