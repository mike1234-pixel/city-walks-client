const pageTransition = {
    // // animation comes in from the left and slides out to the right
    initial: {
        x: "-100%",
        opacity: 0
      },
      in: {
        x: 0,
        opacity: 1
      },
      out: {
        x: "100%",
        opacity: 0
      },
    duration: {
        duration: 0.5
    }
  };

export default pageTransition