new Vue({
  el: '#editor',
  data: {
    input: '# hello',
	message: '爱生活，爱dota!'
  },
  computed: {
    compiledMarkdown: {
		//getter
		get: function () {
			return marked(this.input, { sanitize: true })
			}
		}
  },
  watch: {
	input: _.throttle(function(){
		console.log("now: "+_.now());
		var vm = this;
		console.log("saving text content");
		vm.message = "保存内容中...";
		
		vm.message = "内容保存完毕！"
	},15000)
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value;
	  console.log("Typing words now..");
    }, 300)
  }
})
