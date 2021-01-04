import {createRouter, createWebHistory } from 'vue-router';

import FirstLection from "@/pages/FirstLection";
import PracticeAssignement from "@/pages/PracticeAssignement";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: FirstLection },
        { path: '/practice-assignement', component: PracticeAssignement },
    ]
})


export default router;
