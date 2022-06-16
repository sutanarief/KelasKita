import React from 'react';
import Navbar from '../components/Navbar'
import HomePage from '../views/HomePage/HomePage';

type LayoutProps = {
  
};

const Layout:React.FC<LayoutProps> = () => {
  
  return (
    <>
    <Navbar/>
    <HomePage/>
    </>
  )
}
export default Layout;