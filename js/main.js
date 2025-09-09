// Funciones principales de interactividad

// Función para mostrar mensaje de bienvenida en la portada
function mostrarBienvenida() {
    const mensaje = document.createElement('div');
    mensaje.className = 'alert alert-success alert-dismissible fade show';
    mensaje.innerHTML = `
        <strong>¡Bienvenido a nuestro equipo!</strong> Explora las páginas de cada integrante para conocer más sobre nosotros.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const container = document.querySelector('.container');
    if (container) {
        container.insertBefore(mensaje, container.firstChild);
        
        // Auto-ocultar después de 5 segundos
        setTimeout(() => {
            if (mensaje.parentNode) {
                mensaje.remove();
            }
        }, 5000);
    }
}

// Función para animar las tarjetas al cargar
function animarTarjetas() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Función para cambiar tema (modo oscuro/claro)
function toggleTema() {
    const body = document.body;
    const isDark = body.classList.contains('dark-theme');
    
    if (isDark) {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// Función para mostrar/ocultar información adicional en perfiles
function toggleInfo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'block';
            element.style.animation = 'fadeInUp 0.5s ease';
        } else {
            element.style.display = 'none';
        }
    }
}

// Función para cambiar colores de habilidades aleatoriamente
function cambiarColoresHabilidades() {
    const skills = document.querySelectorAll('.skill-tag');
    const colores = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#34495e'];
    
    skills.forEach(skill => {
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        skill.style.backgroundColor = colorAleatorio;
        skill.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            skill.style.transform = 'scale(1)';
        }, 200);
    });
}

// Función para mostrar alerta personalizada
function mostrarAlerta(mensaje, tipo = 'info') {
    const alerta = document.createElement('div');
    alerta.className = `alert alert-${tipo} alert-dismissible fade show position-fixed`;
    alerta.style.top = '20px';
    alerta.style.right = '20px';
    alerta.style.zIndex = '9999';
    alerta.style.minWidth = '300px';
    
    alerta.innerHTML = `
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alerta);
    
    // Auto-remover después de 4 segundos
    setTimeout(() => {
        if (alerta.parentNode) {
            alerta.remove();
        }
    }, 4000);
}

// Función para animar el scroll suave
function scrollSuave(targetId) {
    if (targetId === 'top') {
        // Scroll al inicio de la página
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// Función para contador animado
function contadorAnimado(elementId, valorFinal, duracion = 2000) {
    const elemento = document.getElementById(elementId);
    if (!elemento) return;
    
    const valorInicial = 0;
    const incremento = valorFinal / (duracion / 16);
    let valorActual = valorInicial;
    
    const timer = setInterval(() => {
        valorActual += incremento;
        if (valorActual >= valorFinal) {
            valorActual = valorFinal;
            clearInterval(timer);
        }
        elemento.textContent = Math.floor(valorActual);
    }, 16);
}

// Función para efecto de escritura (typewriter)
function efectoEscritura(elementId, texto, velocidad = 100) {
    const elemento = document.getElementById(elementId);
    if (!elemento) return;
    
    elemento.textContent = '';
    let i = 0;
    
    const timer = setInterval(() => {
        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, velocidad);
}

// Función para validar formularios (si se necesita)
function validarFormulario(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let esValido = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('is-invalid');
            esValido = false;
        } else {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        }
    });
    
    return esValido;
}

// Event listeners que se ejecutan al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Cargar tema guardado
    const temaGuardado = localStorage.getItem('theme');
    if (temaGuardado === 'dark') {
        document.body.classList.add('dark-theme');
    }
    
    // Animar tarjetas si existen
    if (document.querySelectorAll('.card').length > 0) {
        setTimeout(animarTarjetas, 500);
    }
    
    // Agregar event listeners a botones específicos
    const btnBienvenida = document.getElementById('btn-bienvenida');
    if (btnBienvenida) {
        btnBienvenida.addEventListener('click', mostrarBienvenida);
    }
    
    const btnTema = document.getElementById('btn-tema');
    if (btnTema) {
        btnTema.addEventListener('click', toggleTema);
    }
    
    const btnColores = document.getElementById('btn-colores');
    if (btnColores) {
        btnColores.addEventListener('click', cambiarColoresHabilidades);
    }
    
    // Efecto parallax simple en el hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Mostrar elementos al hacer scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos con clase 'observe'
    document.querySelectorAll('.observe').forEach(el => {
        observer.observe(el);
    });
});

// Estilos para tema oscuro
const darkThemeStyles = `
    .dark-theme {
        background-color: #1a1a1a !important;
        color: #ffffff !important;
    }
    
    .dark-theme .card {
        background-color: #2d2d2d !important;
        color: #ffffff !important;
    }
    
    .dark-theme .navbar {
        background: linear-gradient(135deg, #1a1a1a, #2d2d2d) !important;
    }
    
    .dark-theme footer {
        background-color: #1a1a1a !important;
    }
`;

// Agregar estilos de tema oscuro al head
if (!document.getElementById('dark-theme-styles')) {
    const style = document.createElement('style');
    style.id = 'dark-theme-styles';
    style.textContent = darkThemeStyles;
    document.head.appendChild(style);
}