const student = [{
    path: '/create-vacation',
    component: () => import('@/page/studnet/create-vacation.vue')
}, {
    path: '/student-vacation',
    component: () => import('@/page/studnet/student-vacation.vue')
}, {
    path: '/student-set',
    component: () => import('@/page/studnet/student-set.vue')
}]
export default student;