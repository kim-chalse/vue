import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import NoticePage from '@/views/NoticePage.vue';
import S_korean from '@/views/S_korean.vue';
import S_english from '@/views/S_english.vue';
import S_calculus from '@/views/S_calculus.vue';
import S_physics from '@/views/S_physics.vue';
import S_chemistry from '@/views/S_chemistry.vue';
import S_Convergence_science  from '@/views/S_Convergence_science.vue';
import S_enginerring from '@/views/S_enginerring.vue';
import S_logic from '@/views/S_logic.vue';
import S_geometry from '@/views/S_geometry.vue';
import S_math_problem from '@/views/S_math_problem.vue';
import S_sports from '@/views/S_sports.vue';

import class3 from '@/views/class3.vue';


const routeComponents = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/notice', name: 'notice', component: NoticePage },

    { path: '/korean', name: 'korean', component: S_korean },//독서

    { path: '/english', name: 'english', component: S_english },//영어

    { path: '/calculus', name: 'calculus', component: S_calculus },//미적분

    { path: '/physics', name: 'physics', component: S_physics },//물리

    { path: '/chemistry', name: 'chemistry', component: S_chemistry },//화학

    { path: '/Convergence_science', name: 'Convergence_science', component: S_Convergence_science },//융합과학

    { path: '/enginerring', name: 'enginerring', component: S_enginerring },//공학일반

    { path: '/logic', name: 'logic', component: S_logic },//논리학

    { path: '/geometry', name: 'geometry', component: S_geometry },//기하

    { path: '/math_problem', name: 'math_problem', component: S_math_problem },//수학과제탐구

    { path: '/sports', name: 'sports', component: S_sports },//스포츠생활활

  //  { path: '/korean', name: 'notice', component: S_korean },
  //  { path: '/korean', name: 'notice', component: S_korean },
    
    { path: '/class3', name: 'class3-3', component: class3 },//스포츠생활활

    
  ];


const routes = routeComponents.map(route => ({
    path: route.path,
    name: route.name,
    component: route.component
  }));

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
