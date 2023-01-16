import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ViewUser from "../users/ViewUser";


export default function Home() {
  const [deps, setdeps] = useState([]);

  const {id} = useParams()

  useEffect(() => {
    loaddeps();
  }, []);

  const loaddeps = async () => {
    const result = await axios.get("http://localhost:1000/departments");
    setdeps(result.data);
  };

  const deleteDepartment = async (id) => {
    await axios.delete(`http://localhost:1000/departments/${id}`)
    loaddeps()
  }

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">SL No</th>
              <th scope="col">Department ID</th>
              <th scope="col">Department Name</th>
              <th scope="col">Department Code</th>
              <th scope="col">Department Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {deps.map((dep, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{dep.departmentId}</td>
                <td>{dep.departmentName}</td>
                <td>{dep.departmentCode}</td>
                <td>{dep.departmentAddress}</td>
                <td>
                  <Link className="btn btn-outline-info mx-2" to={`/view/${dep.departmentId}`}>View</Link>
                  <Link className="btn btn-info mx-2" to={`/edit/${dep.departmentId}`}>Edit</Link>
                  <button className="btn btn-danger mx-2" onClick={() => deleteDepartment(dep.departmentId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
