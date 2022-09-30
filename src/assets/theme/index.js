const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848a",
  },
  text: {
    primaryColor: "#4848484",
    secondaryColor: "#222222",
  },
  mixin: {
    boxShadow: `
      transition: box-shadow .2s ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      }
    `,
  },
};

// const darkTheme = {};

export default theme;
