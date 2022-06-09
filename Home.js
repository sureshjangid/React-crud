import React , {useState,useEffect} from 'react';
import Axios from "axios";
import {Link} from "react-router-dom";
import { EditUser } from './EditUser';

export default function Home() {

  let [users,setUsers] = useState([]);

  useEffect(()=>{
    
    loadUsers();
  },[])

  // getting user data from api
  const loadUsers = async () => { 
    
   try{
    let  result = await Axios.get("http://127.0.0.1:8000/api/viewData");
    console.log(result);
    setUsers(result.data);
   }catch(error){
     alert(error);
   }

  }

  let deleteUser = async (id) =>{
    await Axios.delete(`http://127.0.0.1:8000/api/delete/${id}`);
    loadUsers();
  }
  return (
    <>
   <h1>User Data</h1>
   <div className="container">
     <div className="row">
       <div className="col-lg-6">
         <table className="table">
           <tr>
             <th>ID</th>
             <th>Name</th>
             <th>Email</th>
             <th>Action</th>
           </tr>
           {
             users.map((curElem , index)=>{
               let {name,email} = curElem;
               let i = 1;
              return (
                <>
                <tr key={curElem.id}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <Link className="btn btn-primary text-dark" to={`viewUser/${curElem.id}`}>View</Link>
                    <Link className="btn btn-success text-dark" to={`editUser/${curElem.id}`} >Edit</Link>
                    <Link className="btn btn-danger text-dark" onClick={()=>deleteUser(curElem.id)}>Delete</Link>
                  </td>
                </tr>
                </>
              )
             })
           }
         </table>
       </div>
     </div>
   </div>
    </>
  )
}
