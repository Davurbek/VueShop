import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueFirestore from 'vue-firestore'
import Swal from 'sweetalert2'
import jQuery from 'jquery';
import {fb} from './firebase'
require('firebase/firestore')


Vue.config.productionTip = false




Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})

Vue.use(VueFirestore)

window.$ = window.jQuery = jQuery;
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';

window.Swal = Swal;
import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

let app = '';

// eslint-disable-next-line no-unused-vars
fb.auth().onAuthStateChanged(function(user) {

  if(!app){
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
    
  }

});


