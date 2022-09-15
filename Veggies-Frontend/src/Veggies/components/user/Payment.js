import React, { Component } from 'react'
import {Link}  from 'react-router-dom';
import PaymentService from '../../services/PaymentService';

export default class Payment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            orderId:'',
            errors:{
            cardNumber:'',
            cvv:''
        }
        }
        
        // this.changeCvvHandler = this.changeCvvHandler.bind(this)
        // this.changecardNumberHandler = this.changecardNumberHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        this.payment = this.payment.bind(this)

    }
    payment=(e)=>{
        e.preventDefault()
        let payment = {orderId:this.state.orderId,
            
            cardNumber:this.state.cardNumber,
            cvv:this.state.cvv
            
        }
        console.log('payment =>' +JSON.stringify(payment));
        PaymentService.addpayment(payment).then(res =>{
          alert("Your payment is Succesfull")
          this.props.history.push('/adminhome');
        })
      }
    
      // changecardNumberHandler =(event) =>{
      //   this.setState({cardNumber:event.target.value})
      // }
      // changeCvvHandler=(event)=>{
      //   this.setState({cvv:event.target.value})
     // }


     changeHandler =(event)=>{
      let name =event.target.name;
      let value = event.target.value;
      let errors = this.state.errors;
  
  switch(name){
   
    
      case "cardNumber":errors.cardNumber =value.length !=16 ? "Invalid card Number" : "";  
      break;
     
      case "cvv":errors.cvv =value.length !=3 ? "Invalid cvv" : "";  
      break;
   
      default: break;
  }
  console.log(this.state)
  this.setState({errors,[name]:value});
  }

  


    render() {
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
                        <Link class="nav-link" to="/userhome" style={{color:"lightgreen"}}><h6>Logout</h6></Link>
                    </li>
                </ul>
                
            </nav>
                     <form>
                     <div class="form-group">
                    <label style={{color:"black"}}>OrderId</label>
                    <input type="number" class="form-control"  name="orderId"  value={this.state.orderId} onChange={this.changeHandler}/>
                  </div>
                  
                  <div class="form-group">
                    <label style={{color:"black"}}>Card Number</label>
                    <input type="number" class="form-control"  name="cardNumber"  value={this.state.cardNumber} onChange={this.changeHandler}/>
                    <p style={{color:"red"}}>{errors.cardNumber}</p>
                    </div>

                  <div class="form-group">
                    <label style={{color:"black"}}>CVV</label>
                    <input type="password" class="form-control"  name="cvv"  value={this.state.cvv} onChange={this.changeHandler}/>
                    <p style={{color:"red"}}>{errors.cvv}</p>
                    </div>
                  <button type="submit" class="btn btn-dark" onClick={this.payment}>Make Payment</button>
                     </form>
                
            </div>
        )
    }
}
