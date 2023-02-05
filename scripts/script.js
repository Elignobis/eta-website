window.onscroll = function() {
    const primaryNav = document.querySelector("#primary-nav");
    const secondaryNav = document.querySelector("#secondary-nav");
  
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      primaryNav.style.display = "none";
      secondaryNav.style.display = "flex";
    } else {
      primaryNav.style.display = "flex";
      secondaryNav.style.display = "none";
    }
  };