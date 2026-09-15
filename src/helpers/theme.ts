export const colours = {
  light: "#F3EDE5",
  mid: "#EAE0D7",
  dark: "#281401",
  contrast: "#F07800",
};

export const inset = {
  bdrs: "0",
  c: colours.dark,
  bd: `solid 4px ${colours.dark}`,
  style: {
    boxShadow: "inset -1px -1px 0px 1px #3A58EF, inset 1px 1px 0px 1px crimson",
  },
};

export const shadow = {
  bdrs: "0",
  c: colours.dark,
  bd: `solid 4px ${colours.dark}`,
  style: {
    boxShadow: "1px 1px 0px 1px #3A58EF, -1px -1px 0px 1px crimson",
  },
};

export const lightInset = {
  bdrs: "0",
  c: colours.dark,
  bg: colours.light,
  bd: `solid 4px ${colours.dark}`,
  style: {
    boxShadow: `inset -3px -3px 0px 1px ${colours.mid}`,
  },
};

export const lightShadow = {
  bdrs: "0",
  c: colours.dark,
  bg: colours.light,
  bd: `solid 4px ${colours.dark}`,
  style: {
    boxShadow: `3px 3px 0px 1px ${colours.mid}`,
  },
};
