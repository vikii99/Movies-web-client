const uiConfigs = {
  style: {
    gradientBgImage: {
      dark: {
        backgroundImage:
          "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
      },
      light: {
        backgroundImage:
          "linear-gradient(to top, rgba(245,245,245,1), rgba(0,0,0,0))",
      },
    },
    horizontalGradientBgImage: {
      dark: {
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.2))",
      },
      light: {
        backgroundImage:
          "linear-gradient(to right, rgba(245,245,245,0), rgba(0,0,0,0))",
      },
    },
    textShadow: {
      light: {
        textShadow: "2px 2px 8px #ffffff",
      },
      dark: {
        textShadow: "2px 2px 8px #000000",
      },
    },
    typoLines: (lines, textAlign) => ({
      textAlign: textAlign || "justify",
      display: "-webkit-box",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: lines,
    }),
    mainContent: {
      maxWidth: "1366px",
      margin: "auto",
      padding: 2,
    },
    backgroundImage: (imgPath) => ({
      position: "relative",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "darkgrey",
      backgroundImage: `url(${imgPath})`,
    }),
  },
  size: {
    sidebarWith: "300px",
    contentMaxWidth: "1366px",
  },
};

export default uiConfigs;
