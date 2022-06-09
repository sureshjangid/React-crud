import React,{useEffect, useState} from 'react'
import Axios from "axios";
import { useHistory , useParams } from 'react-router-dom/';

export const EditUser = () => {
  let history = useHistory();
  let {id} = useParams();
    const [user, setuser] = useState({
   name:"",
   email :"",
   phone:"",
   website:"",
    })

    useEffect(()=>{
      loadUserData();
    },[]);
 let inputFiled  = (e)=>{
   setuser({...user,[e.target.name]:e.target.value});
 }
    let {name,email,phone,website} =user;

    let formSubmit = async (e)=>{
     try {
      e.preventDefault();
      await Axios.put(`http://127.0.0.1:8000/api/update/${id}`,user);
      history.push('/');
     } catch (error) {
       console.log(error);
     }
    }

    let loadUserData = async ()=>{

      try {
        let  result = await Axios.get(`http://127.0.0.1:8000/api/viewData/${id}`);
       setuser(result.data);

      } catch (error) {
      }
    }
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 mx-auto p-5 mt-5">
                <div className="card">
                    <div className="card-header">
                        <h1>Edit User</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={e=>formSubmit(e)}>
                            <input type="text"  name="name" value={name} onChange={e=>inputFiled(e)} className="form-control mb-3" placeholder="Name" />
                            <input type="email"  name="email" value={email} onChange={e=>inputFiled(e)} className="form-control mb-3" placeholder="Email" />
                            <input type="number"  name="phone" value={phone} onChange={e=>inputFiled(e)} className="form-control mb-3" placeholder="Phone" />
                            <input type="text"  name="website" value={website} onChange={e=>inputFiled(e)} className="form-control mb-3" placeholder="Website" />
                            <button className="btn btn-warning">Edit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
