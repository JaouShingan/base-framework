import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Container, Header, Aside, Main, Footer, Button, Select } from 'element-ui';

/* Element-ui 按需引入 */
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Button);
Vue.use(Select);
/* Element-ui 按需引入 */

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
