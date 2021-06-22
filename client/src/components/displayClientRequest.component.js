import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
/*
 <tr>
          <td>{currentexercise["clientname"]}</td>
          <td>{currentexercise["clientname"]}</td>
          <td>{currentexercise["clientname"]}</td>
          <td>{currentexercise["clientname"]}</td>
          <td>{currentexercise["clientname"]}</td>
          <td>{currentexercise["clientname"]}</td>
          <td>{currentexercise["clientname"]}</td>
          <td>{currentexercise["clientname"]}</td>
          <td>{currentexercise["clientname"]}</td>
          </tr>
*/


export default class Cl_pend_req extends Component {
  constructor(props) {
    super(props);

    

    this.state = {
     admin:false,cln:"",ps:"" , exercises: [] };
    this.onChangeprd=this.onChangeprd.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeClientname = this.onChangeClientname.bind(this);
  }

  componentDidMount() {
    axios
      .get("/request/")
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

 
  onChangeprd(e) {
    this.setState({
      ps: e.target.value,
    });
  }
  onChangeClientname(e) {
    this.setState({
      cln: e.target.value,
    });
  }
  onSubmit(e) {
    
    if(this.state.cln=="admin" & this.state.ps=="admin" ){
      this.setState({
       admin:true
      }
      )
      alert("verified");
    }
    else{
      alert("re-enter password");
    }
  }
  render() {
    {

    if(this.state.admin==false){return(  <div>
      <h3>login</h3>
      <form onSubmit={this.onSubmit}>
       
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            required
            className="form-control"
            value={this.state.clientname}
            onChange={this.onChangeClientname}
          />
        </div>
  
  
        <div className="form-group">
          <label>password </label>
          <input
            type="text"
            required
            className="form-control"
            value={this.state.prd}
            onChange={this.onChangeprd}
          />
        </div>
        <div className="form-group">
              <input
                type="submit"
                value="Login"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
    )
    }
  }
    //if(this.state.admin==true){
    return (
      <div>
        <h3>Pending Clients requests</h3>
        <table className="table" border="2" height="100%" width="100%">
         
         <tr>
              <th>clientname</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Join as</th>
             
              <th>Email</th>
              <th>Profile image</th>
              <th>About</th>
              <th>Call</th>
              <th>Mail</th>
           
              </tr>

              {this.state.exercises.map((ce)=>
<tr>
<td>
           {ce["clientname"]}   
</td>
<td>
           {ce["clientcontact"]}   
</td>
<td>
           {ce["clientaddress"]}   
</td>
<td>
           {ce["clientmode"]}   
</td><td>
           {ce["clientemailaddress"]}   
</td><td>
           {ce["clientimageurl"]}   
</td><td>
           {ce["clientbio"]}   
</td>
<td>
           <a href={"tel:"+ce["clientcontact"]} >call </a> 
</td>
<td>
<a   href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to="+ce["clientemailaddress"]} target="_blank">Mail</a>
</td>
</tr>
              )}

              <tr>
             
           
              </tr>
           
        
          
        </table>
      
       
      </div>
    );
 // }


  
}
}
