import React from 'react';
import'./Service.css'
import {Link} from 'react-router-dom' 


export default function Services() {
    return (
        <div>
<nav class="navbar navbar-light" style={{backgroundColor:"grey"}}>
                <span class="navbar-brand mb-0 h1"style={{color:"lightyellow"}}><h4>VeGGies Store</h4></span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/" style={{color:"lightyellow"}}><h6>Home</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/services" style={{color:"lightyellow"}}><h6>AboutUs</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/register" style={{color:"lightyellow"}}><h6>Register</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item4 active">
                        <Link class="nav-link" to="/login" style={{color:"lightyellow"}}><h6>Login</h6></Link>
                    </li>
                </ul>
            </nav>
        <div style={{backgroundImage:"url(https://media.istockphoto.com/photos/frame-of-fresh-organic-vegetables-with-spices-and-oil-picture-id1191634648?k=20&m=1191634648&s=612x612&w=0&h=Rx4OI2QbQQtRWkEpgGuGexWbWWrr3k0o7tHHFGMZ4T0=)",height:"650px",backgroundSize:1400}}>
           
           
            <br></br><h2 style={{textAlign:"center",color:"black"}}> About Us</h2><br></br><br></br>


   

<div className="card-deck" >

  <div className="card text-white bg-warning mb-3">
    <div className="card-body"style={{color:"black"}}>
      <h5 className="card-title"> <i className="fa fa-handshake" aria-hidden="true"> &nbsp;<u>Customer </u></i> </h5>
      <p className="card-text">Customer service representatives listen to customer concerns, answer customer questions and provide information about the company's products and services.</p>
      
    </div>
  </div>

  <div className=" card text-white bg-warning mb-3">
    
    <div className="card-body"  style={{color:"black"}}>
      <h5 className="card-title"> <i className="fa fa-cart-arrow-down" aria-hidden="true">&nbsp;<u>Product & </u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>Purchase</u> </i> </h5>
      <p className="card-text"> The marketing copy that explains what a product is and why it's worth purchasing. The purpose is to supply customers with benefits</p>
      
    </div>
  </div>

  <div className="card text-white bg-warning mb-3">

    <div className="card-body"style={{color:"black"}}>
      <h5 className="card-title"> <i className="fa fa-truck" aria-hidden="true">&nbsp;&nbsp;<u>Delivery </u></i></h5>
      <p className="card-text">Delivers high-quality products to our customers in a safe, courteous, and timely manner. Establishes and maintains outstanding relations with customers.</p>
      
    </div>
  </div>
  

  <div className="card text-white bg-warning mb-3">
    <div className="card-body"style={{color:"black"}}>
      <h5 className="card-title"> <i className="fa fa-phone" aria-hidden="true" >&nbsp;&nbsp;<u>Phone </u></i></h5>
      <p className="card-text"><b>9876543210</b><br></br></p>
      <h5 className="card-title"> <i className="fa fa-envelope" aria-hidden="true" >&nbsp;&nbsp;<u>E-Mail </u></i></h5>
      <p className="card-text"><b>VeGGies-Store@yahoo.com</b><br></br></p>
      <h5 className="card-title"> <i className="fa fa-address-book" aria-hidden="true" >&nbsp;&nbsp;<u>Address </u></i></h5>
      <p className="card-text"><b>5/12,indra street,<br></br>DELHI-635263</b><br></br></p>
    </div>
  </div> 
</div>
</div>
</div> 
    )
}
