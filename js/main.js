// Funciones principales de interactividad

// Función para mostrar mensaje de bienvenida en la portada
function mostrarBienvenida() {
    // Obtener la hora actual
    const ahora = new Date();
    const hora = ahora.getHours();
    let saludo;
    
    if (hora < 12) {
        saludo = '¡Buenos días!';
    } else if (hora < 18) {
        saludo = '¡Buenas tardes!';
    } else {
        saludo = '¡Buenas noches!';
    }
    
    const horaFormateada = ahora.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // Crear contenedor de toasts si no existe
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'toast-container position-fixed top-0 end-0 p-3';
        toastContainer.style.zIndex = '9999';
        document.body.appendChild(toastContainer);
    }
    
    // Crear el toast
    const toastElement = document.createElement('div');
    toastElement.className = 'toast show';
    toastElement.setAttribute('role', 'alert');
    toastElement.setAttribute('aria-live', 'assertive');
    toastElement.setAttribute('aria-atomic', 'true');
    
    toastElement.innerHTML = `
        <div class="toast-header bg-success text-white">
            <i class="bi bi-hand-thumbs-up me-2"></i>
            <strong class="me-auto">${saludo}</strong>
            <small class="text-white-50">${horaFormateada}</small>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            <strong>¡Bienvenido a nuestro equipo!</strong> Explora las páginas de cada integrante para conocer más sobre nosotros.
        </div>
    `;
    
    toastContainer.appendChild(toastElement);
    
    // Inicializar el toast de Bootstrap
    const toast = new bootstrap.Toast(toastElement, {
        autohide: true,
        delay: 5000
    });
    
    toast.show();
    
    // Remover el elemento del DOM después de que se oculte
    toastElement.addEventListener('hidden.bs.toast', () => {
        toastElement.remove();
    });
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

    
       // Inicializar efecto typeWriter
    const tituloElement = document.getElementById('typing-title');
    if (tituloElement) {
        typeWriter(tituloElement, "Equipo Innovador", 100);
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



function typeWriter(element, text, speed = 20) {
    let i = 0;
    element.innerHTML = ''; // Limpia el contenido inicial
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    
    typing();
}