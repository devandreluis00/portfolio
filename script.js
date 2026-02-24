(function(){
    emailjs.init("IDEMAIL");
})();

const modal = document.getElementById("email-modal");
const btn = document.getElementById("email-btn");
const closeBtn = document.querySelector(".modal .close");

btn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if(e.target == modal) modal.style.display = "none"; }

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    status.textContent = "Enviando...";

    emailjs.sendForm('IDEMAIL', 'IDEMAIL', this)
        .then(() => {
            status.textContent = "Mensagem enviada com sucesso!";
            form.reset();
        }, (err) => {
            console.error(err);
            status.textContent = "Erro ao enviar mensagem. Tente novamente.";
        });
});