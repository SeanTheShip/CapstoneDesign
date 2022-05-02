import { createWebHistory, createRouter } from "vue-router";
import Community from './components/Community.vue';
import Post from './components/Post.vue';

const routes = [
{
    path: "/community",
    component: Community,
},
{
    path: "/community/post",
    component: Post,
}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 