import React, { useEffect, useState } from "react";
import axios from "axios";
import { Await, Link, useNavigate, useParams } from "react-router-dom";

export default function EditDepartment() {
  let navigate = useNavigate();

  const {id} = useParams();
  const [department, setdepartment] = useState({
    departmentName: "",
    departmentCode: "",
    departmentAddress: "",
  });

  const { departmentName, departmentCode, departmentAddress } = department;

  const onInputChange = (e) => {
    setdepartment({ ...department, [e.target.name]: e.target.value });
    
  };

  useEffect (() => {
    loadDepartment()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:1000/departments/${id}`, department);
    navigate("/");
  };

  const loadDepartment = async () =>  {
    const result= await axios.get(`http://localhost:1000/departments/${id}`)
    setdepartment(result.data)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 border mt-2 offset-md-3 p-4 shadow">
          <h2 className="text-center m-4">Edit Department</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Department Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Department Name"
                name="departmentName"
                value={departmentName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="code" className="form-label">
                Department Code
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Department Code"
                name="departmentCode"
                value={departmentCode}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Department Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Department Address"
                name="departmentAddress"
                value={departmentAddress}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button className="btn btn-outline-success" type="submit">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-3" to= "/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
