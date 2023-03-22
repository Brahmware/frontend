import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { ThemeProvider } from '@mui/material/styles';
import { store } from "./app/api/store";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingPage from "./pages/loading";
import NavScrollTop from "./components/nav-scroll-top";
import { theme } from "./muiTheme/theme";

const rendarable = (
    <Provider store={store}>
        <Router>
            <NavScrollTop>
                <Suspense fallback={<LoadingPage />}>
                    <ThemeProvider theme={theme}>
                        <App />
                    </ThemeProvider>
                </Suspense>
            </NavScrollTop>
        </Router>
    </Provider>
);

ReactDOM.render(rendarable, document.getElementById("root"));
