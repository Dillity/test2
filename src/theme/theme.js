import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#F4E041"
        },
        secondary: {
            main: "#00BDD3"
        },
        background: {
            default: "#F8F8F8"
        }
    },
    typography: {
        fontFamily: "Nunito",
        h1: {
            fontSize: 40,
            lineHeight: 40
        },
        body: {
            fontSize: 16,
            lineHeight: 26
        }
    }
});
