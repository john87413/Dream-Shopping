import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import {
  required, email, min, max,
} from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './assets/all.scss';
import App from './App.vue';
import router from './router';

defineRule('required', required);
defineRule('email', email);
defineRule('max', max);
defineRule('min', min);

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

app.component('VField', Field);
app.component('VForm', Form);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
