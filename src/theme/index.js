import { createTheme } from "@mui/material/styles"

// Create a custom MUI theme with light mode and tailored color palette
const theme = createTheme({
  palette: {
    mode: 'light',  // Use light mode for overall theme

    background: {
      default: '#FAFAFA',  // Default page background color (light gray)
      paper: '#FFFFFF'     // Background color for surfaces/paper components (white)
    },

    text: {
      primary: '#2E2E2E',    // Primary text color (dark gray)
      secondary: '#6E6E6E'   // Secondary text color (medium gray)
    },

    primary: {
      main: '#D4B483',       // Primary color main shade (soft gold/beige)
      secondary: '#1C1C1C'   // Secondary shade for primary (very dark gray)
    },

    secondary: {
      main: '#A3B18A',       // Secondary color main shade (muted green)
      contrastText: '#FFFFFF' // Text color on secondary colored backgrounds (white)
    }
  }
})

export default theme
