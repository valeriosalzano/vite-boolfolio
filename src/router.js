import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import ProjectSingle from './pages/ProjectSingle.vue';
import AppContact from './pages/AppContact.vue';
import AppAbout from './pages/AppAbout.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/repository',
                name: 'projects',
                component: ProjectList
            },
            {
                path: '/repository/:slug',
                name: 'project-single',
                component: ProjectSingle
            },
            {
                path: '/get-in-touch',
                name: 'contact',
                component: AppContact
            },
            {
                path: '/about-us',
                name: 'about',
                component: AppAbout
            },
            {
                path: '/:pathMatch*',
                name: 'not-found',
                component: NotFound
            },
        ]
    }
);

export {router};