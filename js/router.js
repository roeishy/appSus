import loginPage from './apps/login/pages/login-page.cmp.js'
import mailApp from './apps/email/pages/mail-app.cmp.js';
import homePage from './apps/login/pages/home-page.cmp.js';
import keepsApp from './apps/keeps/pages/keeps-app.cmp.js';
import aboutPage from './views/about-page.cmp.js'
const routes = [
    {
        path: '/',
        component: loginPage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/home/:userId',
        component: homePage
    },
    {
        path: '/mail/:userId',
        component: mailApp
    },
    {
        path: '/keeps/:userId',
        component: keepsApp
    },
];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});