// 🎌 IMPORT MODULES, COMPONENTS AND WHATNOT. CREATE THE VUE INSTANCE 🎌
import Vue from 'vue'
import WebFont from 'webfontloader'
import Marked from 'marked'
import App from '../components/app.vue'
import Modal from '../components/modal.vue'

// 🎌 GOOGLE FONTS, CAUSE TYPOGRAPHY 🎌
WebFont.load({
 google: {
   families: ['Montserrat:400,500,500i,700,800']
 }
});

var app = new Vue({
  el: '#content',
  render: h => h(App),
})
