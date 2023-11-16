import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from "@/store/Store";

store.commit("initDeviceId");
store.commit("initOnUpdate");
createApp(App).use(router).use(store).mount('#app')
