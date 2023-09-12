import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './component/Header';
import Footer from './component/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes></Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
