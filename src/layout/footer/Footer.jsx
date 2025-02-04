import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        bgcolor: "#f5f5f5",
        color: "#333",
        py: 2,
        mt: 5,
        borderTop: "1px solid #ddd",
      }}
    >
      <Typography variant="body2">
        Designed by{" "}
        <Link
          href="https://ahmed-portofilo.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#1976d2", fontWeight: "bold", textDecoration: "none" }}
        >
          Ahmed Hussein
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
