import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ListStudent = () => {
  const [addstudent, setStudent] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get("http://localhost:3003/liststudent")
      .then((result) => {
        if (result.data.Status) {
          setStudent(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios.delete('http://localhost:3003/deletestudent/'+id)
    .then(result => {
        if(result.data.Status) {
            window.location.reload()
        } else {
            alert(result.data.Error)
        }
    })
  } 

 
  
  return (
    <div className="w-1/2 h-5/6 bg-blue-100 fixed  rounded-lg px-36  ml-96 border-2 shadow-inner shadow-blue-500/50 ">
    <h1 className="text-2xl text-black ml-44">List Student</h1>
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
       
      </div>
     
      <div className="mt-3">
        <table className="border-collapse border border-slate-500 ...">
          <thead>
            <tr>
              <th class="border border-slate-600 ...">First Name</th>
              <th class="border border-slate-600 ...">Last Name</th>
              <th class="border border-slate-600 ...">Email</th>
              <th class="border border-slate-600 ...">Intake</th>
              <th class="border border-slate-600 ...">Degree program</th>
              <th class="border border-slate-600 ...">Action</th>
            </tr>
          </thead>
          <tbody>
            {addstudent.map((e) => (
              <tr>
                <td class="border border-slate-600 ...">{e.fname}</td>
                <td class="border border-slate-600 ...">{e.lname}
                </td>
                <td class="border border-slate-600 ...">{e.email}</td>
                <td class="border border-slate-600 ...">{e.intake}</td>
                <td class="border border-slate-600 ...">{e.dprogram}</td>
                <td class="border border-slate-600 ...">
                  <Link
                    to={`/updatestudent` + e.id}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ListStudent;