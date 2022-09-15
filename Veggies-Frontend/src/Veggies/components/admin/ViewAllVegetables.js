import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import VegetableService from '../../services/VegetableService'


export default class ViewAllVegetables extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             vegetables :[]
        }
        this.addVegetable =this.addVegetable.bind(this);
        this.editVegetable =this.editVegetable.bind(this);
        this.deleteVegetable=this.deleteVegetable.bind(this);
    }

    deleteVegetable(vegetableId){
        VegetableService.deletevegetable(vegetableId).then(res=>{
            this.setState({vegetables:this.state.vegetables.filter(vegetable =>vegetable.vegetableId !== vegetableId )})
        })
  }
    
    editVegetable(vegetableId){
        this.props.history.push(`/addvegetable/${vegetableId}`);
    }

    componentDidMount(){
        VegetableService.getallvegetables().then((res)=>{
            this.setState({vegetables:res.data})
        })
    }
    addVegetable(){
        this.props.history.push('/addvegetable/-1');
    }
    render() {
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
              <br/> 

             <button  onClick={this.addVegetable} className="btn btn-primary">Add Vegetable</button>
            <table className ="table table-striped">
  <thead>
    <tr>
      <th >VegetableId</th>
      <th>Vegetable Image</th>
      <th >VegetableName</th> 
      <th >VegetablePrice</th>
      <th>VegetableCategory</th>
      <th>vegetableDescription</th>
        <th>Actions</th>
    </tr>
  </thead>
  <tbody>
      {
          this.state.vegetables.map((vegetable) =>
              <tr key={vegetable.vegetableId}>
                   <td>{vegetable.vegetableId}</td>
                   <td><img src={vegetable.url} class="card-img-top img-fluid" alt="loading" /></td>
                  <td>{vegetable.vegetableName}</td>
                  <td>{vegetable.vegetablePrice}</td>
                  <td>{vegetable.vegetableCategory}</td>
                  <td>{vegetable.vegetableDescription}</td>
                  <td>
                      <button onClick ={ () => this.editVegetable(vegetable.vegetableId)} className = "btn btn-success">Update</button>
                      <button onClick={()=> this.deleteVegetable(vegetable.vegetableId)} className="btn btn-danger" style={{marginLeft:"20px"}} >Delete</button>
                  </td>
              </tr>
              
          )
      }
      
  </tbody>
     </table>
         
         </div>
        )
    }
}
