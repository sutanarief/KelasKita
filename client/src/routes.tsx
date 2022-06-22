import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Layout = React.lazy(() => import('./layout/Layout'))
const Home = React.lazy(() => import('./views/HomePage/HomePage'))
const Login = React.lazy(() => import('./views/Login/Login'))

const Loading = () => <h1>Loading...</h1>

// const Main = () => {
//   return (
//     <React.Suspense fallback={<Loading/>}>
//       <Routes>
//         <Route path="*" element={<Layout/>} />
//       </Routes>
//     </React.Suspense>
//   )
// }


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  }
]
export default routes