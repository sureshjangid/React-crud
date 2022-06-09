import React, { useEffect, useState } from 'react'
import Axios  from 'axios'
import { useParams } from 'react-router-dom'

export const ViewUser = () => {
    let {id} = useParams();
    const [user, setuser] = useState({
        name:"",
        email:"",
        phone:"",
        website:"",
    });

    let {name,email,phone,website} = user;
    useEffect(()=>{
        loadUser();
    },[]);
    let loadUser = async()=>{
        let result = await Axios.get(`http://127.0.0.1:8000/api/viewData/${id}`);
        setuser(result.data);
    }
  return (
    <>

    <h4>{name}</h4>
    <h4>{email}</h4>
    <h4>{phone}</h4>
    <h4>{website}</h4>

    </>
  )
}
