import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await axios.get('/api/employees');
      setEmployees(res.data);
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Welcome Admin Panel</h1>
      <h2>Employee List</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp._id}>{emp.name} - {emp.designation}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
