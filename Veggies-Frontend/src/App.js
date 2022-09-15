import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './Veggies/components/Home';
import Login from './Veggies/components/Login';
import Register from './Veggies/components/Register';
import Services from './Veggies/components/Service';
import AddVegetables from './Veggies/components/admin/AddVegetables';
import ViewAllVegetables from './Veggies/components/admin/ViewAllVegetables';
import Payment from './Veggies/components/user/Payment';

import AdminHome from './Veggies/components/admin/AdminHome';
import UserHome from './Veggies/components/user/UserHome';
import ViewUser from './Veggies/components/admin/ViewUser';
import Vegetable from './Veggies/components/Vegetable';
import AboutUs from './Veggies/components/user/Aboutus';
import ViewOrder from './Veggies/components/admin/ViewOrder';
import Cart from './Veggies/components/Cart';
import Order from './Veggies/components/user/Order';


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route exact path="/login"  component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/services"  component={Services}/>
        <Route exact path="/products"  component={Vegetable}/>
        <Route exact path ="/addvegetable/:vegetableId" component={AddVegetables}/>
        <Route exact path = "/viewallvegetables" component={ViewAllVegetables}/>
        <Route exact path = "/payment" component={Payment}/>
        <Route exact path = "/adminhome" component={AdminHome}/>
        <Route exact path = "/viewcustomer" component={ViewUser}/>
        <Route exact path = "/userhome" component={UserHome}/>
        <Route exact path = "/about" component={AboutUs}/>
        <Route exact path = "/vieworder"component={ViewOrder}/>
        <Route exact path = "/cart" component={Cart}/>
        <Route exact path = "/order" component={Order}/>
        

   
        
        
      </Switch>
    </Router>
  </div>
);
}

export default App;



