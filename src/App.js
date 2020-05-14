import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HeaderComponent from './components/Header';
import ListPage from './pages/List';
import DetailPage from './pages/Detail';
import Footer from './components/Footer';

const App = () => (
  <div>
    <HeaderComponent />
    <div className="container">
      <BrowserRouter>
        <Route path="/" exact component={ListPage} />
        <Route path="/:id" exact component={DetailPage} />
      </BrowserRouter>
    </div>
    <Footer />
  </div>
);

export default App;
