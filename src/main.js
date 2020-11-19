import Vue from 'vue';
import vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import '@/assets/style/style.scss';

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(vuelidate);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
