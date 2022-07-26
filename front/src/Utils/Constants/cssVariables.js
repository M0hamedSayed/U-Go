/* custom css variables object to use it in JS files*/
export const cssVariables = {
    colors: (alpha = 1) => ({
        primary: `rgba(var(--primary-color),${alpha})`,
        primaryDark: `rgba(var(--primary-color_dark),${alpha})`,
        primaryLight: `rgba(var(  --primary-color_light),${alpha})`,
        secondary: `rgba(var(--secondary-color),${alpha})`,
        secondaryDark: `rgba(var(--secondary-color_dark),${alpha})`,
        secondaryLight: `rgba(var(--secondary-color_light),${alpha})`,
        primaryToggle: `rgba(var(--primary-toggle),${alpha})`,
        secondaryToggle: `rgba(var(--secondary-toggle),${alpha})`,
        backdrop: `rgba(var(--backdrop-color),${alpha})`,
        dark: `rgba(var(--dark-color),${alpha})`,
        white: `rgba(var(--white-color),${alpha})`,
        error: `rgba(var(--error-color),${alpha})`,
        /*background color*/
        bgMain: `rgba(var(--bg-main),${alpha})`,
        bgWhite: `rgba(var(--bg-white),${alpha})`,
        bgPrimary: `rgba(var(--bg-primary),${alpha})`,
        bgPrimaryDark: `rgba(var(--bg-primary_dark),${alpha})`,
        bgPrimaryLight: `rgba(var(  --bg-primary_light),${alpha})`,
        bgSecondary: `rgba(var(--bg-secondary),${alpha})`,
        bgSecondaryDark: `rgba(var(--bg-secondary_dark),${alpha})`,
        bgSecondaryLight: `rgba(var(--bg-secondary_light),${alpha})`,
        /* text color*/
        txtMain: `rgba(var(--txt-main),${alpha})`,
        txtWhite: `rgba(var(--txt-white),${alpha})`,
        txtWhiteX: `rgba(var(--txt-white-x),${alpha})`,
        txtDark: `rgba(var(--txt-dark),${alpha})`,
        txtPrimary: `rgba(var(--txt-primary),${alpha})`,
        txtPrimaryDark: `rgba(var(--txt-primary_dark),${alpha})`,
        txtPrimaryLight: `rgba(var(  --txt-primary_light),${alpha})`,
        txtSecondary: `rgba(var(--txt-secondary),${alpha})`,
        txtSecondaryDark: `rgba(var(--txt-secondary_dark),${alpha})`,
        txtSecondaryLight: `rgba(var(--txt-secondary_light),${alpha})`,
    }),
    fonts: {
        regularDin: 'var(--font)',
        boldDin: 'var(--font-bold)'
    },
    transitions: {
        transitionOut: 'var(--transition-out)',
        transitionIn: 'var(--transition-in)',
        transitionAll: 'var(--transition-all)',
        transitionBg: 'var(--transition-bg)',
        transitionColor: 'var(--transition-color)',
    },
}