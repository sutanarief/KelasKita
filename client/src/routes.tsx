import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = React.lazy(() => import('./views/HomePage/HomePage'))
const Login = React.lazy(() => import('./views/Login/Login'))

const Loading = () => <h1>Loading...</h1>

const Main = () => {
  return (
    <React.Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </React.Suspense>
  )
}

export default Main