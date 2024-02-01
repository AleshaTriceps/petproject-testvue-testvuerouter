import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Main from '/src/components/pages/Main.vue'
import PostPage from '/src/components/pages/PostPage.vue'
import About from '/src/components/pages/About.vue'
import PostIdPage from './components/pages/PostIdPage.vue'
import VIntersection from './directives/VIntersection'
import VFocus from './directives/VFocus'
import PostPageWithStore from './components/pages/PostPageWithStore.vue'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostPage
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/posts/:id',
    component: PostIdPage
  },
  {
    path: '/store',
    component: PostPageWithStore
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
const app = createApp(App)
app.directive('intersection', VIntersection)
app.directive('focus', VFocus)

app.use(router)
app.mount('#app')
