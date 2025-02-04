import { Box, Typography, Button, Paper, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CodeIcon from "@mui/icons-material/Code";
import SecurityIcon from "@mui/icons-material/Security";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import LanguageIcon from "@mui/icons-material/Language";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const About = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ mt: 5, p: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          📌 About the Test Project
        </Typography>

        {/* 🔥 Competition Overview */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="body1">
            This test project was completed as part of a **competition**.
            The goal was to build an **efficient and optimized React application**
            with features like **search, CRUD operations, and Redux state management**.
          </Typography>
        </Paper>

        {/* 🔍 Amazing Search Feature */}
        <Box sx={{ mt: 3, textAlign: "left" }}>
          <Typography variant="h5">
            <SearchIcon sx={{ mr: 1, verticalAlign: "middle" }} />
            Advanced Search System
          </Typography>
          <Typography>
            Implemented an **intelligent search system** that:
          </Typography>
          <ul>
            <li>Searches **by title, description, date, and time**</li>
            <li>Highlights **matched words in yellow**</li>
            <li>Works **instantly without reloading**</li>
            <li>Uses **useMemo and useCallback** for **high performance**</li>
          </ul>
        </Box>

        {/* 🛠 Technologies Used */}
        <Box sx={{ mt: 3, textAlign: "left" }}>
          <Typography variant="h5">
            <CodeIcon sx={{ mr: 1, verticalAlign: "middle" }} />
            Technologies Used
          </Typography>
          <ul>
            <li><strong>React, Redux Toolkit, React Hooks</strong> (State management, rendering optimization)</li>
            <li><strong>Material UI (MUI)</strong> (UI components and styling)</li>
            <li><strong>DatePicker, Date-fns</strong> (Date and time formatting)</li>
            <li><strong>React Router</strong> (Navigation between pages)</li>
            <li><strong>Axios Instance</strong> (Secure and fast HTTP requests)</li>
            <li><strong>Snackbar</strong> (User notifications for actions)</li>
          </ul>
        </Box>

        {/* 🚀 Feature Highlights */}
        <Box sx={{ mt: 3, textAlign: "left" }}>
          <Typography variant="h5">
            <SecurityIcon sx={{ mr: 1, verticalAlign: "middle" }} />
            Key Features
          </Typography>
          <ul>
            <li>**🔍 Search with Highlighting** — Matches **are highlighted in yellow** in titles, descriptions, dates, and times.</li>
            <li>**⚡ Fast CRUD Operations** — Add, Edit, Delete, and Fetch data using **Axios Instance**.</li>
            <li>**🔄 Real-Time Updates** — Redux updates the state **instantly**.</li>
            <li>**🛡️ Secure API Requests** — All API requests go through a **centralized Axios Instance**.</li>
          </ul>
        </Box>

        {/* 📁 Project Structure */}
        <Box sx={{ mt: 3, textAlign: "left" }}>
          <Typography variant="h5">
            <FolderOpenIcon sx={{ mr: 1, verticalAlign: "middle" }} />
            Project Architecture (FSD)
          </Typography>
          <ul>
            <li>**Redux Store** — Centralized state management.</li>
            <li>**Axios Instance** — For **secure** API requests.</li>
            <li>**Feature-Sliced Design (FSD)** — UI, API, Utils, State.</li>
            <li>**Asynchronous Requests** — Managed via `createAsyncThunk` in Redux Toolkit.</li>
          </ul>
        </Box>

        {/* 🔗 Links */}
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Button variant="contained" color="primary" href="https://ahmed-portofilo.vercel.app/" target="_blank">
            <LanguageIcon sx={{ mr: 1 }} />
            My Portfolio
          </Button>
          <Button
            variant="contained"
            color="secondary"
            href="https://github.com/DevAhmedHussien"
            target="_blank"
            sx={{ ml: 2 }}
          >
            GitHub
          </Button>
        </Box>

        {/* 📞 Contact Information */}
        <Box sx={{ mt: 3, textAlign: "left" }}>
          <Typography variant="h5">
            <ContactMailIcon sx={{ mr: 1, verticalAlign: "middle" }} />
            Contact Information
          </Typography>
          <Typography>
            Email: <Link href="mailto:a.abdelmaskoud@mail.ru">a.abdelmaskoud@mail.ru</Link>
          </Typography>
          <Typography>
            Phone: <Link href="tel:+79821313577">+7 982 131 35 77</Link> (WhatsApp available)
          </Typography>
        </Box>

        {/* 🔙 Back Button */}
        <Box sx={{ mt: 4 }}>
          <Button variant="outlined" onClick={() => navigate("/")}>
            <ArrowBackIcon sx={{ mr: 1 }} />
            Back to Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
