const theme = {
  fontFamily: "'Winky Sans', sans-serif",
  colors: {
    white: '#FFFFFF',
    body: '#E8FCCF',
    light: '#96E072',
    medium: '#3DA35D',
    accent: '#3E8914',
    dark: '#134611',
    back: 'rgba(232, 252, 207, 0.5)',
  },
  fontSizes: {
    h1: '67px',
    h2: '51px',
    h3: '38px',
    h4: '28px',
    h5: '22px',
    h6: '18px',
    body: '16px',
    caption: '13px',
  },
  fontWeights: {
    s: '400',
    m: '600',
    l: '800',
  },
  borders: {
    thin: '1px solid',
    main: '2px solid',
  },
  radii: {
    s: '5px',
    m: '25px',
    xl: '50%',
  },
  shadow: {
    s: `-webkit-box-shadow: 0px 3px 6px 1px rgba(19,70,17,0.42);
-moz-box-shadow: 0px 3px 6px 1px rgba(19,70,17,0.42);
box-shadow: 0px 3px 6px 1px rgba(19,70,17,0.42);`,
    m: `1px 3px 10px 2px rgba(0, 0, 0, 0.37);
        -webkit-box-shadow: 1px 3px 10px 2px rgba(0, 0, 0, 0.37);
        -moz-box-shadow: 1px 3px 10px 2px rgba(0, 0, 0, 0.37);`,
    l: ``,
  },
};

document.body.style.fontFamily = theme.fontFamily;
document.body.style.color = theme.colors.dark;
document.body.style.backgroundColor = theme.colors.body;

export default theme;
