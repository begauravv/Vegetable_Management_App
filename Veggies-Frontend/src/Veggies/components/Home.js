import React from 'react'
import './Home.css';
// import { FaHome,FaRegistered} from 'react-icons/fa'
// import {FcServices} from 'react-icons/fc'
import {Link} from 'react-router-dom' 
import Images from '../Images/Background.jpg';


export default function Home() {
    return (
        <div>
             <nav class="navbar navbar-light" style={{backgroundColor:"grey"}}>
                <span class="navbar-brand mb-0 h1"style={{color:"lightyellow"}}><h4>&nbsp;VeGGies Store</h4></span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/" style={{color:"lightyellow"}}><h6>Home</h6></Link>
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
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item4 active">
                        <Link class="nav-link" to="/services" style={{color:"lightyellow"}}><h6>AboutUs</h6></Link>
                    </li>
                </ul>
            </nav>
            <div style={{backgroundImage:`url(${Images})`,height:800,backgroundSize:1400}}> 
            <br></br><br></br> 
            <span class="navbar-brand mb-0 h1"style={{color:"lightyellow"}}>
            <h1><screenLeft><b><i>  Welcome To  VeGGies 
        <br></br>         Store&#x1F344;&#x1F345;&#x1F346; </i></b></screenLeft></h1></span>
        
   {/* <img src="https://cdn.pixabay.com/photo/2019/07/23/09/49/hotel-4357159_960_720.jpg" class="" alt="..."  width="1350px" height="800px" />  */}
   
  </div> 
 </div> 
    )
}

