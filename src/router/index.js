import Vue from 'vue'
import Router from 'vue-router'
import BankAccount from '@/pages/BankAccount'
import BalancePage from '@/pages/BalancePage'
import UserLogin from '@/pages/UserLogin'
import SaveMoney from '@/pages/SaveMoney'
import Register from '@/pages/Register'
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'BankAccount',
      component: BankAccount
    },
    {
      path: '/balance',
      name: 'Balance',
      component: BalancePage
    },{
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: UserLogin
    },
    {
      path: '/saveMoney',
      name: 'SaveMoney',
      component: SaveMoney
    }
  ],
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});

export default router;

