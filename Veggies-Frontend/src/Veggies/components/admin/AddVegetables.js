import React, { Component } from "react";
import VegetableService from "../../services/VegetableService";
import {Link} from 'react-router-dom' 
import "./AddVegetable.css";


export default class AddVegetables extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vegetableId:this.props.match.params.vegetableId,
            vegetableName:undefined,
            vegetablePrice:undefined,
            vegetableCategory:undefined,
            vegetableDescription:undefined,
            url:undefined
       }
       this.changeVegetableNameHandler = this.changeVegetableNameHandler.bind(this);
       this.changeVegetablePriceHandler = this.changeVegetablePriceHandler.bind(this); 
       this.changeVegetableCategoryHandler = this.changeVegetableCategoryHandler.bind(this);
       this.changeVegetableDescriptionHandler = this.changeVegetableDescriptionHandler.bind(this);
       this.changeUrlHandler = this.changeUrlHandler.bind(this);
       this.editVegetable= this.editVegetable.bind(this);
    } 
    componentDidMount(){
        if(this.state.vegetableId == -1){
            return
        }
        else{
            VegetableService.getvegetablebyid(this.state.vegetableId).then(
                (response)  =>{
                    let vegetable = response.data;
                    this.setState({vegetableName:vegetable.vegetableName,
                        vegetablePrice:vegetable.vegetablePrice,
                        vegetableCategory:vegetable.vegetableCategory,
                        vegetableDescription:vegetable.vegetableDescription,
                        url:vegetable.url
                }
            );
        }
            );
    }
}
    cancel=(e)=>{
        e.preventDefault()
        this.props.history.push('/viewallvegetables')
    }
    editVegetable=(e)=>{
        e.preventDefault()
        let vegetable= {
            vegetableName:this.state.vegetableName,vegetablePrice:this.state.vegetablePrice,vegetableCategory:this.state.vegetableCategory,vegetableDescription:this.state.vegetableDescription,url:this.state.url
            
        }
        console.log("vegetable => " + JSON.stringify(vegetable));

        if(this.state.vegetableId == -1){
            VegetableService.addvegetable(vegetable).then(res=>{
              this.props.history.push('/viewallvegetables')
            })
            
        }
        else {
            console.log(this.state.vegetableId)
            VegetableService.updatevegetable(vegetable,this.state.vegetableId).then(res=>{
                    this.props.history.push('/viewallvegetables')
                    alert("updated successfully")

                
            })
        }
        
        
        
}


//for only adding 
    // saveroom=(e)=>{
    //     e.preventDefault()
             
    //          let rooms ={roomType:this.state.roomType, roomCost:this.state.roomCost, isOccuiped:this.state.isOccuiped  }
    //     console.log('rooms =>' +JSON.stringify(rooms));
    //     RoomServices.addroom(rooms).then(res=>{
    //         this.props.history.push('/viewroom')
    //     })
    //}
    changeVegetableNameHandler =(event)=>{
        this.setState({vegetableName:event.target.value})
    }
    changeVegetablePriceHandler=(event)=>{
        this.setState({vegetablePrice:event.target.value})
    }
    changeVegetableCategoryHandler =(event)=>{
        this.setState({vegetableCategory:event.target.value})
    }
    changeVegetableDescriptionHandler =(event)=>{
        this.setState({vegetableDescription:event.target.value})
    }
    changeUrlHandler =(event)=>{
        this.setState({url:event.target.value})
    }

    getTitle(){
        if(this.state.vegetableId == -1){
            return <h2 style={{color:"yellow"}} className="text-center">Add Vegetable </h2>
        }
        else{
            return <h2 style={{color:"yellow"}} className="text-center">Update Vegetable</h2>
        }
    }
    
    render() {
        return (

            
            <div style={{backgroundImage:"url(https://images.wallpaperscraft.com/image/bed_balcony_table_chairs_view_hotel_room_39688_1920x1200.jpg)",height:700,backgroundSize:1400}}>
                 {/* <h2 id="home">Add Form</h2> */}

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
                 
                 <div>
                        {
                            this.getTitle()
                        }
                    </div>
                    <form >
                   <div className="form-group">
                    <label style={{color:"black"}}>Vegetable Name</label>
                    <input type="text" className="form-control"  name="vegetableName"  value={this.state.vegetableName} onChange={this.changeVegetableNameHandler}/>
                  </div>

                  <div className="form-group">
                    <label style={{color:"black"}}>Vegetable Image url</label>
                    <input type="url" className="form-control"  name="url"  value={this.state.url} onChange={this.changeUrlHandler}/>
                  </div>

                  <div className="form-group">
                    <label style={{color:"black"}}>Vegetable Price</label>
                    <input type="number" className="form-control"  name="vegetablePrice"  value={this.state.vegetablePrice} onChange={this.changeVegetablePriceHandler}/>
                  </div>

                  <div className="form-group">
                    <label style={{color:"black"}}>Vegetable Category</label>
                    <input type="text" className="form-control"  name="vegetableCategory"  value={this.state.vegetableCategory} onChange={this.changeVegetableCategoryHandler}/>
                  </div>
                  <div className="form-group">
                    <label style={{color:"black"}}>Vegetable Description</label>
                    <input type="text" className="form-control"  name="vegetableDescription"  value={this.state.vegetableDescription} onChange={this.changeVegetableDescriptionHandler}/>
                  </div>

                  {/* <button type="submit" className="btn btn-dark" onClick={this.saveroom.bind(this)}>Save</button> */}
                  
                  
                  <button type="submit" class="btn btn-primary" onClick={this.editVegetable}>Save</button>
                <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft:"20px"}}> Cancel</button>
                  </form>
            </div>
        )
    }
}