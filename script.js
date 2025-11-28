const button = document.getElementById("helloBtn");
const message = document.getElementById("message");

const buttonBanaBas = document.getElementById("banaBasBtn");
const messageBanaBas = document.getElementById("banaBasMessage");

button.addEventListener("click", () => {
  message.textContent = "Süper! Artık temel HTML, CSS ve JavaScript biliyoruz. 🚀";
});

buttonBanaBas.addEventListener("click", () => {
  messageBanaBas.textContent = "Tebrikler! Bana Bastin, eee ne oldu simdi !";
});
