import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/inventory/Inventory';
import NotFound from './components/Notfound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div >
        <Header></Header>
       <Router>
       <Switch>
          <Route path="/shop">
          <Shop></Shop>
          </Route>
         
          <Route path="/review">
          <Review></Review>
          </Route>

          <Route path="/inventory">
          <Inventory/>
          </Route>
          <Route exact path="/">
          <Shop></Shop>
          </Route>
          <Route  path="/product/:productkey">
          <ProductDetails></ProductDetails>
          </Route>
          <Route path="*">
          <NotFound/>
          </Route>
          </Switch>
       </Router>
   
     
    </div>
  );
}

export default App;
