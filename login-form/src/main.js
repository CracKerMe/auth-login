import { createApp } from 'vue';
import './style.css';
import router from './router/index';
import { createPinia } from 'pinia';
import App from './App.vue';
import vue3GoogleLogin from 'vue3-google-login';

const pinia = createPinia();
createApp(App)
  .use(router)
  .use(pinia)
  .use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  })
  .mount('#app');
