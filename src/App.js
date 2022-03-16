import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
// import { } from "react-router-dom";
// import Header from './components/Header';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import Register from './components/Register';
import UpdateProduct from './components/UpdateProduct';
import Protected from './components/Protected';
import ProductList from './components/ProductList';
import SearchProduct from './components/searchProduct';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Switch>
        {/* <Header /> */}
        {/* <Login /> */}
        {/* <h2>Ecommarce Project</h2> */}
        {/* <button>simple button</button>
        <Button>bootstrap</Button> */}
      
        <Route exact path="/login" component={Login} />
        <Route exact path="/add" Protected component={AddProduct} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/update/:id" Protected component={UpdateProduct} />
        <Route exact path="/search" Protected component={SearchProduct} />
        <Route exact path="/" Protected component={ProductList} />

        </Switch>     
      </BrowserRouter>
    </div>
  );
}

export default App;
