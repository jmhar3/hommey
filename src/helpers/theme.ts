import { selectDarkMode } from "../state/darkModeSlice";
import { useAppSelector } from "../state/hooks";

function Theme() {
  const darkMode = useAppSelector(selectDarkMode);

  if (darkMode) {
    const colours = {
      white: "#F7F5F0",
      light: "#F3EDE5",
      mid: "#EAE0D7",
      dark: "#281401",
      contrast: "#F07800",
      blue: "#3A58EF",
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

  const colours = {
    white: "antiquewhite",
    light: "antiquewhite",
    mid: "antiquewhite",
    dark: "#1E285A",
    contrast: "#D80000",
    blue: "#D80000",
  };

  const inset = {
    bdrs: "0",
    c: colours.dark,
    bd: "solid 2px crimson",
  };

  const shadow = {
    bdrs: "0",
    c: colours.dark,
    bd: "solid 2px crimson",
  };

  const lightInset = {
    bdrs: "0",
    c: colours.dark,
    bg: colours.light,
    bd: "solid 2px crimson",
  };

  const contrastInset = {
    bdrs: "0",
    c: colours.dark,
    bg: colours.light,
    bd: "solid 2px crimson",
  };

  const contrastShadow = {
    bdrs: "0",
    c: colours.dark,
    bg: colours.light,
    bd: "solid 2px crimson",
  };

  const lightShadow = {
    bdrs: "0",
    c: colours.dark,
    bg: colours.light,
    bd: "solid 2px crimson",
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
