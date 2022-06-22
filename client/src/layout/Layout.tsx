import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  LayoutWrapper,
  ContentWrapper
} from '../styles/Layout.style'

type LayoutProps = {
  children: React.ReactNode
};

const Layout:React.FC<LayoutProps> = ({ children }) => {
  
  return (
    <>
    <header style={{display: 'flex', justifyContent: 'space-between'}}>
      <Navbar/>
    </header>
    <main>
      <LayoutWrapper>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </LayoutWrapper>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}
export default Layout;