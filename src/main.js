import { createApp } from 'vue'
import App from './App.vue'

//import router
import router from './router'

//import Bootstrap, Popper, jQuery
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap-icons/font/bootstrap-icons.css'

// import custom CSS
import './assets/css/style.css';

// import custom JS
import './assets/js/main.js';

const app = createApp(App)

//use vue router
app.use(router)
app.mount('#app')