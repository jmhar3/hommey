import { selectDarkMode } from "../state/darkModeSlice";
import { useAppSelector } from "../state/hooks";

function Theme() {
  const darkMode = useAppSelector(selectDarkMode);

  const colours = {
    white: darkMode ? "#F7F5F0" : "#F7F5F0",
    light: darkMode ? "#F3EDE5" : "#F3EDE5",
    mid: darkMode ? "#EAE0D7" : "#EAE0D7",
    dark: darkMode ? "#281401" : "#281401",
    contrast: darkMode ? "#F07800" : "#F07800",
    blue: darkMode ? "#3A58EF" : "#3A58EF",
  };

  const inset = {
    bdrs: "0",
    c: colours.dark,
    bd: `solid 4px ${colours.dark}`,
    style: {
      boxShadow: `inset -1px -1px 0px 1px ${colours.blue}, inset 1px 1px 0px 1px crimson`,
    },
  };

  const shadow = {
    bdrs: "0",
    c: colours.dark,
    bd: `solid 4px ${colours.dark}`,
    style: {
      boxShadow: `1px 1px 0px 1px ${colours.blue}, -1px -1px 0px 1px crimson`,
    },
  };

  const lightInset = {
    bdrs: "0",
    c: colours.dark,
    bg: colours.light,
    bd: `solid 4px ${colours.dark}`,
    style: {
      boxShadow: `inset -3px -3px 0px 1px ${colours.mid}`,
    },
  };

  const contrastInset = {
    bdrs: "0",
    c: colours.dark,
    bg: colours.light,
    bd: `solid 4px ${colours.dark}`,
    style: {
      boxShadow: `inset -3px -3px 0px 1px ${colours.contrast}`,
    },
  };

  const contrastShadow = {
    bdrs: "0",
    c: colours.dark,
    bg: colours.light,
    bd: `solid 4px ${colours.dark}`,
    style: {
      boxShadow: `3px 3px 0px 1px ${colours.contrast}`,
    },
  };

  const lightShadow = {
    bdrs: "0",
    c: colours.dark,
    bg: colours.light,
    bd: `solid 4px ${colours.dark}`,
    style: {
      boxShadow: `3px 3px 0px 1px ${colours.mid}`,
    },
  };

  const input = {
    w: "100%",
    pl: "sm",
    h: "44px",
    variant: "unstyled",
    styles: {
      input: {
        fontSize: "1.1em",
      },
    },
    ...contrastInset,
  };

  const button = {
    px: "sm",
    h: "44px",
    fz: "1em",
    ...contrastShadow,
  };

  const switchStyle = (checked: boolean) => ({
    radius: 0,
    size: "lg",
    color: colours.contrast,
    withThumbIndicator: false,
    styles: {
      track: {
        padding: "1.5em",
        background: colours.white,
        border: `solid 4px ${colours.dark}`,
      },
      thumb: {
        background: checked ? "crimson" : colours.blue,
        border: `solid 4px ${colours.dark}`,
      },
    },
  });

  return {
    colours: colours,
    inset: inset,
    shadow: shadow,
    lightInset: lightInset,
    lightShadow: lightShadow,
    contrastShadow: contrastShadow,
    contrastInset: contrastInset,
    switchStyle: switchStyle,
    button: button,
    input: input,
  };
}

export default Theme;
