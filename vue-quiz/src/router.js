import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import QuestionButtons from './components/QuestionButtons.vue';
import TestComponent from './components/TestComponent.vue';

const routes = [
  {
    path: '/',
    name: 'QuestionButtons',
    component: QuestionButtons,
    beforeEnter: (to, from, next) => {
      next({ name: 'TestComponent' }); // Always redirect to TestComponent
    }
  },
  {
    path: '/test',
    name: 'TestComponent',
    component: TestComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp({});
app.use(router);
app.mount('#app');