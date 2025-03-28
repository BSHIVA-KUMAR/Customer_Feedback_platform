
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const styles = {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "'Roboto', sans-serif",
      background: "#f4f7fb",  // A lighter background for the whole page
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: "linear-gradient(45deg,rgb(199, 202, 222),rgb(209, 212, 241))", // A gradient background
    },
    card: {
      backgroundColor: "white",
      width: "100%",
      maxWidth: "380px",  // Slightly narrower for a sleeker look
      padding: "2.5rem 2rem",
      borderRadius: "12px",  // More rounded corners
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "transform 0.3s ease", // Animation when hovering over the card
    },
    cardHover: {
      transform: "scale(1.05)", // Slight scale effect on hover
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "700",
      color: "#3a3a3a",
      marginBottom: "1rem",
      fontFamily: "'Poppins', sans-serif",  // A different font for the heading
    },
    subHeading: {
      fontSize: "1.1rem",
      color: "#666",
      marginBottom: "2.5rem",
      fontWeight: "500",
    },
    button: {
      backgroundColor: "#4285F4",
      color: "white",
      border: "none",
      padding: "16px 0",
      borderRadius: "5px",
      fontSize: "1.1rem",
      cursor: "pointer",
      width: "100%",
      transition: "background-color 0.3s, transform 0.3s",
      marginBottom: "20px",
      fontWeight: "600",
    },
    buttonHover: {
      backgroundColor: "#357ae8",  // Change color on hover
      transform: "translateY(-3px)", // Button moves up on hover
    },
    footer: {
      marginTop: "25px",
      color: "#777",
      fontSize: "0.9rem",
      fontWeight: "300",
    },
  };

  return (
    <div style={styles.body}>
      <div 
        style={styles.card} 
        className="card-hover" 
        onMouseEnter={(e) => e.target.style.transform = styles.cardHover.transform}
        onMouseLeave={(e) => e.target.style.transform = ""}
      >
        <h2 style={styles.heading}>Welcome Back</h2>
        <p style={styles.subHeading}>Sign in to access your dashboard and more!</p>

        <GoogleLogin
          onSuccess={(res) => {
            const decoded = jwtDecode(res.credential);
            console.log("Decoded User:", decoded);
            localStorage.setItem("user", res.credential);
            navigate("/home", { state: { user: decoded } });
          }}
          onError={() => {
            console.log("Login failed");
          }}
          useOneTap
          style={styles.button}
        />

        <div style={styles.footer}>
          By logging in, you agree to our <a href="/terms" style={{ color: "#4285F4", textDecoration: "none" }}>Terms of Service</a> and <a href="/privacy" style={{ color: "#4285F4", textDecoration: "none" }}>Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
