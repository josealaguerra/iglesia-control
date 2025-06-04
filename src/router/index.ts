import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// CRUD Minister
//import MinisterDetail from '../views/minister/MinisterDetail.vue'
import MinisterForm from '../views/minister/MinisterForm.vue'
import MinisterList from '../views/minister/MinisterList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    }, // Rutas para el CRUD de Miembros
    {
      path: '/miembros', // Lista de miembros
      name: 'miembrosList',
      component: MinisterList,
    },
    {
      path: '/miembros/nuevo', // Formulario para crear un nuevo miembro
      name: 'miembroCreate',
      component: MinisterForm, // O un componente wrapper como MiembroCreate
    },
    {
      path: '/miembros/editar/:id', // Formulario para editar un miembro existente
      name: 'miembroEdit',
      component: MinisterForm, // O un componente wrapper como MiembroEdit
      props: true, // Para pasar el 'id' como prop al componente
    },
  ],
})

export default router
