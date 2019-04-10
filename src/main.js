import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
Vue.use(VueResource);
Vue.use(VueRouter);

//Paginas
import Home from './paginas/Home.vue';
const Contato = {template: '<p>Página de Contato</p>'}

//Rotas
const routes = [
  { path: '/', component: Home },
  { path: '/contato', component: Contato }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
}).$mount('#app');