import { createRouter, createWebHistory } from 'vue-router'; 

const routes = [
    {
        path: '/',
        name: "PublicWelcome",
        component: () => import("@/views/Public/PublicWelcome"),
        meta: {
            isPublic: true
        }
    },
    {
        path: '/auth',
        name: "Login",  
        component: () => import("@/views/Public/PublicAuth.vue"),
        meta: {
            isPublic: true
        }
    },
    {
        path: '/dashboard',
        name: "UserDashboard",
        component: () => import("@/views/UserDashboard.vue"),
        meta: {
            isPublic: false
        }
    },
    {
        path: '/transactions',
        name: "Transactions",
        component: () => import("@/views/Transactions.vue"),
        meta: {
            isPublic: false
        }
    },
    {
        path: '/top-income',
        name: "TopIncome",
        component: () => import("@/views/TopIncome.vue"),
        meta: {
            isPublic: false
        }
    },
    {
        path: '/top-expense',
        name: "TopExpense",
        component: () => import("@/views/TopExpense.vue"),
        meta: {
            isPublic: false
        }
    },
    {
        path: '/help',
        name: "InfoPage",
        component: () => import("@/views/InfoPage.vue"),
        meta: {
            isPublic: false
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: "ErrorPage",
        component: () => import("@/views/ErrorPage.vue"),
        meta: {
            isPublic: true
        }
    }
]
const router = createRouter({ 
    history : createWebHistory(), 
    routes   
})

// router.beforeEach((to, from, next) => {
//     console.log(to, from)
// })

export default router;