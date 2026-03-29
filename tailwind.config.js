/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        // Manrope
        "manrope-regular": ["Manrope-Regular"],
        "manrope-medium": ["Manrope-Medium"],
        "manrope-semibold": ["Manrope-SemiBold"],
        "manrope-bold": ["Manrope-Bold"],
        "manrope-light": ["Manrope-Light"],
        "manrope-extralight": ["Manrope-ExtraLight"],

        // Inter
        "inter-regular": ["Inter-Regular"],
        "inter-medium": ["Inter-Medium"],
        "inter-semibold": ["Inter-SemiBold"],
        "inter-bold": ["Inter-Bold"],
        "inter-light": ["Inter-Light"],
        "inter-extralight": ["Inter-ExtraLight"],
      },
      colors: {
        primary: "#1A237E",
        secondary: "#7E57C2",
        secondary_container: "#B78EFE",
        tertiary: "#66BB6A",
        neutral: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
