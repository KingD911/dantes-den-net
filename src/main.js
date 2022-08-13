import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import TheHome from './components/TheHome.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home', component: TheHome
        },
        {
            path: '/', component: TheHome
        }
    ]
})

createApp(App).use(router).mount('#app')
