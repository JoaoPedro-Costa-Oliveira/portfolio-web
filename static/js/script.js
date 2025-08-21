document.addEventListener('DOMContentLoaded', () => {

    // MENU HAMBÚRGUER (MOBILE)
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        // Adiciona ou remove a classe do ícone para alternar entre menu e 'x'
        const icon = menuIcon.querySelector('box-icon');
        if (navbar.classList.contains('active')) {
            icon.setAttribute('name', 'x');
        } else {
            icon.setAttribute('name', 'menu');
        }
    });

   
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                menuIcon.querySelector('box-icon').setAttribute('name', 'menu');
            }
        });
    });

    // ANIMAÇÃO DE REVELAR AO ROLAR (SCROLL REVEAL) - REMOVIDO POIS NÃO ESTAVA NO CÓDIGO INICIAL
    // SE QUISER USAR, PRECISA DE UMA BIBLIOTECA COMO SCROLLREVEAL.JS

    // ATUALIZAR LINK ATIVO NO MENU COM SCROLL
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveLink() {
        let currentSectionId = 'home'; // Default to home
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - (window.innerHeight / 2)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    // SOMBRA NO CABEÇALHO AO ROLAR
    const header = document.querySelector('.header');
    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', () => {
        updateActiveLink();
        handleHeaderScroll();
    });

    // Executa as funções uma vez no carregamento da página
    updateActiveLink();
    handleHeaderScroll();
});
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.close-button');
    const overlay = document.querySelector('.turn-phone-overlay');

    if (closeButton && overlay) {
        closeButton.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    }
});
// Seleciona os elementos do HTML
// AQUI ESTÁ A MUDANÇA: o container agora é o carrossel
const container = document.getElementById('carouselExampleIndicators');
const fullscreenBtn = document.getElementById('fullscreen-btn');
const iconEnter = document.getElementById('icon-enter-fs');
const iconExit = document.getElementById('icon-exit-fs');

// Verifica se todos os elementos foram encontrados antes de adicionar os eventos
if (container && fullscreenBtn && iconEnter && iconExit) {
    
    // Adiciona um "ouvinte" de evento de clique ao botão
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            // Pede para o CARROSSEL entrar em tela cheia
            container.requestFullscreen().catch(err => {
                alert(`Erro ao tentar entrar em tela cheia: ${err.message} (${err.name})`);
            });
        } else {
            // Se já estiver, sai do modo tela cheia
            document.exitFullscreen();
        }
    });

    // Ouve por mudanças no estado de tela cheia (ex: usuário pressiona ESC)
    document.addEventListener('fullscreenchange', () => {
        if (document.fullscreenElement) {
            // Entrou em tela cheia: mostra o ícone de "sair"
            iconEnter.style.display = 'none';
            iconExit.style.display = 'block';
        } else {
            // Saiu da tela cheia: mostra o ícone de "entrar"
            iconEnter.style.display = 'block';
            iconExit.style.display = 'none';
        }
    });
}