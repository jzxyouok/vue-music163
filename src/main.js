import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Songs from './components/Songs'
import Song from './components/Song'
import MintUI from 'mint-ui'
import { Button, Cell ,Field} from 'mint-ui';
import 'mint-ui/lib/style.css'
import VueResource from 'vue-resource'
import DataApi from './data-api'
Vue.use(VueRouter)
// Vue.use(Button)
// Vue.use(Cell)
// Vue.use(Field)

Vue.use(MintUI)
Vue.use(VueResource)
Vue.use(DataApi)



const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/' },
    { path: '/songs/:word', component: Songs },
    { path: '/song/:id', component:Song },   
  ]
})

var vm=new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})



