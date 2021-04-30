export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/ui/page-layouts/LayoutEmpty.vue'),
    meta: {
      pageTitle: 'dashboard',
      resource: 'dashboard',
      action: 'view',
    },
  },
]
