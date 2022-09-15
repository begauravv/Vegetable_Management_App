import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import VegetableService from '../services/VegetableService'


export default class Vegetable extends Component{

    
    constructor(props) {
        super(props)
    
        this.state = {
             vegetables : []
        }
        this.addorder = this.addorder.bind(this);
    }

    addorder(vegetableId){
        this.props.history.push(`/order`)
    }
    componentDidMount(){
        VegetableService.getallvegetables().then((res)=>{
            this.setState({vegetables:res.data})
        });
    }
    
    
    render() {    
         
        const vegetableList = this.state.vegetables.map(vegetable => {
            
                return (


                    
                         
                    
                    <div className="card m-4 " style={{width: 350, height: "fit-content"}}>
                        
                            <div className="card-header">
                                <h5>Vegetable {vegetable.vegetableId}</h5>
                            </div>
                            
                            <div className="card-body">
                            <div className="row mb-2">   
                                <img src={vegetable.url} class="card-img-top img-fluid" alt="loading" />
                                
                            </div>
                            <div className="row mb-2">
                                <div className="col fw-bold">Name</div>
                                <div className="col">{vegetable.vegetableName}</div>
                            </div>
                            <div className="row mb-2">
                                <div className="col fw-bold">Price per Kg.</div>
                                <div className="col">{vegetable.vegetablePrice}</div>
                            </div>
                            <div className="row mb-2">
                                <div className="col fw-bold">Category</div>
                                <div className="col">{vegetable.vegetableCategory}</div>
                            </div>  
                            <div className="row mb-2">
                                <div className="col fw-bold">Description</div>
                                <div className="col">{vegetable.vegetableDescription}</div>
                            </div>
                            
                            <br/>
                            <button class="btn btn-success" onClick={()=> this.addorder(vegetable.vegetableId)}>
                            Buy Now</button>
                            </div>
                            
                      </div>

                  
                    
                )
            });
    
            return (
            <div>
                
            <nav class="navbar navbar-light" style={{backgroundColor:"grey"}}>
                        <span class="navbar-brand mb-0 h1"style={{color:"lightyellow"}}><h4>&nbsp;VeGGies Store</h4></span>
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item1 active">
                                <Link class="nav-link" to="/userhome" style={{color:"lightyellow"}}><h6>Home</h6></Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item2 active">
                               <Link class="nav-link" to="/products" style={{color:"lightyellow"}}><h6>Products</h6></Link>
                            </li>
                        </ul>
                        
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item4 active">
                                <Link class="nav-link" to="/about" style={{color:"lightyellow"}}><h6>AboutUs</h6></Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item4 active">
                                <Link class="nav-link" to="/" style={{color:"lightyellow"}}><h6>Logout</h6></Link>
                            </li>
                        </ul>
        
                    </nav>
            
                <div style={{overflow: 'hidden', height: '20000px'}}>
                <div className="pt-5">
                <div className="pt-3"  style={styling.wrapper}>
                {vegetableList}
                </div>
            </div>
            </div>  
            </div>
                    
                
                
            );
    
}
}
let styling = { 
    wrapper : {
        height: "700px",
        display : "flex", 
        flexWrap: "wrap", 
        justifyContent: "center"
    }
}

   

   