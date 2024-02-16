import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const hardcodedUsername = "user";
    const hardcodedPassword = "password";

    if (username === hardcodedUsername && password === hardcodedPassword) {
      setLoggedIn(true);
      navigate('/dashboard')
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <body
      style={{ backgroundColor: "#add8e6", fontFamily: "Monospace", margin: 0 }}
    >
      <div
        style={{
          padding: "30px",
          borderRadius: "10px",
          width: "400px",
          margin: "auto",
          marginTop: "100px",
          backgroundColor: "white",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Единная Система Обучения</h2>
        <form onSubmit={handleLogin}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </label>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </label>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              background: "#72bcd4",
              color: "white",
              border: "none",
            }}
          >
            Login
          </button>
        </form>
        {isLoggedIn && (
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            Welcome Back!
          </p>
        )}
      </div>
    </body>
  );
};

export default LoginPage;
