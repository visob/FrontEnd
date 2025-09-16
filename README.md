# Equipo Innovador - Sitio Web del Equipo

## Descripción del Proyecto

Este proyecto consiste en el desarrollo de un sitio web responsivo y moderno para presentar a nuestro equipo de trabajo "Equipo Innovador". El sitio web incluye una página principal con información del equipo, páginas individuales para cada uno de los 5 integrantes con sus perfiles personales completos, y una sección de bitácora que documenta todo el proceso de desarrollo.

El objetivo principal es crear una plataforma digital que permita conocer a cada miembro del equipo, sus habilidades, intereses, experiencia, películas favoritas y gustos musicales, mientras se demuestra el dominio de tecnologías web modernas y buenas prácticas de desarrollo.

## Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos personalizados con variables, flexbox y grid
- **JavaScript ES6+**: Interactividad y funcionalidades dinámicas
- **Bootstrap 5.3.0**: Framework CSS para diseño responsivo y componentes
- **Bootstrap Icons**: Iconografía moderna y consistente

### Tipografías y Recursos
- **Google Fonts**: Poppins y Roboto para mejorar la estética y legibilidad
- **SVG**: Gráficos vectoriales para avatares y logo del equipo
- **CSS Variables**: Para mantener consistencia en colores y estilos
- **LocalStorage**: Persistencia de preferencias del usuario (tema)

### Herramientas de Desarrollo
- **Media Queries**: Diseño responsivo con breakpoints específicos
- **Flexbox y CSS Grid**: Layouts modernos y flexibles
- **Intersection Observer API**: Animaciones basadas en scroll
- **CSS Transitions y Animations**: Efectos visuales suaves

## Estructura del Proyecto

```
Presentacion/
├── index.html              # Página principal del equipo
├── lucas.html              # Perfil individual de Lucas
├── victoria.html           # Perfil individual de Victoria
├── sebastian.html          # Perfil individual de Sebastián
├── luis.html               # Perfil individual de Luis
├── estiven.html            # Perfil individual de Estiven
├── bitacora.html          # Documentación del proceso de desarrollo
├── README.md              # Documentación del proyecto
├── css/
    ├── styles.css          # Estilos personalizados del sitio
    ├── victoria.svg        # Estilos personalizados de pagina personal Victoria
    ├── lucas.svg           # Estilos personalizados de pagina personal Lucas
    ├── estiven.svg         # Estilos personalizados de pagina personal Estiven
│   └── jose.css         # Estilos personalizados del sitio
├── js/
    ├── estiven.js        # JavaScript de Estiven con las funcionalidades de su pagina personal
    ├── lucas.js          # JavaScript de Lucas con las funcionalidades de su pagina personal
    ├── wolverine.js      # JavaScript de Jose con las funcionalidades de su pagina personal
│   └── main.js           # JavaScript principal con todas las funcionalidades
└── img/
    ├── logo.svg          # Logo del equipo
    ├── avatar1.svg       # Avatar de Lucas
    ├── avatar2.svg       # Avatar de Victoria
    ├── avatar3.svg       # Avatar de Sebastián
    ├── avatar4.svg       # Avatar de Luis
    └── avatar5.svg       # Avatar de Estiven
```

## Estructura de Archivos

La organización del proyecto sigue las mejores prácticas de desarrollo web:

### Archivos HTML
- **Ubicación**: Directorio raíz del proyecto
- **Propósito**: Todas las páginas HTML están en la raíz para facilitar la navegación y el acceso directo
- **Archivos**: `index.html` (página principal), páginas individuales de cada integrante, y `bitacora.html`

### Carpeta CSS (`css/`)
- **Contenido**: Archivo `styles.css` con todos los estilos personalizados
- **Organización**: Estilos organizados por secciones (variables, componentes, responsive, tema oscuro)
- **Integración**: Bootstrap importado via CDN, Google Fonts integradas

### Carpeta JavaScript (`js/`)
- **Contenido**: Archivo `main.js` con todas las funcionalidades interactivas
- **Estructura**: Funciones globales, específicas por página, y utilidades compartidas
- **Compatibilidad**: JavaScript ES6+ con fallbacks para navegadores antiguos

### Carpeta de Imágenes (`img/`)
- **Formato**: Archivos SVG para gráficos vectoriales escalables
- **Contenido**: Avatares personalizados para cada integrante y logo del equipo
- **Ventajas**: Archivos ligeros, escalables y editables

### Documentación
- **README.md**: Documentación completa del proyecto en el directorio raíz
- **Contenido**: Descripción, tecnologías, instalación, y guías de uso

## Funcionalidades Implementadas

### Página Principal (index.html)
- **Mensaje de Bienvenida Dinámico**: Botón que muestra un saludo personalizado con la hora actual
- **Animación de Tarjetas**: Las tarjetas de los miembros se animan al cargar la página
- **Contadores Animados**: Estadísticas del equipo que se animan al hacer scroll
- **Cambio de Tema**: Toggle entre modo claro y oscuro con persistencia
- **Efecto Parallax**: Efecto visual en la sección hero
- **Navegación Suave**: Scroll suave entre secciones

### Páginas Individuales

#### Lucas (lucas.html)
- **Perfil Completo**: Técnico en electrónica, empleado administrativo, gestión y ventas a tiempo completo, apasionado por la técnologia y el desarrollo.
- **Ubicación**: Villa Devoto, CABA (31 años)
- **Habilidades**: HTML, CSS, JavaScript, POO, SQL, C#, GIT, Kotlin, Modelado y diseño de software.
- **Secciones**: Información personal, habilidades técnicas, experiencia, películas favoritas y música

#### Victoria (victoria.html)
- **Perfil Completo**: UX/UI Designer con experiencia en diseño centrado en el usuario
- **Ubicación**: Buenos Aires, Argentina (23 años)
- **Habilidades**: Figma, Adobe Suite, Prototipado, HTML, CSS, JavaScript, Kotlin
- **Secciones**: Información personal, habilidades técnicas, proyectos destacados, películas favoritas y música

#### Sebastián (sebastian.html)
- **Perfil Completo**: Backend Developer especializado en Python y APIs
- **Ubicación**: Mendoza, Argentina (40 años)
- **Habilidades**: Python, Django, Flask, FastAPI, PostgreSQL, Docker, AWS
- **Secciones**: Información personal, habilidades técnicas, experiencia, películas favoritas y música

#### Luis (luis.html)
- **Perfil Completo**: Mobile Developer especializado en desarrollo multiplataforma
- **Ubicación**: Sevilla, España (28 años)
- **Habilidades**: React Native, Flutter, JavaScript, TypeScript, Firebase, MongoDB, AWS
- **Secciones**: Información personal, habilidades técnicas, experiencia, películas favoritas y música

#### Estiven (estiven.html)
- **Perfil Completo**: AI/ML Engineer especializado en inteligencia artificial
- **Ubicación**: Buenos Aires, Argentina (31 años)
- **Habilidades**: NodeJS, MySQL, Express, NestJS, NextJS, Python, C#, .NET
- **Secciones**: Información personal, habilidades técnicas, experiencia, películas favoritas y música

### Bitácora (bitacora.html)
- **Resumen Ejecutivo**: Generación dinámica de resumen del proyecto
- **Timeline Interactivo**: Documentación visual del proceso de desarrollo
- **Animaciones de Entrada**: Efectos de aparición basados en scroll
- **Navegación Contextual**: Enlaces directos a secciones específicas

### Funcionalidades Globales
- **Tema Dinámico**: Sistema completo de modo claro/oscuro
- **Diseño Responsivo**: Adaptación a dispositivos móviles, tablets y desktop
- **Navegación Intuitiva**: Menú de navegación con dropdown y enlaces contextuales
- **Alertas Personalizadas**: Sistema de notificaciones para interacciones
- **Scroll Suave**: Navegación fluida entre secciones
- **Animaciones CSS**: Transiciones y efectos visuales en toda la aplicación

## Diseño Responsivo

El sitio web está optimizado para diferentes tamaños de pantalla con los siguientes breakpoints:

- **400px**: Dispositivos móviles pequeños
  - Layout de una columna
  - Navegación colapsable
  - Texto y botones optimizados para touch
  - Imágenes redimensionadas

- **900px**: Tablets y pantallas medianas
  - Layout de dos columnas en secciones principales
  - Navegación horizontal
  - Tarjetas reorganizadas para mejor aprovechamiento del espacio

- **1200px**: Pantallas de escritorio grandes
  - Layout completo de tres columnas donde aplique
  - Navegación completa visible
  - Máximo aprovechamiento del espacio disponible
  - Efectos hover más prominentes

## Características Técnicas

### Accesibilidad
- Estructura HTML semántica
- Atributos ARIA apropiados
- Contraste de colores optimizado
- Navegación por teclado
- Textos alternativos en imágenes

### Performance
- Imágenes SVG para gráficos escalables
- CSS optimizado con variables
- JavaScript modular y eficiente
- Carga asíncrona de recursos
- Animaciones optimizadas para GPU

### Compatibilidad
- Soporte para navegadores modernos
- Fallbacks para funcionalidades avanzadas
- Progressive enhancement
- Validación HTML5 y CSS3

## Instalación y Uso

1. **Clonar o descargar** el proyecto en tu máquina local
2. **Abrir** el archivo `index.html` en tu navegador web preferido
3. **Navegar** por las diferentes secciones usando el menú de navegación
4. **Explorar** las funcionalidades interactivas en cada página
5. **Probar** el diseño responsivo redimensionando la ventana del navegador

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para cargar Bootstrap y Google Fonts desde CDN)
- JavaScript habilitado para funcionalidades interactivas

## Estructura de Archivos CSS

El archivo `styles.css` está organizado en las siguientes secciones:

1. **Variables CSS**: Colores, fuentes y espaciados
2. **Estilos Base**: Reset y estilos generales
3. **Componentes**: Navbar, cards, botones, footer
4. **Páginas Específicas**: Estilos únicos para cada página
5. **Responsive Design**: Media queries para diferentes dispositivos
6. **Animaciones**: Keyframes y transiciones
7. **Tema Oscuro**: Estilos para el modo oscuro

## JavaScript - Funciones Dinámicas Implementadas

### Página Principal (`index.html`)

#### Sección Hero/Portada
- **Mensaje de Bienvenida Dinámico**: Función `mostrarBienvenida()` que muestra un saludo personalizado con la hora actual al hacer clic en el botón "¡Conoce al equipo!"
- **Efecto Parallax**: Animación de fondo que se mueve a diferente velocidad durante el scroll
- **Animación de Entrada**: Efectos fade-in en elementos al cargar la página

#### Sección de Equipo
- **Animación de Tarjetas**: Función `animarTarjetas()` que hace aparecer las tarjetas de los integrantes con efecto de deslizamiento
- **Efectos Hover**: Transformaciones y sombras al pasar el mouse sobre las tarjetas

#### Sección de Estadísticas
- **Contadores Animados**: Función `animarContadores()` que incrementa los números desde 0 hasta el valor final cuando la sección es visible
- **Intersection Observer**: Detecta cuando los elementos entran en el viewport para activar animaciones

#### Funcionalidades Globales
- **Cambio de Tema**: Función `toggleTema()` para alternar entre modo claro y oscuro con persistencia en localStorage
- **Scroll Suave**: Función `scrollSuave()` para navegación fluida entre secciones
- **Sistema de Alertas**: Función `mostrarAlerta()` para notificaciones personalizadas

### Páginas Individuales

Cada página individual de los integrantes del equipo incluye funcionalidades interactivas específicas:

#### Funcionalidades Comunes en Todas las Páginas
- **Diseño Responsivo**: Adaptación completa a dispositivos móviles, tablets y desktop
- **Navegación Integrada**: Menú de navegación con dropdown que incluye todos los 5 integrantes
- **Secciones Completas**: Información personal, habilidades técnicas, experiencia profesional
- **Entretenimiento**: Secciones de películas favoritas y música con descripciones detalladas
- **Efectos Visuales**: Animaciones CSS y transiciones suaves en toda la interfaz

#### Bitácora (`bitacora.html`)
- **Resumen Ejecutivo**: Función `mostrarResumen()` que genera y muestra dinámicamente un resumen del proyecto
- **Timeline Interactivo**: Animaciones de entrada basadas en scroll para las fases del proyecto
- **Navegación Contextual**: Scroll automático hacia secciones específicas
- **Efectos de Aparición**: Intersection Observer para animar elementos al entrar en viewport

### Utilidades Compartidas

El archivo `main.js` incluye funciones globales disponibles en todas las páginas:

1. **Gestión de Temas**: Sistema completo de modo claro/oscuro con persistencia
2. **Animaciones**: Efectos visuales y transiciones suaves
3. **Navegación**: Scroll suave y navegación entre secciones
4. **Interactividad**: Event listeners y manipulación del DOM
5. **Utilidades**: Funciones helper para alertas, validaciones y efectos visuales

## Créditos y Reconocimientos

- **Bootstrap Team**: Por el excelente framework CSS
- **Google Fonts**: Por las tipografías Poppins y Roboto
- **Bootstrap Icons**: Por la iconografía moderna
- **Equipo de Desarrollo**: Lucas, Victoria, Sebastián, Luis y Estiven
- **Ubicación**: Bilbao, España
- **Edad**: 25 años

## Licencia

Este proyecto es de uso educativo y está disponible bajo licencia MIT.

---

**Equipo Innovador** - Desarrollando el futuro, una línea de código a la vez. 🚀
