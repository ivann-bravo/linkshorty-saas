import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
    <div>
    <nav>
    <h1>Linkshorty SaaS(con TSX) </h1>
      < Link to = "/login" > Ir a Login </Link>
        </nav>

        < hr />

        <Routes>
        <Route path="/" element = {< h2 > Página de Inicio < /h2>} / >
          <Route path="/login" element = {< Login />} />
            </Routes>
            </div>
            </Router>
  );
}

export default App;