import Vue from 'vue'
import Router from 'vue-router'
import GymHome from '../components/common/GymHome'
import Layout from '../components/user/MyPage'

Vue.use(Router)
export default new Router( {
    mode: 'history',
    routes : [
        {path: '/', component: GymHome},
        {path: '/', component: Layout},
        {path: '/login', component: Login},
        {path: '/join', component: Join},
    ]
})


