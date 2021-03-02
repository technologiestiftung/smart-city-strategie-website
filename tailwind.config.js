module.exports = {
    purge: [
        "./pages/**/*.tsx",
        "./pages/**/*.ts",
        "./components/**/*.tsx",
        "./components/**/*.ts",
        "./utils/**/*.ts",
        "./utils/**/*.tsx",
    ],
    darkMode: false,
    theme: {
        fontFamily: {
            sans: [
                "Klavika",
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                '"Noto Sans"',
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
        },
    },
    variants: {
        extend: {
          translate: ['group-hover']
        },
    },
    plugins: [],
};
