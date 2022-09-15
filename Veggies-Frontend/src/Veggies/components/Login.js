import React, { Component } from 'react'
import './Login.css'
import {Link} from 'react-router-dom';
import CustomerService from '../services/CustomerService';


export default class Login extends Component {
    constructor(props){
    super(props);
    
    this.state = {
        //role : '',
        user:[],
        customerId:'',
        email:'',
        password:'',
         a:''
        }
   
  // this.changeRole = this.changeRole.bind(this);
    this.changeEmail= this.changeEmail.bind(this);
   this.changePassword= this.changePassword.bind(this);
//    this.changeHandler =this.changeHandler.bind(this);
 }


// changeRole =(event)=>{
//    this.setState({role:event.target.value})
// }

changeEmail =(event)=>{
     this.setState({ email:event.target.value})
}
changePassword= (event)=>{
     this.setState({ password:event.target.value})
    
}
//first code
// checkRole=(e)=>{
//    e.preventDefault()
//    let role = {role:this.state.role}
//    console.log('role =>' +JSON.stringify(role));
//    if(this.state.role === "admin" && this.state.emailId === "admin1@hbms.com" && this.state.password === "admin123")
//     {
//        this.props.history.push("/adminhome")
//     }
//   else  if(this.state.role === "admin" && this.state.emailId === "admin2@hbms.com" && this.state.password === "admin456")
//     {
//        this.props.history.push("/adminhome")
//     }
//     else if(this.state.role === "user" && this.state.emailId === "madhu@gmail.com" && this.state.password === "madhu123" )
//     {
//         this.props.history.push("/book")
//     }
   
//     else if(this.state.role === "user" && this.state.emailId === "sowju@gmail.com" && this.state.password === "sowju123" )
//     {
//         this.props.history.push("/book")
//     }
//     else if(this.state.role === "user" && this.state.emailId === "thanu@gmail.com" && this.state.password === "thanu123" )
//     {
//         this.props.history.push("/book")
//     }
//     else if(this.state.role === "user" && this.state.emailId === "dhanu@gmail.com" && this.state.password === "dhanu123" )
//     {
//         this.props.history.push("/book")
//     }

//     else{
//         alert("invalid user")
//     }
// }



//second

componentDidMount(){
    let register = {userId:this.state.customerId,userName:this.state.userName ,email:this.state.email,password:this.state.password}
    console.log(this.state.customerId)
    console.log('register =>' +JSON.stringify(register));
    CustomerService.getallCustomers().then((res) => {
        this.setState({ user: res.data});
          this.state.a = (res.data);
          console.log(this.state.a);
           
    });
  }
checkRole=(e)=>{
    e.preventDefault()

    for(let i=0;i<this.state.a.length;i++){
    //console.log(this.state.a[i].emailId);
    if( this.state.email === "admin@veggies.com" && this.state.password === "admin@123")
    {
       //alert("Login succesfully");
        this.props.history.push("/adminhome")
     }
        
      else if((this.state.email===this.state.a[i].email)&&(this.state.password===this.state.a[i].password))
      {
          // this.message="login";
          // console.log(this.message)
          alert("Login succesfully");
          this.props.history.push("/userhome")
      }
          else{
            //   alert("Inavlid user");
              alert("Invalid Credentials");
              
          }

    }
}

render(){
    return (
        <div>
            <nav className="navbar navbar-light" style={{backgroundColor:"grey"}}>
                <span className="navbar-brand mb-0 h1"style={{color:"lightgreen"}}><h4>VeGGies Store</h4></span>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item1 active">
                        <Link className="nav-link" to="/" style={{color:"lightgreen"}}><h6>Home</h6></Link>
                    </li>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item2 active">
                        <Link className="nav-link" to="/services" style={{color:"lightgreen"}}><h6>AboutUs</h6></Link>
                    </li>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item3 active">
                        <Link className="nav-link" to="/register" style={{color:"lightgreen"}}><h6>Register</h6></Link>
                    </li>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item4 active">
                        <Link className="nav-link" to="/login" style={{color:"lightgreen"}}><h6>Login</h6></Link>
                    </li>
                </ul>
            </nav>
            <div style={{backgroundImage:"url(https://thumbs.dreamstime.com/b/shabby-wood-texture-vintage-wooden-fence-desk-surface-natural-color-weathered-timber-background-brown-old-wood-planks-shabby-wood-158067569.jpg)", height:700,backgroundSize:1500}}><br/>
            <h2 style={{textAlign:"center",color:"lightgreen"}}>Login Here&#x1F447;</h2>
            
            <form>
            <div className="form-group">
              <label style={{color:"black"}}><h6>Email address</h6></label>

              <input type="email"  id="email" className="form-control" name = "email" placeholder="example@gmail.com" value={this.state.email} onChange={this.changeEmail}/>
            </div><br/>
            <div className="form-group">
              <label style={{color:"black"}}><h6>Password</h6></label>
              <input type="password" className="form-control" placeholder="enter password" name="pasword1" value={this.state.password} onChange={this.changePassword} />
              
            {/* <p>{errors.password}</p> */}
            </div><br/>

            {/* <div className="form-group">
              <label style={{color:"black"}}>Role</label>
              <input type="text" className="form-control" name="role" placeholder="enter role" value={this.state.role} onChange={this.changeRole}/>
            </div> */}

            {/* <div className="form-group">
                <label><h6>Role</h6></label>
                <select name="role" className="form-control" value={this.state.role} onChange={this.changeRole}>
                <option>choose...</option>
                <option>user</option>
                <option>admin</option>
                </select>
            </div> */}
            
            <button type="submit" className="btn btn-success" onClick={this.checkRole}>Login</button><br/>
            <Link to="/register">If  you are new user please register</Link>
             </form>
        </div>
        </div>
    )
}

}