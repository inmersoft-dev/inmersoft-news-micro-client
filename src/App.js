import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// @mui/material
import { ThemeProvider } from "@mui/material/styles";

// @mui components
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Box, CssBaseline } from "@mui/material";

// themes
import dark from "./assets/theme/dark";
import light from "./assets/theme/light";

// components
import Notification from "./components/Notification/Notification";

// contexts
import { useMode } from "./context/ModeProvider";

// layouts
import Main from "./layouts/Main";

// views
import Home from "./views/Home/Home";
import SignUp from "./views/Auth/SignUp";
import SignIn from "./views/Auth/SignIn";
import SignOut from "./views/Auth/SignOut";
import NotFound from "./views/NotFound/NotFound";

const App = () => {
  const { modeState } = useMode();

  useEffect(() => {
    document.body.style.transition = "all 200ms ease";
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={modeState.mode === "light" ? light : dark}>
        <CssBaseline />
        <Notification />
        <Box>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />}>
                <Route index element={<Home />} />
              </Route>
              <Route path="/auth" element={<></>}>
                <Route index="index" element={<SignIn />} />
                <Route exact path="/auth/sign-up" element={<SignUp />} />
                <Route exact path="/auth/sign-out" element={<SignOut />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default App;
