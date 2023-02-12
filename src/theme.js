import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#7F56D9",
    },
    secondary: {
      main: "#326eb3",
    },
    buttons: {
      main: "#7F56D9",
    },
  },
  //custom theme variables
  bg: {
    main: "#fff",
    light: "#F4F5F7",
  },
  text: {
    main: "#172B4D",
    light: "#262930",
  },
});
