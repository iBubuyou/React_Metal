import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";

const DB = () => {
  const [metalData, setMetalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/malte');
        setMetalData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };

    const socket = io('http://localhost:3001'); // Adjust the URL based on your server setup

    socket.on('dataUpdate', () => {
      // Fetch data again when a data update is received
      fetchData();
    });

    fetchData(); // Fetch initial data

    return () => {
      socket.disconnect(); // Disconnect socket when the component unmounts
    };
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <table className="metal-table">
          <thead>
            <tr>
              <th>Buzzer Status</th>
              <th>Touch Module</th>
              <th>Date Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {metalData.map((metal, index) => (
              <tr key={index}>
                <td>{metal.buzzer_status}</td>
                <td>{metal.touch_module}</td>
                <td>{metal.datetimestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DB;
