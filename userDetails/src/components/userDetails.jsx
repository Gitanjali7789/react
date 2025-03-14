import { useState } from "react";

function UserDetail() {
  const [userID, setUserID] = useState("");
  const [user, setUser] = useState(null);

  const fetchUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
      .then((res) => res.json())
      .then(setUser);
  };

  return (
    <div>
      <input value={userID} onChange={(e) => setUserID(e.target.value)} placeholder="Enter ID" />
      <button onClick={fetchUser}>Get User</button>
      {user && (
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserDetail;
