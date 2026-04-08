import React, { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h2 style={styles.title}>
          {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
        </h2>

        <p style={styles.subtitle}>
          {isLogin ? "Login to continue" : "Signup to get started"}
        </p>

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            style={styles.input}
          />
        )}

        <input
          type="email"
          placeholder="Email Address"
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
        />

        <button style={styles.button}>
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p style={styles.text}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            style={styles.link}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>

      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial, sans-serif"
  },

  card: {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    padding: "35px",
    borderRadius: "15px",
    width: "320px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    animation: "fadeIn 0.6s ease-in-out"
  },

  title: {
    color: "#fff",
    marginBottom: "5px"
  },

  subtitle: {
    color: "#ddd",
    fontSize: "14px",
    marginBottom: "20px"
  },

  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    background: "rgba(255,255,255,0.2)",
    color: "#fff",
    fontSize: "14px"
  },

  button: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    background: "linear-gradient(90deg, #ff7eb3, #ff758c)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },

  text: {
    marginTop: "15px",
    color: "#eee",
    fontSize: "14px"
  },

  link: {
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    marginLeft: "5px"
  }
};

export default App;