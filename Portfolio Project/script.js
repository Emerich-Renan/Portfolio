let isScrolling = false;
function activateTab(tab) {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
}

const tabs = document.querySelectorAll('.navbar a');
tabs.forEach(tab => {
    tab.addEventListener('click', function(event) {
        event.preventDefault();
        activateTab(this);
        isScrolling = true;
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        setTimeout(() => {
            isScrolling = false;
        }, 800);
    });
});

window.addEventListener('scroll', () => {
    if (isScrolling) return;

    let scrollPosition = window.scrollY;

    tabs.forEach(tab => {
        const section = document.querySelector(tab.getAttribute('href'));

        
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activateTab(tab);
        }
    });
});

document.addEventListener('DOMContentLoaded',function() {
    const dataNascimento = new Date('2005/09/08');
    const hoje = new Date();
    var anos = hoje.getFullYear() - dataNascimento.getFullYear();
    var meses = hoje.getMonth() - dataNascimento.getMonth();
    var dias = hoje.getDate() - dataNascimento.getDate();
    var idade = anos;
    if(meses <= 0 && dias < 0)
      idade--;
    
  document.getElementById('idade').textContent = idade.toString();
});


function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
}
document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();
    
    const nome = document.querySelector('input[placeholder="Nome Completo"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const celular = document.querySelector('input[placeholder="Celular"]').value;
    const assunto = document.querySelector('input[placeholder="Assunto"]').value;
    const mensagem = document.querySelector('textarea').value;

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      nome: nome,
      email: email,
      celular: celular,
      assunto: assunto,
      mensagem: mensagem
    }).then(function(response) {
      alert("Sua mensagem foi enviada!");
      document.querySelector('form').reset();
    }, function(error) {
      alert("Erro ao enviar a mensagem: " + JSON.stringify(error));
    });
  });  