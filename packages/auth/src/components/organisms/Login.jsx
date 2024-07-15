import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Link,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

const SignIn = () => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        // background: "linear-gradient(135deg, #6B73FF 10%, #000DFF 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 3,
          p: 3,
          maxWidth: "100%",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Sign in to stay-next
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          Welcome back! Please sign in to continue
        </Typography>

        <Box sx={{ mt: 3, width: "100%" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Button
              variant="outlined"
              startIcon={<GitHubIcon sx={{ color: "black" }} />}
              sx={{
                borderColor: "black",
                color: "black",
                borderRadius: "8px",
                textTransform: "none",
                width: "48%",
                "&:hover": {
                  borderColor: "black",
                  bgcolor: "#f5f5f5",
                },
              }}
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              startIcon={<GoogleIcon sx={{ color: "#DB4437" }} />}
              sx={{
                borderColor: "#DB4437",
                color: "#DB4437",
                borderRadius: "8px",
                textTransform: "none",
                width: "48%",
                "&:hover": {
                  borderColor: "#DB4437",
                  bgcolor: "#f5f5f5",
                },
              }}
            >
              Google
            </Button>
          </Box>

          <Divider sx={{ my: 2 }}>or</Divider>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "#1976d2",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1976d2",
                },
              },
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="current-password"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "#1976d2",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1976d2",
                },
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              mt: 3,
              mb: 2,
              borderRadius: "8px",
              textTransform: "none",
              bgcolor: "#1976d2",
              "&:hover": {
                bgcolor: "#1565c0",
              },
            }}
          >
            Continue
          </Button>

          <Typography variant="body2" color="textSecondary" align="center">
            Don’t have an account?{" "}
            <Link href="/signup" variant="body2">
              Sign up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;