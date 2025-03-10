import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import List from './pages/students/List.vue';
import Create from './pages/students/Create.vue';
import ListTeachers from './pages/teachers/List.vue';
import CreateTeachers from './pages/teachers/Create.vue';
import ListPlans from './pages/plans/List.vue';
import CreatePlan from './pages/plans/Create.vue';
import Item from './pages/students/Item.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/plans/create', component: CreatePlan },
    { path: '/plans/list', component:  ListPlans},
    { path: '/students/list', component: List },
    { path: '/students/create', component: Create },
    { path: '/students/:id', component: Item },
    { path: '/teachers/create', component: CreateTeachers },
    { path: '/teachers/list', component: ListTeachers },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;