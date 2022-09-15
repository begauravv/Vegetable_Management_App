import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import CustomerService from '../../services/CustomerService'

export default class ViewUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             customers : []
        }
    }
    componentDidMount(){
        CustomerService.getallCustomers().then((res)=>{
            this.setState({customers:res.data})
        });
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
                
            </nav>  <br/>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        <th>Customer First Name</th>
                        <th>Customer Last Name</th>
                        <th>Customer Date of Birth</th>
                        <th>Gender</th>
                        <th>Email Id</th>
                        <th>Address</th>
                        <th>Username</th>
                        <th>Balance</th>
                        {/* <th>Role</th>  */}
                    </tr>
                </thead>
            <tbody>
                {
                    this.state.customers.map((customer) =>
                        <tr key={customer.id}>
                            <td>{customer.customerId}</td> 
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.dob}</td> 
                            <td>{customer.gender}</td>
                            <td>{customer.email}</td>
                            <td>{customer.address}</td> 
                            <td>{customer.userName}</td>
                            <td>{customer.balance}</td>
                        </tr>
                     )
                 }
            </tbody>
        </table>

            </div>
        )
    }
}
