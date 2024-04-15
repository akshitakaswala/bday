import { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter hook
import styles from "@/styles/Home.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Initialize the useRouter hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful login
        router.push("/"); // Redirect to home page after successful login
      } else {
        // Handle login failure (e.g., display error message)
        const data = await response.json();
        console.log(data.message); // Display error message
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "1000px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #373b64",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      <h1
        className={styles.title}
        style={{
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        {/* Login! 🎂 Once logged in, you'll gain exclusive access to memories 🎁
        and possibly embarrassing stories of you! 😄 Don't worry; what happens
        at the birthday bash stays at the birthday bash. 🤫 */}
      </h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          border: "1px solid #373b64",
          marginBottom: "10px",
        }}
        required
      />
      <br></br>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          border: "1px solid #373b64",
          marginBottom: "10px",
        }}
        required
      /><br></br>
      <button
        type="submit"
        style={{
          width: "150px",
          padding: "10px",
          backgroundColor: "#373b64",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;