import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import QuestionButtons from './components/QuestionButtons.vue';
import TestComponent from './components/TestComponent.vue';

const routes = [
  {
    path: '/',
    name: 'QuestionButtons',
    component: QuestionButtons
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

createApp(App).use(router).mount('#app');