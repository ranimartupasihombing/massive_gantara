import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Pengguna = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/user');
        setData(response.user.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <h2>Data Table</h2>
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          {/* Tambahkan kolom lain sesuai dengan struktur tabel Anda */}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.username}</td>
            <td>{row.password}</td>
            {/* Tambahkan kolom lain sesuai dengan struktur tabel Anda */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};


export default Pengguna
