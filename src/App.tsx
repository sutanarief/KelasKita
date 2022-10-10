import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import routes from './routes';
import { Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './styles/Global.style';

const Layout = React.lazy(() => import("./layout/Layout"))
const Home = React.lazy(() => import('./views/HomePage/HomePage'))


const Loading = () => <h1>Loading...</h1>


const App = () => {
  return (
    <>
      {/* <NavBar/>
    <main>
      <Main/>
    </main>
    <footer>
      <h1>ini footer</h1>
    </footer> */}
    {/* <GlobalStyle/> */}
      <React.Suspense fallback={<Loading/>}>
        <Routes>
          {routes.map((x, index) => (
            <Route
              key={index}
              path={x.path}
              element={<Layout children={<x.component/>}/>}
            />
          ))}
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
