import { createApp } from 'vue';

import App from './App.vue';
import LoggerMixins from './mixins/logger.js';

const app = createApp(App)
//ini adalah contoh untuk pembuatan global mixin yang akan di run setiap kali component di render. 
app.mixin(LoggerMixins);
app.mount('#app');
