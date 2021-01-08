import {createRouter, createWebHistory } from 'vue-router';

import FirstLection from "@/pages/FirstLection";
import PracticeAssignmentOne from "@/pages/PracticeAssignmentOne";
import PracticeAssignmentTwo from "@/pages/PracticeAssignmentTwo";
import CompositionDemo from "@/pages/CompositionDemo";
import RoutingAssignment from "@/pages/RoutingAssignment";
import AllProducts from "@/components/projects/routing/AllProducts";
import AddProduct from "@/components/projects/routing/AddProduct";
import ProductDetails from "@/components/projects/routing/ProductDetails";
import VuexComposition from "@/pages/VuexComposition";
import ReusabilityConcepts from "@/pages/ReusabilityConcepts";
import ComposablesAndCompositionApi from "@/pages/ComposablesAndCompositionApi";
import SearchHook from "@/pages/SearchHook";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: FirstLection },

        { path: '/practice-assignment-one', component: PracticeAssignmentOne },
        { path: '/practice-assignment-two', component: PracticeAssignmentTwo },
        { path: '/composition-demo', component: CompositionDemo },
        { path: '/routing-assignment', component: RoutingAssignment, children: [
                { path: 'products', component: AllProducts },
                { path: 'products/:pid', component: ProductDetails, props: true },
                { path: 'add', component: AddProduct }
            ] },
        { path: '/routing-assignment/products', component: AllProducts },
        { path: '/vuex-composition', component: VuexComposition },

        { path: '/reusability-concepts', component: ReusabilityConcepts },
        { path: '/composables-composition-api', component: ComposablesAndCompositionApi },
        { path: '/search-hook', component: SearchHook },
    ]
})


export default router;
