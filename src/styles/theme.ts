import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#FFCC41",
  secondary: "#2d232e",
  white: "#ffffff",
  t_dark: "#474448",
  t_light: "#534b52",
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
  heading: `'Mansalva', sans-serif`,
  body: `'Inter', sans-serif`,
};

export const customTheme = extendTheme({ colors, components, fonts });
