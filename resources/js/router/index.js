import { createRouter, createWebHistory } from "vue-router";

import PetsIndex from "../components/pets/PetsIndex.vue";
import PetsCreate from "../components/pets/PetsCreate.vue";
import PetsEdit from "../components/pets/PetsEdit.vue";

const routes = [
    {
        path: "/dashboard",
        name: "pets.index",
        component: PetsIndex,
    },
    {
        path: "/pets/create",
        name: "pets.create",
        component: PetsCreate,
    },
    {
        path: "/pets/:id/edit",
        name: "pets.edit",
        component: PetsEdit,
        props: true
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
