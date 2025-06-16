export const lightTheme = {
  colors: {
    background: "#F2E5D5",
    text: "white",
    textDark: "#121212",

    opaqueText: "#3b3b3b",
    primary: "#7B1E1E",
    secondary: "#993030",
    title: "",
  },
  button: {
    background: "#7B1E1E",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "10px",
  },
};

export const darkTheme = {
  colors: {
    background: "#121212",
    text: "#ffffff",
    primary: "#9b59b6",
  },
  button: {
    background: "#9b59b6",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "10px",
  },
};

export type ThemeType = typeof lightTheme;
