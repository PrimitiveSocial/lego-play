import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Lego configuration
import VueLego from "@primitivesocial/lego";
Vue.use(VueLego);

// Tailwind configuration
import "tailwindcss/tailwind.css";

new Vue({
  render: h => h(App),
}).$mount('#app');
