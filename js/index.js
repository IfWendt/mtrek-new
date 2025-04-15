tailwind.config = {
    theme: {
        extend: {
            colors: {
                'mtrek-lilac': '#FF00ED',
                'mtrek-dark-purple': '#3D113A',
                'mtrek-light-purple': '#FFECFE',
                'mtrek-right': '#A32D9B',
            },
            fontFamily: {
                'lato': ['Lato', 'sans-serif'],
            },
            screens: {
                'mm': '400px',  // Nome do breakpoint e valor
            },
        },
    },
}

// JavaScript para trocar a imagem pelo vídeo ao clicar
document.getElementById('thumbnail').addEventListener('click', function () {
    this.style.display = 'none'; // Esconde a imagem
    document.getElementById('youtube-video').style.display = 'block'; // Mostra o vídeo
});

// Função para abrir o popup
function openPopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Função para fechar o popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Função para alternar o accordion
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const isActive = element.classList.contains('active');

    // Fecha todos os outros accordions
    document.querySelectorAll('.accordion-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.nextElementSibling.style.maxHeight = '0';
    });

    if (!isActive) {
        // Abre o accordion clicado
        element.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}

// Animação de scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de fade-in para elementos ao rolar
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
});

// Validação do formulário
const form = document.getElementById('mauticform_formulariosejavipetransformeseufuturoagora');
if (form) {
    form.addEventListener('submit', function(e) {
        const inputs = form.querySelectorAll('input[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('border-red-500');
            } else {
                input.classList.remove('border-red-500');
            }
        });

        if (!isValid) {
            e.preventDefault();
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
}

// Animação do vídeo
const videoContainer = document.querySelector('.video-container');
const thumbnail = document.getElementById('thumbnail');
const video = document.getElementById('youtube-video');

if (videoContainer && thumbnail && video) {
    thumbnail.addEventListener('click', () => {
        thumbnail.style.display = 'none';
        video.style.display = 'block';
        video.src += '&autoplay=1';
    });
}

// Menu mobile
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Contador de números
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Inicializar contadores quando visíveis
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const end = parseInt(element.getAttribute('data-end'));
            animateValue(element, 0, end, 2000);
            counterObserver.unobserve(element);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(counter => {
    counterObserver.observe(counter);
});

/** This section is only needed once per page if manually copying **/
if (typeof MauticSDKLoaded == 'undefined') {
    var MauticSDKLoaded = true;
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://mautic.mtrek.com.br/media/js/mautic-form.js?v4422cfce';
    script.onload = function () {
        MauticSDK.onLoad();
    };
    head.appendChild(script);
    var MauticDomain = 'https://mautic.mtrek.com.br';
    var MauticLang = {
        'submittingMessage': "Por favor, aguarde..."
    }
} else if (typeof MauticSDK != 'undefined') {
    MauticSDK.onLoad();
}



(function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
    w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
    m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://mautic.mtrek.com.br/mtc.js','mt');

mt('send', 'pageview');