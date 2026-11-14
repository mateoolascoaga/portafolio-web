import Contact from "@/pages/contact/Contact.vue";
import Drawings from "@/pages/drawings/Drawings.vue";
import Home from "@/pages/home/Home.vue";
import Texts from "@/pages/texts/Texts.vue";
import { createRouter, createWebHashHistory } from "vue-router";


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
     {
      path: '/drawings',
      name: 'drawings',
      component: Drawings
    },    
     {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
     {
      path: '/texts',
      name: 'texts',
      component: Texts
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})