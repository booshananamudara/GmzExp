const gradientRed = "linear-gradient(135deg, #FF4500, #FF004D)"; // Fiery red gradient
const gradientDark = "linear-gradient(135deg, #1A1A1A, #000000)"; // Deep dark gradient
const fieryRed = "#FF4500"; // Bright red-orange
const neonRed = "#FF004D"; // Neon red
const black = "#000000"; // Pure black
const deepGray = "#2B2B2B"; // Rich dark gray
const smokyGray = "#424242"; // Medium gray
const white = "#FFFFFF"; // Pure white
const glowingOrange = "#FF6F00"; // Vibrant orange
const darkOrange = "#CC3300"; // Darker orange for accents
const darkGradientBackground = "linear-gradient(135deg, #2B2B2B, #1A1A1A)"; // Subtle dark gradient for contrast

export const Colors = {
  light: {
    text: black,
    darkText: deepGray,
    background: "#FFEFFF", 
    tint: fieryRed,
    icon: smokyGray,
    tabIconDefault: smokyGray,
    tabIconSelected: fieryRed,
    primary: glowingOrange,
    onPrimary: white,
    active: neonRed,
    borderWithOpacity: "rgba(255, 0, 77, 0.6)", // Neon red with transparency
    gradientBackground: gradientRed, 
    gray: smokyGray,
  },
  dark: {
    text: white,
    background: darkGradientBackground, 
    tint: neonRed,
    icon: "#666666", // Soft gray for icons
    tabIconDefault: "#666666",
    tabIconSelected: neonRed,
    primary: glowingOrange,
    onPrimary: black,
    active: fieryRed,
    borderWithOpacity: "rgba(255, 69, 0, 0.5)", // Fiery red with transparency
    gradientBackground: gradientDark,
    gray: deepGray,
  },
};
