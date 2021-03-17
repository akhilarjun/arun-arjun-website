setTimeout(() => {
  if (VanillaTilt) {
    console.log("Initializing Tilt");
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
  }
}, 200);
