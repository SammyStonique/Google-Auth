import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueToast from 'vue-toast-notification';
import IdleVue from 'idle-vue'
import 'vue-toast-notification/dist/theme-sugar.css';
import './index.css'

axios.defaults.baseURL = 'http://127.0.0.1:8000/'

createApp(App).use(store).use(router).use(VueToast).use(VueAxios, axios).use(IdleVue, {store,idleTime: 10000}).mount('#app')
