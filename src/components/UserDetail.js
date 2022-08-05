import { useParams } from 'react-router-dom';
import React, { useEffect } from "react";
import { getUser } from '../actions/conditates';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

 const UserDetail = (props) => {
  const params = useParams()
  useEffect(() => {
    props.getUser();
  }, [] );
  console.log(params)
  console.log(props.state)

  return (
    <div>
    {
        props.state.filter(user => (
        user.name === params.candidatesname

      )).map((user)=>(
        <div key={user.id}> 
        <h3>User Name:{user.name}</h3>
        <h3>Phone Number{user.phone}</h3>
        <h3>E-mail:{user.email}</h3>
        <h3>Web Site:{user.website}</h3>
        </div>
      ))

      
      }<Link to="/candidates">Candidates</Link></div>
  )
}

const mapStateToProps = (state) => ({state:state})

const mapDispatchToProps = {getUser}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail)






