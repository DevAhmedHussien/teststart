import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" color="primary" fontWeight="bold">
        404
      </Typography>
      <Typography variant="h5" sx={{ mt: 2, color: "gray" }}>
        Oops! Page Not Found 😢
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        The page you are looking for might have been moved or deleted.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => navigate("/")}
      >
        🔙 Go Back Home
      </Button>
    </Box>
  );
};

export default NotFound;
