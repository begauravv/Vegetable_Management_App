import React from 'react'
import './AdminHome.css';

import {Link} from 'react-router-dom' 
import Images from 'D:/samplereactcodes/Vegetable-store/src/Veggies/Images/Background.jpg';


export default function AdminHome() {
    return (
        <div>
             <nav class="navbar navbar-light" style={{backgroundColor:"grey"}}>
                <span class="navbar-brand mb-0 h1"style={{color:"lightyellow"}}><h4>&nbsp;VeGGies Store</h4></span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/adminhome" style={{color:"lightyellow"}}><h6>Home</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                       <Link class="nav-link" to="/viewallvegetables" style={{color:"lightyellow"}}><h6>View Vegetables</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/viewcustomer" style={{color:"lightyellow"}}><h6>View Customer</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item4 active">
                        <Link class="nav-link" to="/" style={{color:"lightyellow"}}><h6>Logout</h6></Link>
                    </li>
                </ul>
                
            </nav>
            <div style={{backgroundImage:`url(${Images})`,height:800,backgroundSize:1400}}> 
            <br></br><br></br> 
            <span class="navbar-brand mb-0 h1"style={{color:"lightyellow"}}>
            <h1><screenLeft><b><i>  Welcome To  VeGGies 
        <br></br>         Store&#x1F344;&#x1F345;&#x1F346; </i></b></screenLeft></h1></span>
        
   
   
  </div> 
 </div> 
    )
}

