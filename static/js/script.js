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
 const carouselElement = document.querySelector('.demo'); // Ou o elemento que você quer colocar em tela cheia

 if (fullscreenButton && carouselElement) {
  fullscreenButton.addEventListener('click', () => {
   if (!document.fullscreenElement) {
    if (carouselElement.requestFullscreen) {
     carouselElement.requestFullscreen();
    } else if (carouselElement.mozRequestFullScreen) { /* Firefox */
     carouselElement.mozRequestFullScreen();
    } else if (carouselElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
     carouselElement.webkitRequestFullscreen();
    } else if (carouselElement.msRequestFullscreen) { /* IE/Edge */
     carouselElement.msRequestFullscreen();
    }
    fullscreenButton.textContent = 'Sair da Tela Cheia';
   } else {
    if (document.exitFullscreen) {
     document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
     document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
     document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
     document.msExitFullscreen();
    }
    fullscreenButton.textContent = 'Tela Cheia';
   }
  });

  // Opcional: Atualizar o texto do botão ao sair da tela cheia por outros meios (botão padrão do navegador)
  document.addEventListener('fullscreenchange', () => {
   if (!document.fullscreenElement) {
    fullscreenButton.textContent = 'Tela Cheia';
   } else {
    fullscreenButton.textContent = 'Sair da Tela Cheia';
   }
  });

  document.addEventListener('mozfullscreenchange', () => {
   if (!document.mozFullScreen) {
    fullscreenButton.textContent = 'Tela Cheia';
   } else {
    fullscreenButton.textContent = 'Sair da Tela Cheia';
   }
  });

  document.addEventListener('webkitfullscreenchange', () => {
   if (!document.webkitIsFullScreen) {
    fullscreenButton.textContent = 'Tela Cheia';
   } else {
    fullscreenButton.textContent = 'Sair da Tela Cheia';
   }
  });

  document.addEventListener('msfullscreenchange', () => {
   if (!document.msFullscreenElement) {
    fullscreenButton.textContent = 'Tela Cheia';
   } else {
    fullscreenButton.textContent = 'Sair da Tela Cheia';
   }
  });
 }
});