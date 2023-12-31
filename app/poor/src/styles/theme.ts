const deviceSizes = {
    small: 320,
    medium: 768,
};

const breakpoints = {
    small: `@media screen and (max-width: ${deviceSizes.small}px)`,
    medium: `@media screen and (max-width: ${deviceSizes.medium}px)`,
};

const colors = {
    background: 'radial-gradient(#282c34cc, #282c34)',
    black: '#282c34',
    blue: '#a0e9fd',
    lightBlue: '#caf3fe',
    white: 'white',
};

const theme = {
    colors,
    breakpoints,
    deviceSizes,
};

export default theme;
