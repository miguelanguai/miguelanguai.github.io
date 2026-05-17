"use strict";

function copiarTexto() {
  const email = document.getElementById("mailText").textContent;
  const btn = document.getElementById("copyMailBtn");
  const label = btn.querySelector("span");

  navigator.clipboard.writeText(email).then(() => {
    label.textContent = "¡Copiado!";
    setTimeout(() => { label.textContent = "Copiar email"; }, 2000);
  });
}
