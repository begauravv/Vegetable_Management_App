import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import VegetableService from '../../services/VegetableService'

export default class GetVegetables extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             vegetables :[]
        }
        this.editpayment = this.editpayment.bind(this);
    }

editpayment(vegetableId){
    this.props.history.push(`/payment/${vegetableId}`)
}
    componentDidMount(){
        VegetableService.getallvegetables().then((res)=>{
            this.setState({vegetables:res.data})
        })
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-light" style={{backgroundColor:"red"}}>
                <span className="navbar-brand mb-0 h1"><h4>User Portal</h4></span>
            
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item5 active">
                        <Link className="nav-link" to="/getvaccantroom" style={{color:"black"}}><h6>BookRoom</h6></Link>
                    </li>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item6 active">
                        <Link className="nav-link" to="/viewImages" style={{color:"black"}}><h6>ViewImages</h6></Link>
                    </li>
                </ul>
                 <ul className="navbar-nav mr-auto">
                    <li className="nav-item7 active">
                        <Link className="nav-link" to="/" style={{color:"black"}}><h6>Logout</h6></Link>
                    </li>
                </ul> 
            </nav>  <br/>

    <div className="card-body">
 <table className="table table-striped table-bordered">
  <thead>
    <tr>

      <th >vegetableId</th>
      <th >vegetableName</th> 
      <th >vegetablePrice</th>
      <th >vegetableCategory</th>
      <th>vegetableDescription</th>
      <th></th>
     </tr>
  </thead>
  <tbody>
      {
          this.state.vegetables.map((vegetable) =>
              <tr key={vegetable.vegetableId}>
                   <td>{vegetable.vegetableId}</td> 
                  <td>{vegetable.vegetableName}</td>
                  <td>{vegetable.vegetablePrice}</td>
                  <td>{vegetable.vegetableCategory}</td>
                  <td>{vegetable.vegetableDescription}</td>
                  <td>
                      <button onClick={()=> this.editpayment(vegetable.vegetableId)} className="btn btn-primary">Book Now</button>
                      </td>
              </tr>
              
          )
      }
      
  </tbody>

                    </table>
                    </div>
            </div>
        )
    }
}
