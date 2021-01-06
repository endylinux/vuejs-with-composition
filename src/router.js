import {createRouter, createWebHistory } from 'vue-router';

import FirstLection from "@/pages/FirstLection";
import PracticeAssignmentOne from "@/pages/PracticeAssignmentOne";
import PracticeAssignmentTwo from "@/pages/PracticeAssignmentTwo";
import CompositionDemo from "@/pages/CompositionDemo";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: FirstLection },

        { path: '/practice-assignement-one', component: PracticeAssignmentOne },
        { path: '/practice-assignement-two', component: PracticeAssignmentTwo },
        { path: '/composition-demo', component: CompositionDemo },
    ]
})


export default router;
