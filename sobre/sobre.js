const currentPage = window.location.pathname;

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  const linkPath = new URL(link.href).pathname;

  if (currentPage.endsWith(linkPath)) {
    link.classList.add("active");
  }
});
