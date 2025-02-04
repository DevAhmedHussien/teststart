//  ** React 
import { useState } from "react";

// ** third Pary MUI
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Box, Toolbar, IconButton, Typography, InputBase, MenuItem, Collapse, Tooltip} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

// ** navigate
import { Link } from "react-router-dom";

// ** Redux
import { useDispatch, useSelector } from "react-redux";
import { searchItem } from "../../redux/seminarSlice";

// ** Styles for Search Box
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.short,
    }),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  // ** State for Menu Toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // ** Redux Hooks
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state) => state.seminars);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "#1976d2" }}>
        <Toolbar>
          {/* Menu Toggle Button */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              TEST
            </Link>
          </Typography>

          {/* Search Box */}
          <Tooltip title="Search by Title, Description, Date, or Time" placement="bottom">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchQuery}
                onChange={(e) => dispatch(searchItem(e.target.value))}
              />
            </Search>
          </Tooltip>
        </Toolbar>
      </AppBar>

      {/* Smooth Transition for Collapsible Menu */}
      <Collapse in={menuOpen} timeout="auto" unmountOnExit>
        <Box
          sx={{
            position: "fixed",
            width: "100%",
            top: 56,
            zIndex: 1000,
            backgroundColor: "whitesmoke",
            padding: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <MenuItem component={Link} to="/" onClick={() => setMenuOpen(false)}>
            Home
          </MenuItem>
          <MenuItem component={Link} to="/about" onClick={() => setMenuOpen(false)}>
            About & Contact 
          </MenuItem>
        </Box>
      </Collapse>
    </Box>
  );
}
