require('./bootstrap');

import Alpine from 'alpinejs';

import { createApp } from 'vue';
import router from './router';

import PetsIndex from './components/pets/PetsIndex.vue';

// window.Alpine = Alpine;

// Alpine.start();

createApp({
    components: {
        PetsIndex
    }
}).use(router).mount('#app')
