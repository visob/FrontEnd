// JavaScript específico para la página de Estiven

// Función para rotar la imagen de perfil
let rotationAngle = 0;
function rotarImagen() {
    const profileImage = document.getElementById('profile-image');
    rotationAngle += 90;
    profileImage.style.transform = `rotate(${rotationAngle}deg)`;
    profileImage.style.transition = 'transform 0.5s ease';
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Esperar un poco para que Bootstrap se cargue completamente
    setTimeout(() => {
        // Inicializar carruseles
        initializeCarousels();
        
        // Agregar efectos de hover a las tarjetas de favoritos
        addHoverEffects();
        
        // Animaciones de entrada
        addScrollAnimations();
    }, 100);
});

// Función para inicializar los carruseles
function initializeCarousels() {
    console.log('Inicializando carruseles...');
    
    // Verificar que Bootstrap esté disponible
    if (typeof bootstrap === 'undefined') {
        console.log('Bootstrap no está disponible');
        return;
    }
    
    const carousels = document.querySelectorAll('.carousel');
    console.log('Carruseles encontrados:', carousels.length);
    
    carousels.forEach((carousel, index) => {
        try {
            console.log(`Inicializando carrusel ${index + 1}:`, carousel.id);
            
            // Limpiar cualquier instancia previa
            const existingInstance = bootstrap.Carousel.getInstance(carousel);
            if (existingInstance) {
                existingInstance.dispose();
            }
            
            // Crear nueva instancia
            const carouselInstance = new bootstrap.Carousel(carousel, {
                interval: 4000,
                wrap: true,
                keyboard: true,
                pause: 'hover',
                ride: 'carousel'
            });
            
            console.log('Carrusel inicializado exitosamente:', carousel.id);
            
        } catch (error) {
            console.error('Error inicializando carrusel:', error);
        }
    });
}

// Función para agregar efectos hover
function addHoverEffects() {
    const favoriteCards = document.querySelectorAll('.favorites-section .card');
    
    favoriteCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Función para animaciones de scroll
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const animatedElements = document.querySelectorAll('.card, .carousel');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Función para cambiar colores de habilidades aleatoriamente
function cambiarColoresHabilidades() {
    const skills = document.querySelectorAll('.skill-tag');
    const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
    
    skills.forEach(skill => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        skill.className = `skill-tag bg-${randomColor} text-white`;
    });
}

// Función para mostrar información adicional
function toggleInfo() {
    const infoExtra = document.getElementById('info-extra');
    const btnInfo = document.getElementById('btn-info');
    
    if (infoExtra) {
        if (infoExtra.style.display === 'none' || !infoExtra.style.display) {
            infoExtra.style.display = 'block';
            infoExtra.style.animation = 'fadeIn 0.5s ease';
            btnInfo.innerHTML = '<i class="bi bi-eye-slash me-1"></i>Ocultar información';
        } else {
            infoExtra.style.display = 'none';
            btnInfo.innerHTML = '<i class="bi bi-eye me-1"></i>Mostrar más información';
        }
    }
}

// Función para animar las barras de progreso
function animarBarrasProgreso() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const width = bar.getAttribute('aria-valuenow');
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = width + '%';
            bar.style.transition = 'width 1.5s ease-in-out';
        }, 200);
    });
}

// Función para efecto typewriter
function typewriterEffect(elementId, text, speed = 50) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    element.innerHTML = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    typeWriter();
}

// Función para mezclar listas de favoritos
function mezclarFavoritos(listId) {
    const list = document.getElementById(listId);
    if (!list) return;
    
    const items = Array.from(list.children);
    
    // Mezclar array
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }
    
    // Limpiar lista y agregar elementos mezclados
    list.innerHTML = '';
    items.forEach(item => {
        item.style.animation = 'slideInLeft 0.5s ease';
        list.appendChild(item);
    });
}

// Agregar estilos de animación CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-30px); }
        to { opacity: 1; transform: translateX(0); }
    }
    
    .skill-tag {
        transition: all 0.3s ease;
    }
    
    .profile-img {
        transition: transform 0.5s ease;
    }
`;
document.head.appendChild(style);