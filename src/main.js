import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Icon, Layout, Header, Sider, Content, Footer, Menu, MenuItem, Submenu, MenuGroup, Button, Table, Select } from 'iview';
import 'iview/dist/styles/iview.css';
/* IView 按需引入 */
Vue.component('Icon', Icon);
Vue.component('Layout', Layout);
Vue.component('Layout', Layout);
Vue.component('Header', Header);
Vue.component('Sider', Sider);
Vue.component('Content', Content);
Vue.component('Footer', Footer);
Vue.component('Menu', Menu);
Vue.component('MenuItem', MenuItem);
Vue.component('Submenu', Submenu);
Vue.component('MenuGroup', MenuGroup);
Vue.component('Button', Button);
Vue.component('Select', Select);
Vue.component('Table', Table);
/* IView 按需引入 */

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
