import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {ThemeProvider} from "@mui/material";
import {Provider} from "react-redux";

import {theme} from "./theme/theme";
import store from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeProvider>
);
