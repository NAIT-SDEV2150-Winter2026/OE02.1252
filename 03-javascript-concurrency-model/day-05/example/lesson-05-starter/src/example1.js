import React, { useState, useEffect } from 'react';

const UserList = () => {
  // 1. State for data, loading, and error
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. useEffect to trigger the fetch when the component mounts
  useEffect(() => {
    // Define the async function inside the effect
    const fetchUsers = async () => {
      try {
        // Reset error state before starting
        setError(null);
        
        // Make the API call
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse JSON data
        const data = await response.json();

        // Update state with data
        setUsers(data);
      } catch (err) {
        // Catch any network or parsing errors
        setError(err.message);
      } finally {
        // Stop loading whether we succeeded or failed
        setIsLoading(false);
      }
    };

    // Call the function
    fetchUsers();
  }, []); // Empty dependency array [] means this runs once on mount

  // 3. Conditional Rendering based on state
  if (isLoading) return <div className="loading">Loading users...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="user-list-container">
      <h2>User Directory</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {users.map((user) => (
          <li 
            key={user.id} 
            style={{ 
              marginBottom: "10px", 
              padding: "10px", 
              border: "1px solid #ddd", 
              borderRadius: "5px" 
            }}
          >
            <strong>{user.name}</strong>
            <br />
            <span style={{ color: "#555", fontSize: "0.9em" }}>
              Email: {user.email}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;