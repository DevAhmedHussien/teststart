// ** Router
import { BrowserRouter as Router } from "react-router-dom";

// ** Third Party - MUI
import { CssBaseline} from "@mui/material";

// ** Redux Store
import store from "./redux/store";
import { Provider } from "react-redux";

// ** Context
import { SnackbarProvider } from "./context/SnackBarContext";

// ** Root AppLayout 
import AppLayout from "./pages/AppLayout";

const App = () => {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <Router>
          <CssBaseline />
          <AppLayout />
        </Router>
      </SnackbarProvider>
    </Provider>
  );
};

export default App;
