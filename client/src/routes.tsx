import React from 'react'



const Home = React.lazy(() => import('./views/HomePage'))
const Login = React.lazy(() => import('./views/Login'))

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    exact: true,
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    component: null
  }
]

export default routes