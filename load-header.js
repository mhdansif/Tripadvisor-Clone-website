document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;

      // Toggle headers on scroll
      const headerFull = document.getElementById("headerFull");
      const headerCompact = document.getElementById("headerCompact");
      const subNav = document.querySelector(".sub-nav");

      const onlyCompact = document.body.classList.contains("only-compact");

      if (onlyCompact) {
        headerFull?.remove(); // Remove full header for inner pages
        headerCompact?.classList.remove("hidden");
        subNav?.classList.remove("hidden");
      } else {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            headerFull?.classList.add("hidden");
            headerCompact?.classList.remove("hidden");
            subNav?.classList.remove("hidden");
          } else {
            headerFull?.classList.remove("hidden");
            headerCompact?.classList.add("hidden");
            subNav?.classList.add("hidden");
          }
        });
      }
    });
});
