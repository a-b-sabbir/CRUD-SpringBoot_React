import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewDepartment() {
  const [department, setdepartment] = useState({
    departmentName: "",
    departmentCode: "",
    departmentAddress: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loaddeps()
  }, [])

  const loaddeps = async () => {
    const result = await axios.get(`http://localhost:1000/departments/${id}`)
    setdepartment(result.data)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 border mt-2 offset-md-3 p-4 shadow">
          <h2 className="text-center m-4">Department Details</h2>
          <div className="card">
            <div className="card-header">
              <h6>Details of Department Id: {department.departmentId}</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h5>Name: <b> {department.departmentName}</b></h5>
                </li>
                <li className="list-group-item">
                <h5>Code: <b> {department.departmentCode}</b></h5>
                </li>
                <li className="list-group-item">
                <h5>Address: <b> {department.departmentAddress}</b></h5>
                </li>
              </ul>
            </div>
          </div>
          <br />
          <Link className="btn btn-info my-2" to={`/`}>
            Back to Home{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
