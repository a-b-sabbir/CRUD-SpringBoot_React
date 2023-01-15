import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:1000/departments");
    setUsers(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">SL No</th>
              <th scope="col">Department Name</th>
              <th scope="col">Department Code</th>
              <th scope="col">Department Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.departmentName}</td>
                <td>{user.departmentCode}</td>
                <td>{user.departmentAddress}</td>
                <td>
                  <button className="btn btn-outline-info mx-2">View</button>
                  <button className="btn btn-info mx-2">Edit</button>
                  <button className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}