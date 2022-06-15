import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const loading = () => {
  return (
    <div>Loading . . .</div>
  )
}

function App() {
  return (
      <Router>
        <React.Suspense fallback={loading()}>
        </React.Suspense>
      </Router>
  );
}

export default App;
