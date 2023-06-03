import { Button, Grid } from "@mui/material";
import { Google } from "@mui/icons-material";
import axios from "axios";
import { useState, useEffect } from "react";

const SocialLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in by sending a GET request to a backend endpoint that verifies the authentication status
    axios.get("/check-auth")
      .then(response => {
        setIsLoggedIn(response.data.isLoggedIn);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleGoogleLogin = () => {
    axios.get("/auth/google")
      .then(response => {
        window.location.href = response.data.redirectUrl;
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    axios.get("/logout")
      .then(response => {
        document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setIsLoggedIn(false);
        window.location.href = "http://localhost:5000/logout";
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Grid>
      {isLoggedIn ? (
        <Button
          onClick={handleLogout}
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: '#DB4437',
            color: '#FFF',
            borderRadius: '50px',
            padding: '12px',
            fontSize: '12px',
            marginTop: '16px',
          }}
        >
          Logout
        </Button>
      ) : (
        <Button
          onClick={handleGoogleLogin}
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: '#DB4437',
            color: '#FFF',
            borderRadius: '50px',
            padding: '12px',
            fontSize: '12px',
          }}
          startIcon={<Google />}
        >
          Google Login
        </Button>
      )}
    </Grid>
  );
};

export default SocialLogin;
