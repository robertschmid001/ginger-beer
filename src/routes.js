import Vue from 'vue'
import Router from 'vue-router'
// import Home from './components/Home.vue'
// import Login from './components/Login.vue'
// import Profile from './components/Profile.vue'
// import Search from './components/Search.vue'
// import Portefeuille from './components/Portefeuille/Portefeuille.vue'
// import Email from './components/Email.vue'

// import Documents from './components/Documents.vue'
import Main from './components/front/Main.vue'
// import Admin from './components/back/Admin.vue'
// import MainAdmin from './components/back/MainAdmin.vue'
// import Login from './components/back/Login.vue'

// import EditHistory from './components/back/edit-comp/EditHistory.vue'
// import EditPresentation from './components/back/edit-comp/EditPresentation.vue'
// import EditProducts from './components/back/edit-comp/EditProducts.vue'
// import EditTrail from './components/back/edit-comp/EditTrail.vue'
// import EditGallery from './components/back/edit-comp/EditGallery.vue'
// import EditFooter from './components/back/edit-comp/EditFooter.vue'

// import MainDashboard from './components/back/edit-comp/MainDashboard.vue'

Vue.use(Router)

let router = new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Main'
      }
    },
    {
      path: '*',
      name: 'Main',
      component: Main
    },
    // {
    //   path: '/admin',
    //   component: Admin,
    //   children: [
    //     {
    //       path: '',
    //       name: 'Login',
    //       component: Login
    //     },
    //     {
    //       path: 'dashboard',
    //       name: 'MainAdmin',
    //       component: MainAdmin,
    //       children: [
    //         {
    //           path: 'main',
    //           component: MainDashboard,
    //           name: 'Dashboard'
    //         },
    //         {
    //           path: 'history',
    //           component: EditHistory,
    //           name: 'History'
    //         }, {
    //           path: 'presentation',
    //           component: EditPresentation,
    //           name: 'Presentation'
    //         }, {
    //           path: 'products',
    //           component: EditProducts,
    //           name: 'Products'
    //         }, {
    //           path: 'trail',
    //           component: EditTrail,
    //           name: 'Trail'
    //         }, {
    //           path: 'gallery',
    //           component: EditGallery,
    //           name: 'Gallery'
    //         }, {
    //           path: 'footer',
    //           component: EditFooter,
    //           name: 'Footer'
    //         }
    //       ]
    //     },

    //   ]
    // }
  ]
})

// router.beforeEach((to, from, next) => {
//     let currentUser = firebase.auth().currentUser;
//     let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//     if (requiresAuth && !currentUser) next('login')
//     else if (!requiresAuth && currentUser) next('chatrooms')
//     else next()
// })

export default router