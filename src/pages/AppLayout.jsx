// ** React
import { useEffect, useRef } from "react";

// ** Router
import {  Routes, Route, useNavigate, useLocation } from "react-router-dom";

// ** Redux
import { useSelector } from "react-redux";

// ** Third party MUI
import { Container } from "@mui/material";

// ** Layout Components
import SearchAppBar from "../layout/header/Header";
import Footer from "../layout/footer/Footer";

// ** Pages
import SeminarsList from "../pages/home/SeminarsList";
import SeminarDetails from "../pages/seminar-details/SeminarDetails";
import About from "../pages/about/About";
import NotFound from "../pages/NotFound";


// ** App Layout Component (Handles Navigation & UI Structure)
const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchQuery = useSelector((state) => state.seminars.searchQuery);
  const prevSearchQuery = useRef(searchQuery);

//  NAVIGATE TO MAIN TO GET SPECIFIC CARD IF IAM NOT ON THE MAIN 
  useEffect(() => {
    if (searchQuery.length > 0 && location.pathname !== "/" && searchQuery !== prevSearchQuery.current) {
      navigate("/");
      prevSearchQuery.current = searchQuery;
    }
  }, [searchQuery, location, navigate]);

  return (
    <>
      <SearchAppBar />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<SeminarsList />} />
          <Route path="/about" element={<About />} />
          <Route path="/seminar/:id" element={<SeminarDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
};
export default AppLayout
