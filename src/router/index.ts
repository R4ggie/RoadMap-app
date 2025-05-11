import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '@/pages/IndexPage.vue';
import Computerpage from '@/pages/ComputerPage.vue';
import Telepage from '@/pages/TelePage.vue';
import Controlpage from '@/pages/ControlPage.vue';
import Contact from '@/pages/ContactPage.vue';
import majorPage from '@/pages/majorPage.vue';

import frontend from '@/pages/ComputerViews/frontendSubj.vue';
import backend from '@/pages/ComputerViews/backendSubj.vue';
import deskapp from '@/pages/ComputerViews/deskappSubj.vue';
import mobileapp from '@/pages/ComputerViews/mobileappSubj.vue'
import cyber from '@/pages/ComputerViews/cyberSubj.vue';

import ai from '@/pages/ControlViews/aiSubj.vue';
import robotics from '@/pages/ControlViews/roboticsSubj.vue';
import embedded from '@/pages/ControlViews/embeddedSubj.vue';
import industrial from '@/pages/ControlViews/industrialSubj.vue';
import iot from '@/pages/ControlViews/iotSubj.vue';
import power from '@/pages/ControlViews/powerSubj.vue';
import scada from '@/pages/ControlViews/scadaSubj.vue';

import isp from '@/pages/TeleViews/ispSubj.vue';
import mobile from '@/pages/TeleViews/mobileSubj.vue';
import networking from '@/pages/TeleViews/networkingSubj.vue';
import oil from '@/pages/TeleViews/oilSubj.vue';



export const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexPage,
  },
  {
    path: '/Computerpage',
    name: 'CSpage',
    component: Computerpage,
  },
  {
    path: '/Controlpage',
    name: 'Controlpage',
    component: Controlpage,
  },
  {
    path: '/Telepage',
    name: 'Communicationpage',
    component: Telepage,
  },
  {
    path: '/Contact',
    name: 'Contactpage',
    component: Contact,
  },
  {
    path: '/majorPage',
    name: 'majorPage',
    component: majorPage
  },
  {
    path: '/frontendSubj',
    name: 'frontSubj',
    component: frontend,
  },
  {
    path: '/backendSubj',
    name: 'backendSubj',
    component: backend,
  },
  {
    path: '/deskappSubj',
    name: 'deskappSubj',
    component: deskapp,
  },
  {
    path: '/cyberSubj',
    name: 'cyberSubj',
    component: cyber,
  },
  {
    path: '/mobileappSubj',
    name: 'mobileappSubj',
    component: mobileapp,
  },
  {
    path: '/scadaSubj',
    name: 'scadaSubj',
    component: scada,
  },
  {
    path: '/powerSubj',
    name: 'powerSubj',
    component: power,
  },
  {
    path: '/iotSubj',
    name: 'iotSubj',
    component: iot,
  },
  {
    path: '/embeddedSubj',
    name: 'embeddedSubj',
    component: embedded,
  },
  {
    path: '/roboticsSubj',
    name: 'roboticsSubj',
    component: robotics,
  },
  {
    path: '/aiSubj',
    name: 'aiSubj',
    component: ai,
  },
  {
    path: '/industrialSubj',
    name: 'industrialSubj',
    component: industrial,
  },
  {
    path: '/ispSubj',
    name: 'ispSubj',
    component: isp,
  },
  {
    path: '/mobileSubj',
    name: 'mobileSubj',
    component: mobile,
  },
  {
    path: '/networkingSubj',
    name: 'networkingSubj',
    component: networking,
  },
  {
    path: '/oilSubj',
    name: 'oilSubj',
    component: oil,
  },





];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
