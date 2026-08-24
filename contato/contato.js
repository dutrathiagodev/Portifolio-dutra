const currentPage = window.location.pathname;

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  const linkPath = new URL(link.href).pathname;

  if (currentPage.endsWith(linkPath)) {
    link.classList.add("active");
  }
});

// site nao tem backend, entao o "enviar" so monta um email pronto
const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("field-name").value;
  const subject = document.getElementById("field-subject").value;
  const email = document.getElementById("field-email").value;

  const body = `Meu nome é ${name} e eu tenho ${subject} que precisa de ajuda. Você pode me encontrar em ${email}.`;

  const mailto = `mailto:thiagodutrasap@gmail.com?subject=${encodeURIComponent(
    "Contato pelo portfólio - " + name,
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
});
