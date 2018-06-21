new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        menu: false,
        stamp_colors: [],
        stamp_color: '',
		osnastka: '',
		checked : false,
		flash: false,
		phone: ''
    },
    computed:{
	  isDisabled(){
	   return this.checked != false && this.phone != '';
	  }
	}
})

