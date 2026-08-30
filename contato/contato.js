// site nao tem backend, entao o "enviar" so monta um email pronto
const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("field-name").value;
  const subject = document.getElementById("field-subject").value;
  const email = document.getElementById("field-email").value;

  const body = `Meu nome é ${name} e quero falar sobre ${subject}. Você pode me encontrar em ${email}.`;

  const mailto = `mailto:thiagodutrasap@gmail.com?subject=${encodeURIComponent(
    "Contato pelo portfólio - " + name,
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
});
