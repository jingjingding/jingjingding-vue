import Vue from 'vue'
const test = function() {
	 const promise = new Promise(function (retResolve, retReject) {
        const MyModal = Vue.extend({});
        const modal = new MyModal({
            template: `<el-dialog title="" :visible.sync="dialogVisible">
                           qqqqqqqqqqqq
                        </el-dialog>`,
            data() {
                return {
                    dialogVisible:  false,
                    imageUrl: '', 
                    param: {
                        param: "{}"
                    },
                    imgId: ""
                }
            },
            mounted() {
            	console.log(3243)
            },
            watch: {
                
            },
            methods: {
            },
        });
        // 或者，在文档之外渲染并且随后挂载
        const component = modal.$mount()
        document.body.appendChild(component.$el);
    })
	return promise
}
export default test