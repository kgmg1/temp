const navsP = document.querySelectorAll("[aria-controls^=navp-]");
const navsC = document.querySelectorAll("[aria-controls^=navc-]");
const toggleNav = document.getElementById("toggle-nav");
const mainNav = document.getElementById("main-nav");
const closeItems = document.querySelectorAll("[id^=clo-]");

if (navsP != null) {
  navsP.forEach((nav, i, p) => {
    nav.addEventListener("click", (e) => {      
      p.forEach(n => {        
        if ((n.getAttribute("aria-controls") !== nav.getAttribute("aria-controls")) && (document.getElementById(n.getAttribute("aria-controls")).getAttribute("data-visible") === "true")) {
          n.setAttribute("aria-expanded", false);
          document.getElementById(n.getAttribute("aria-controls")).setAttribute("data-visible", false);
        }
      });      
      const visibility = document.getElementById(nav.getAttribute("aria-controls")).getAttribute("data-visible");
      if (visibility === "false") {
        document.getElementById(nav.getAttribute("aria-controls")).setAttribute("data-visible", true);
        nav.setAttribute("aria-expanded", true);
      } else {
        document.getElementById(nav.getAttribute("aria-controls")).setAttribute("data-visible", false);
        nav.setAttribute("aria-expanded", false);
      }      
    });
  });
}

if (navsC != null) {
  navsC.forEach((nav, i, p) => {
    nav.addEventListener("click", (e) => {            
      const visibility = document.getElementById(nav.getAttribute("aria-controls")).getAttribute("data-visible");
      if (visibility === "false") {
        document.getElementById(nav.getAttribute("aria-controls")).setAttribute("data-visible", true);
        nav.setAttribute("aria-expanded", true);
      } else {
        document.getElementById(nav.getAttribute("aria-controls")).setAttribute("data-visible", false);
        nav.setAttribute("aria-expanded", false);
      }      
    });
  });
}

if (toggleNav != null) {
  toggleNav.addEventListener("click", (e) => {    
    const visibility = mainNav.getAttribute("data-visible");
    if (visibility === "false") {
      toggleNav.setAttribute("aria-expanded", true);
      mainNav.setAttribute("data-visible", true);
    } else {
      toggleNav.setAttribute("aria-expanded", false);
      mainNav.setAttribute("data-visible", false);
    }
  });
}

if (closeItems != null) {
  closeItems.forEach((closeItem, i, p) => {
    closeItem.addEventListener("click", (e) => {
      console.log(closeItem.getAttribute("id").replace("clo-", ""));
      document.getElementById(closeItem.getAttribute("id").replace("clo-", "")).setAttribute("data-visible", false);
      document.getElementById("toggle-".concat(closeItem.getAttribute("id").replace("clo-", ""))).setAttribute("aria-expanded", false);
    });
  });
}