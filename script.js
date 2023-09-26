window.addEventListener("scroll", () => {
    const headr = document.querySelector("header");
    headr.classList.toggle("scrolling", scrollY > 0);
  });

var typed = new Typed('#element', {
    strings: ["Fullstack Web Developer"
    , "Problem solver", 
    ""],
    smartBackspace: true,
    loop: true,
    typeSpeed: 65,
    shuffle: true
  });