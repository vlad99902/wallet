
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      //pages of app
      {
        path: '', component: () => import('pages/PageTodo.vue')
      },
      { 
        path: '/settings', component: () => import('pages/PageSettings.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
