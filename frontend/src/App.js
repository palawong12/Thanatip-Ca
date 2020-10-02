import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import { Container } from 'reactstrap';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Profile from './components/Profile';
import Users from './components/Users';
import Login from './components/Login';
import Register from './components/Register';
import FileUpload from './components/FileUpload';
import Category from './components/category';

function App() {
  return (
    <div >
      <Header />
      <Container fluid={true}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/profile" component={Profile} />
        <Route path="/users" component={Users} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/fileUpload" component={FileUpload} />
        <Route path="/category" component={Category} />
      </Container>
      <Footer />
    </div>
  );
}
export default App;