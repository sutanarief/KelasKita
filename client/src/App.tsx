import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Main from './routes';

function App() {
  return (
    <>
      <NavBar/>
    <main>
      <Main/>
    </main>
    <footer>
      <h1>ini footer</h1>
    </footer>
    </>
  );
}

export default App;
