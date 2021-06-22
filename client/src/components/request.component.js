import React, { Component } from "react";
import axios from "axios";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

export default class CreateClient extends Component {
  constructor(props) {
    super(props);

    this.onChangeClientname = this.onChangeClientname.bind(this);
    this.onChangeClientcontact= this.onChangeClientcontact.bind(this);
    this.onChangeClientaddress = this.onChangeClientaddress.bind(this);
    this.onChangeClientsell=this.onChangeClientsell.bind(this);
    this.onChangeClientmode = this.onChangeClientmode.bind(this);
    this.onChangeClientBuy=this.onChangeClientBuy.bind(this);
    this.onChangeClient_clients=this.onChangeClient_clients.bind(this);
    this.onChangeClientemailaddress=this.onChangeClientemailaddress.bind(this);
    this.onChangeClientimageurl=this.onChangeClientimageurl.bind(this);
    this.onChangeClientbio=this.onChangeClientbio.bind(this);
    this.onChangeprd=this.onChangeprd.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      clientname: "",
      clientcontact: "",
      clientaddress:"",
      clientmode:"seller",
      clientsell:0,
      clientBuy:0,
      client_clients:0,
      clientemailaddress:"",
      clientimageurl:"",
      clientbio:"",
      clients: [],
      prd:"",
    };
  }

  componentDidMount() {
    
  }

  




//
onChangeClientmode(e) {
  this.setState({
    clientmode: e.target.value,
  });
}

  onChangeClient_clients(e) {
    this.setState({
      client_clients: e.target.value,
    });
  }
  onChangeClientBuy(e) {
    this.setState({
      clientBuy: e.target.value,
    });
  }
  onChangeClientsell(e) {
    this.setState({
      clientsell: e.target.value,
    });
  }






  //
  onChangeClientname(e) {
    this.setState({
      clientname: e.target.value,
    });
  }


  onChangeClientcontact(e) {
    this.setState({
      clientcontact: e.target.value,
    });
  }
  onChangeprd(e) {
    this.setState({
      prd: e.target.value,
    });
  }



  onChangeClientaddress(e) {
    this.setState({
      clientaddress: e.target.value,
    });
  }



 
  onChangeClientbio(e) {
    this.setState({
      clientbio: e.target.value,
    });
  }
  onChangeClientimageurl(e) {
    this.setState({
      clientimageurl: e.target.value,
    });
  }
  onChangeClientemailaddress(e) {
    this.setState({
      clientemailaddress: e.target.value,
    });
  }


  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      clientname:this.state.clientname,
      clientcontact:this.state.clientcontact,
      clientaddress:this.state.clientaddress,
      clientmode:this.state.clientmode,
      clientsell:0,
      clientBuy:this.state.clientBuy,
      client_clients:0,
      clientemailaddress:this.state.clientemailaddress,
      clientimageurl:this.state.clientimageurl,
      clientbio:this.state.clientbio,
      prd:this.state.prd
     
    };

    alert(this.state.clientbio);

    axios
     .post("/request/add", exercise)
      .then((res) =>{ alert("added");});

   // window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Send Your Application</h3>
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
            <label>Contact: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.clientcontact}
              onChange={this.onChangeClientcontact}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              required
              className="form-control"
              value={ this.state.clientemailaddress}
              onChange={this.onChangeClientemailaddress}
            />
          </div>
          <div className="form-group">
            <label>Permenent Address: </label>
            <input
              type="text"
              required
              className="form-control"
              value={ this.state.clientaddress}
              onChange={this.onChangeClientaddress}
            />
          </div>
          <div className="form-group">
            <label>Join as: </label>
            <select
              type="text"
              
              className="form-control"
              value={ this.state.clientmode}
              onChange={this.onChangeClientmode}
            >
<option value="seller">Seller</option>
<option value="Trusty">Trusty</option>
<option value="Support">Support</option>
<option value="Dealer">Dealer</option>

<option value="SiteRequest">Site Request</option>
<option value="addrequest">ad Request</option>

              </select>
          </div>


          <div className="form-group">
            <label>Items needed  </label>
            <input
              type="text"
              required
              className="form-control"
              value={ this.state.clientBuy}
              onChange={this.onChangeClientBuy}
            />
          </div>


          <div className="form-group">
            <label>profile image url  </label>
            <input
              type="text"
              required
              className="form-control"
              value={ this.state.clientimageurl}
              onChange={this.onChangeClientimageurl}
            />
          </div>

          <div className="form-group">
            <label>your bio and Website </label>
            <input
              type="text"
              required
              className="form-control"
              value={ this.state.clientbio}
              onChange={this.onChangeClientbio}
            />
          </div>
        
          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
 