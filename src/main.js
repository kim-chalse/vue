import './style.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);  // 라우터를 애플리케이션에 등록
app.mount('#app');
