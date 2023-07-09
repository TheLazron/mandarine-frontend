import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#FFD86C",
  secondary: "#242529",
  white: "#ffffff",
  t_dark: "#1D1E21",
  t_light: "#353638",
  t_light2: "#F2F2F2",
};

const components = {
  Button: {
    baseStyle: {
      borderRadius: "md",
      padding: "4",
      boxShadow: "0 0 7px rgba(0, 0, 0, 0.1)",
    },
    variants: {
      yellow: {
        bg: "primary",
        color: "white",
        flex: 3,
      },
      plain: {
        bg: "white",
        color: "black",
      },
    },
  },
};

const fonts = {
  heading: `'Inter variable', sans-serif`,
  body: `'Inter Variable', sans-serif`,
};

export const customTheme = extendTheme({ colors, components, fonts });
