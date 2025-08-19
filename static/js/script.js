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
    const fullscreenButton = document.getElementById('fullscreen-button');
    const carouselElement = document.querySelector('.demo');
    const rotateOverlay = document.querySelector('.turn-phone-overlay');

    // Função para verificar se o dispositivo é um celular (largura <= 576px) e está em modo retrato
    const isMobilePortrait = () => {
        // A largura do viewport é menor ou igual a 576px (tamanho típico de celulares)
        const isMobile = window.innerWidth <= 576;
        // A altura é maior que a largura (orientação retrato)
        const isPortrait = window.innerHeight > window.innerWidth;
        return isMobile && isPortrait;
    };

    if (fullscreenButton && carouselElement && rotateOverlay) {
        fullscreenButton.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                // Tentativa de entrar em tela cheia
                if (carouselElement.requestFullscreen) {
                    carouselElement.requestFullscreen();
                } else if (carouselElement.webkitRequestFullscreen) {
                    carouselElement.webkitRequestFullscreen();
                }

                // Verifica se é um celular em modo retrato APÓS a tentativa de tela cheia
                if (isMobilePortrait()) {
                    rotateOverlay.style.display = 'flex';
                }
            } else {
                // Tentativa de sair da tela cheia
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        });

        // Evento para esconder o aviso ao sair da tela cheia (por botão ou gesto)
        document.addEventListener('fullscreenchange', () => {
            if (!document.fullscreenElement) {
                // Se saiu da tela cheia, esconda o overlay
                rotateOverlay.style.display = 'none';
            }
            updateButtonText(); // Adicione essa função para atualizar o texto
        });

        // Evento para esconder o aviso quando o celular for girado em tela cheia
        window.addEventListener('resize', () => {
            if (document.fullscreenElement && !isMobilePortrait()) {
                // Se estiver em tela cheia e não for mais retrato, esconda o overlay
                rotateOverlay.style.display = 'none';
            }
        });

        // Função para atualizar o texto do botão, se desejar
        const updateButtonText = () => {
            if (document.fullscreenElement) {
                fullscreenButton.textContent = 'Sair da Tela Cheia';
            } else {
                fullscreenButton.textContent = 'Tela Cheia';
            }
        };

        // Chame a função inicialmente para garantir o texto correto
        updateButtonText();
    }
});