// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
   palette: {
      primary: {
         main: "#1a73e8", // Màu xanh tùy chỉnh
      },
      secondary: {
         main: "#f50057", // Màu hồng tùy chỉnh
      },
      background: {
         default: "#f5f5f5", // Màu nền mặc định
      },
   },
   typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
         fontSize: "2rem",
         fontWeight: 700,
      },
      body1: {
         fontSize: "1rem",
      },
   },
   components: {
      MuiButton: {
         styleOverrides: {
            root: {
               textTransform: "none",
               borderRadius: "12px",
               padding: "8px 16px",
            },
            containedPrimary: {
               backgroundColor: "#1a73e8",
               "&:hover": {
                  backgroundColor: "#155cb0",
               },
            },
         },
      },
      MuiTextField: {
         styleOverrides: {
            root: {
               margin: "8px 0",
            },
         },
      },
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 600,
         md: 960,
         lg: 1280,
         xl: 1920,
      },
   },
   spacing: 4,
});

export default theme;
