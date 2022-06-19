import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Exercise1View from "../views/Exercise1View.vue";
import Exercise2View from "../views/Exercise2View.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "exercise1",
        component: Exercise1View,
    },
    {
        path: "/exercise2",
        name: "exercise2",
        component: Exercise2View,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
