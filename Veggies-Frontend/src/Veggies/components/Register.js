import React,{Component} from 'react'
import DatePicker from 'react-datepicker'
import './Register.css'
import {Link} from 'react-router-dom'
import CustomerService from '../services/CustomerService'




export default class RegisterComponent extends Component {
  constructor(props){
    super(props)
    this.state={
      errors:{
      customerId:'',
      firstName:'',
      lastName:'',
      dob:undefined,
      gender:'',
      email:'',
      address:'',
      userName:'',
      password:'',
      balance:'',
     // role:''
    }
  }

    
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.changeHandler =this.changeHandler.bind(this);
  
  }

  
  changeHandler =(event)=>{
    let name =event.target.name;
    let value = event.target.value;
    let errors = this.state.errors;

switch(name){
  
    case "userName":errors.userName =value.length < 3 ? "Name is too short,please enter your Fullname" : "";  
    break;
    case "email":errors.email =value.length <5 ? " Invalid email":"";
    let apos = value.indexOf('@');
    let dotpos = value.lastIndexOf('.');

    if(apos < 1 || dotpos - apos <2){
      errors.email ="Please enter valid emailId";
    }
    break;
    case "password":errors.password =value.length < 8 ? "password should have minimum 8 characters" : "";  
    break;

    
    
    default: break;
}
console.log(this.state)
this.setState({errors,[name]:value});
}

  saveUser=(e)=>{
  e.preventDefault()
    let register = {
      
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      dob:this.state.dob,
      gender:this.state.gender,
      email:this.state.email,
      address:this.state.address,
      userName:this.state.userName,
      password:this.state.password,
      balance:this.state.balance,
      
      }
    
    console.log('register =>' +JSON.stringify(register));
    CustomerService.addCustomer(register).then(res =>{
      
        
      
        alert("You registered successfully")
        this.props.history.push("/login");
       })
  }


    changeAddressHandler =(event)=>{
    this.setState({address:event.target.value})
  }

  changeGenderHandler = (event)=>{
    this.setState({gender:event.target.value})
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
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/register" style={{color:"lightgreen"}}><h6>Register</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item4 active">
                        <Link class="nav-link" to="/login" style={{color:"lightgreen"}}><h6>Login</h6></Link>
                    </li>
                </ul>
            </nav>

            <div style={{backgroundImage:"url(https://thumbs.dreamstime.com/b/shabby-wood-texture-vintage-wooden-fence-desk-surface-natural-color-weathered-timber-background-brown-old-wood-planks-shabby-wood-158067569.jpg)",height:920,backgroundSize:1450}}>
            <h2 style={{textAlign:"center",color:"lightgreen"}}><br></br> Register Here&#x1F447;!!</h2>
            
            <form>
            <div className="form-group">
              <label><h6>First Name</h6></label>
              <input type="text" className="form-control"  name="firstName" placeholder="enter  your name"   value={this.state.firstName} onChange={this.changeHandler} />
            <p style={{color:"red"}}>{errors.firstName}</p></div>

            <div className="form-group">
              <label><h6>Last Name</h6></label>
              <input type="text" className="form-control"  name="lastName" placeholder="enter  your name"   value={this.state.lastName} onChange={this.changeHandler} />
            <p style={{color:"red"}}>{errors.lastName}</p></div>
            <div className="form-group">
              <label><h6>Dob</h6></label>
              <input type="date" className="form-control"  name="dob" placeholder="enter  your dob"   value={this.state.dob} onChange={this.changeHandler} />
            <p style={{color:"red"}}>{errors.dob}</p></div>
            

            <div className="form-group">
                    <label><h6>Gender</h6></label>
                  <select className="form-control" value={this.state.gender} onChange={this.changeGenderHandler}>
                  <option>Choose here</option>
                  <option>Female</option>
                  <option>Male</option>
                  </select>
                  </div>
            <div className="form-group">
              <label><h6>Email Id</h6></label>
              <input type="email" className="form-control" name="email" placeholder="example@gmail.com"   value={this.state.email} onChange={this.changeHandler}/>
           <p style={{color:"red"}}>{errors.email}</p> </div>

           <div className="form-group">
                    <label><h6>Addres</h6></label>
                    <input type="text" className="form-control"  name="address" placeholder="enter Address" value={this.state.address} onChange={this.changeAddressHandler}/>
                  </div>

            <div className="form-group">
              <label><h6>User Name</h6></label>
              <input type="text" className="form-control"  name="userName" placeholder="enter  your user name"   value={this.state.userName} onChange={this.changeHandler} />
            <p style={{color:"red"}}>{errors.userName}</p></div>        

            <div className="form-group">
              <label><h6>Password</h6></label>
              <input type="password" id ="password" className="form-control"  name="password" placeholder="enter password"  value={this.state.password} onChange={this.changeHandler}/>
              <p style={{color:"red"}}>{errors.password}</p> </div>

            <div className="form-group">
              <label><h6>Wallet Balance</h6></label>
              <input type="Number" className="form-control"  name="balance" placeholder="enter wallet balance" value={this.state.balance} onChange={this.changeHandler}/>
              <p style={{color:"red"}}>{errors.balance}</p></div>
            

    
              <button type="submit" className="btn btn-success" onClick={this.saveUser}>Register</button>
          </form>
        </div>

        
        </div>
        
    )
}

}