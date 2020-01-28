import Vue from 'vue'
import Router from 'vue-router'
import DashboardAdmin from '@/components/DashboardAdmin'
import DashboardProf from '@/components/DashboardProf'
import DashboardResp from '@/components/DashboardResp'
import Module from '@/components/Module'
import Class from '@/components/Class'
import Prof from '@/components/Prof'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import Home from '@/components/Home'
import Semester from '@/components/Semester'
import Field from '@/components/Field'
import Edit from '@/components/edit'
import SchoolYear from '@/components/SchoolYear'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/admin', name: 'administrateur', component: DashboardAdmin },
    { path: '/prof', name: 'professeur', component: DashboardProf },
    { path: '/resp', name: 'responsable', component: DashboardResp },
    { path: '/Gmodule', name: 'module', component: Module },
    { path: '/Gprof', name: 'profs', component: Prof },
    { path: '/GsY', name: 'schoolYear', component: SchoolYear },
    { path: '/Gsemester', name: 'semester', component: Semester },
    { path: '/Gfield', name: 'field', component: Field },
    { path: '/Gclass', name: 'profs', component: Class },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout },
    { path: '/editnotes', name: 'edit', component: Edit },
    { path: '/', name: 'home', component: Login },

  ]
})
