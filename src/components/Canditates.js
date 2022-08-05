import React, { Component } from "react";
//import axios from "axios";
import API from '../api'
import { Link } from "react-router-dom";
import { getUser } from '../actions/conditates';
import { connect } from 'react-redux'

 class Canditates extends Component {
 
  state = { value: "", error: null };
  changeValue=(e) => {
    this.setState({value:e.target.value})
  } 
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const viewData =
      
          <table className="table" >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">E mail</th>
                <th scope="col">Phone</th>
                <th scope="col">Detail</th>
              </tr>
            </thead>
            <tbody>
        {this.props.data.length > 0
          ? this.props.data?.filter(f =>f.name.includes(this.state.value)).map((person) => (
              <tr key={person.id}>
                <th scope="row">{person.id}</th>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td> {person.phone}</td>
                <td> <Link to={`/candidates/${person.name}`}>UserDetail</Link></td>
              </tr>
              
          
            ))
          : "No data..."}
           </tbody>
          </table>
          
     
   console.log(this.state.value)
    return (
      <div  className="App bg-success p-2 text-dark bg-opacity-25">
        <Link to="/">HomePage</Link> | {''}
        
       <hr/>
        PersonList
     <hr/>
        <input placeholder="Filtreleyin..." value={this.state.value} onChange={(e)=>this.changeValue(e)} type="text"></input>
        {this.state.error === null
        ? viewData
    : <h5 style={{"color":"red"}}>Error in API Call</h5>}
           </div>
    );
  }
}

const mapStateToProps = (state) => ({data:state})

const mapDispatchToProps = {getUser}

export default connect(mapStateToProps, mapDispatchToProps)(Canditates)