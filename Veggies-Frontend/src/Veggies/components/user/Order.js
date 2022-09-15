import React,{Component} from 'react'

import {Link} from 'react-router-dom'
import OrderService from '../../services/OrderService'




export default class RegisterComponent extends Component {
  constructor(props){
    super(props)
    this.state={
      errors:{
      customerId:'',
      vegetaleId:'',
      quantity:'',
      amount:'',
      status:''
     // role:''
    }
  }

    
   
    this.saveOrder = this.saveOrder.bind(this);
    this.changeHandler =this.changeHandler.bind(this);
  
  }

  
  changeHandler =(event)=>{
    let name =event.target.name;
    let value = event.target.value;
    let errors = this.state.errors;

switch(name){
  
    case "quantity":errors.quantity =value < 1 ? "Please increase quantity" : "";  
    break;
   
    default: break;
}
console.log(this.state)
this.setState({errors,[name]:value});
}

  saveOrder=(e)=>{
  e.preventDefault()
    let order = {
      
      customerId:this.state.customerId,
      vegetableId:this.state.vegetableId,
      quantity:this.state.quantity,
      amount:this.state.amount,
      status:this.state.status,
      }
    
    console.log('order =>' +JSON.stringify(order));
    OrderService.addorder(order).then(res =>{
      
        
      
        alert("Please make payment")
        this.props.history.push("/payment");
       })
  }


    
  

  render(){

  const {errors}=this.state;
    return (
        <div>

<nav class="navbar navbar-light" style={{backgroundColor:"grey"}}>
                <span class="navbar-brand mb-0 h1"style={{color:"lightgreen"}}><h4>VeGGies Store</h4></span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/" style={{color:"lightgreen"}}><h6>Home</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/services" style={{color:"lightgreen"}}><h6>AboutUs</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/product" style={{color:"lightgreen"}}><h6>Products</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/userhome" style={{color:"lightgreen"}}><h6>Logout</h6></Link>
                    </li>
                </ul>
                
            </nav>

            <div style={{backgroundImage:"url(https://thumbs.dreamstime.com/b/shabby-wood-texture-vintage-wooden-fence-desk-surface-natural-color-weathered-timber-background-brown-old-wood-planks-shabby-wood-158067569.jpg)",height:920,backgroundSize:1450}}>
            <h2 style={{textAlign:"center",color:"lightgreen"}}><br></br>Order&#x1F447;!!</h2>
            
            <form>
            <div className="form-group">
              <label><h6>CustomerId</h6></label>
              <input type="number" className="form-control"  name="customerId" placeholder="enter customerId"   value={this.state.customerId} onChange={this.changeHandler} />
            </div>
            <div className="form-group">
              <label><h6>VegetableId</h6></label>
              <input type="number" className="form-control"  name="vegetableId" placeholder="enter vegetableId"   value={this.state.vegetableId} onChange={this.changeHandler} />
            </div>
            
            <div className="form-group">
              <label><h6>quantity</h6></label>
              <input type="number" className="form-control"  name="quantity" placeholder="enter quantity"   value={this.state.quantity} onChange={this.changeHandler} />
            <p style={{color:"red"}}>{errors.quantity}</p></div>
            <div className="form-group">
              <label><h6>Amount</h6></label>
              <input type="number" className="form-control"  name="amount" placeholder="enter amount"   value={this.state.amount} onChange={this.changeHandler} />
            </div>
            <div className="form-group">
              <label><h6>status</h6></label>
              <input type="text" className="form-control"  name="status" placeholder="enter status"   value={this.state.status} onChange={this.changeHandler} />
            </div>


            
            

    
              <button type="submit" className="btn btn-success" onClick={this.saveOrder}>Checkout</button>
          </form>
        </div>

        
        </div>
        
    )
}

}