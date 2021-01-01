const routes = [{
    path: '/',
    name: 'Home',
    component: () => import( /* webpackChunkName: "calender" */ '../pages/Home')
  },

  {
    path: '/slider',
    name: 'Slider',
    component: () => import( /* webpackChunkName: "calender" */ '../pages/Slider')
  },
  {
    path: '/todo',
    name: 'Todo',

    component: () => import( /* webpackChunkName: "todo" */ '../pages/Todo')
  },
  {
    path: '/blog',
    name: 'Blog',

    component: () => import( /* webpackChunkName: "todo" */ '../pages/Blog')
  }, {
    path: '/survay',
    name: 'Survay',

    component: () => import( /* webpackChunkName: "todo" */ '../pages/Survay')
  }
]

export default routes