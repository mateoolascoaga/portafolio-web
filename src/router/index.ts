import { createRouter, createWebHashHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import Home from '@/pages/home/Home.vue'
import Drawings from '@/pages/drawings/Drawings.vue'
import Contact from '@/pages/contact/Contact.vue'
import Texts from '@/pages/texts/Texts.vue'
import TextDetail from '@/pages/texts/TextDetail.vue'
import Gallery from '@/pages/gallery/Gallery.vue'
import NotFound from '@/pages/NotFound.vue'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: 'drawings',
          name: 'drawings',
          component: Drawings,
        },
        {
          path: 'contact',
          name: 'contact',
          component: Contact,
        },
        {
          path: 'texts',
          name: 'texts',
          component: Texts,
        },
        {
          path: 'texts/:id',
          name: 'text-detail',
          component: TextDetail,
        },
        {
          path: 'gallery',
          name: 'gallery',
          component: Gallery,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
})