import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    typography: {
        h1: {
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: "80px",
        },
        h2: {
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "64px",
        },
        h3: {
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: "48px",
        },
        h4: {
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "36px",
        },
        h5: {
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "30px",
        },
        h6: {
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: "28px",
        },
        a: {
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "24px",
        },
        button: {
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: "24px",
        },
        body1: {
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "28px",
        },
        body2: {
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
        },
        subtitle1: {
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "24px",
        },
        subtitle2: {
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "22px",
        }
    }
});
theme = responsiveFontSizes(theme);

export default theme;
