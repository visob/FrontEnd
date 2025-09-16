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
├── jose.html               # Perfil individual de José
├── estiven.html            # Perfil individual de Estiven
├── bitacora.html          # Documentación del proceso de desarrollo
├── README.md              # Documentación del proyecto
├── css/
│   ├── styles.css         # Estilos personalizados del sitio
│   ├── estiven.css        # Estilos específicos de Estiven
│   ├── jose.css           # Estilos específicos de José
│   ├── lucas.css          # Estilos específicos de Lucas
│   └── victoria.css       # Estilos específicos de Victoria
├── js/
│   ├── main.js            # JavaScript principal con todas las funcionalidades
│   ├── estiven.js         # JavaScript específico de Estiven
│   ├── lucas.js           # JavaScript específico de Lucas
│   └── wolverine.js       # JavaScript para funcionalidades de Wolverine
├── video/                  # Videos de fondo y multimedia
│   ├── hero-bg.mp4             # Video de fondo para la sección hero
│   └── logan fondo.mp4         # Video de fondo para la página de Logan
└── img/
    ├── logo.svg                    # Logo del equipo
    ├── favicon.png                 # Favicon principal
    ├── fondo-index.png            # Fondo de la página principal
    ├── bitacora.jpg               # Imagen para bitácora
    ├── bitacora-favicon.png       # Favicon de bitácora
    ├── pelis_foto.png             # Imagen de películas
    ├── ed_foto.png                # Foto de Ed
    ├── avatar1.svg                # Avatar de Lucas
    ├── avatar2.svg                # Avatar de Victoria
    ├── avatar3.svg                # Avatar de Sebastián
    ├── avatar4.svg                # Avatar de Luis
    ├── avatar5.svg                # Avatar de Estiven
    ├── lucas_perfil.png           # Perfil de Lucas
    ├── lucas_background.png       # Fondo de Lucas
    ├── lucas_icn.ico              # Icono de Lucas
    ├── logan.png                  # Imagen de Logan
    ├── logan2.jpeg                # Imagen de Logan 2
    ├── logan3.jpeg                # Imagen de Logan 3
    ├── logan4.jpeg                # Imagen de Logan 4
    ├── est-avatar.png             # Avatar de Estiven
    ├── est-ghost-song.jpg         # Canción Ghost de Estiven
    ├── est-hall_of_fame-song.jpg  # Canción Hall of Fame de Estiven
    ├── est-heartstopper-movie.jpg # Serie Heartstopper de Estiven
    ├── est-magi-movie.jpg         # Película Magi de Estiven
    ├── est-sense8-movie.jpg       # Serie Sense8 de Estiven
    ├── est-shelter-movie.png      # Película Shelter de Estiven
    ├── est-thameypo-movie.webp    # Serie Thame y Po de Estiven
    ├── est-the_nights-song.jpg    # Canción The Nights de Estiven
    ├── est-you_are_the_reason-song.jpg # Canción You Are The Reason de Estiven
    ├── victoria-deboot.png        # Imagen Deboot de Victoria
    ├── victoria-favicon.png       # Favicon de Victoria
    ├── victoria-fondo.webp        # Fondo de Victoria
    ├── victoria-hometown.jpg      # Hometown de Victoria
    ├── victoria-hyped.png         # Imagen Hyped de Victoria
    ├── victoria-ind.png           # Imagen Ind de Victoria
    ├── victoria-interact.png      # Imagen Interact de Victoria
    ├── victoria-korean.jpg        # Imagen Korean de Victoria
    ├── vic-melodrama.jpg          # Álbum Melodrama de Victoria
    ├── vic-orgullo.webp           # Álbum Orgullo de Victoria
    ├── vic-oyster.jpg             # Álbum Oyster de Victoria
    ├── vic-renglones.jpg          # Álbum Renglones de Victoria
    ├── vic-speaknow.jpg           # Álbum Speak Now de Victoria
    └── vic-virgin.jpeg            # Álbum Virgin de Victoria
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
- **Perfil Completo**: Desarrollador apasionado por la tecnología, el desarrollo de software, los juegos y el fútbol. Aprende desarrollo de software de manera formal y autodidacta desde hace 3 años.
- **Ubicación**: Villa Devoto, CABA (31 años)
- **Habilidades**: HTML, CSS, POO, JavaScript, SQL, C#, Git, Kotlin, Modelado y diseño de Software, Forjador de Telarañas Digitales, Maestro de Código
- **Secciones**: Información personal, habilidades técnicas, experiencia, películas favoritas y música

#### Victoria (victoria.html)
- **Perfil Completo**: Diseñadora multimedia especializada en UX/UI. Se especializa en diseñar aplicaciones desde cero y darles vida a través de interfaces intuitivas y visualmente atractivas.
- **Ubicación**: Buenos Aires, Argentina (23 años)
- **Habilidades**: Figma, Adobe Suit, Prototipado, HTML, CSS, JavaScript, Kotlin
- **Secciones**: Información personal, habilidades técnicas, proyectos destacados (Deboot, Hyped, InteractxTech), películas favoritas y música
- **Características**: Incluye showcase de proyectos con prototipos interactivos

#### Sebastián (sebastian.html)
- **Perfil Completo**: Desarrollador Full Stack con gran pasión por la innovación y las nuevas tecnologías. Se especializa en la integración de sistemas.
- **Ubicación**: Valencia, España (26 años)
- **Habilidades**: Vue.js, React, PHP, Laravel, MySQL, Docker, Git, AWS
- **Secciones**: Información personal, habilidades técnicas, certificaciones (AWS Certified Developer, Vue.js Expert, Scrum Master), películas favoritas y música

#### José (jose.html)
- **Perfil Completo**: Página temática de Wolverine/Logan. Estudiante que busca su camino en el mundo de la programación.
- **Ubicación**: ??? (Más de 100 años - personaje ficticio)
- **Habilidades**: Factor de curación acelerado, Garras de adamantium, Combate cuerpo a cuerpo, Sentidos agudizados, Resistencia sobrehumana, Envejecimiento casi inexistente
- **Secciones**: Información del personaje Wolverine, habilidades mutantes, experiencia como X-Men y soldado, información sobre José como estudiante

#### Estiven (estiven.html)
- **Perfil Completo**: Desarrollador de software estudiando en el IFTS N° 29. Trabaja desarrollando aplicaciones web para empresa mediana, especializado en e-commerce de muebles de pino.
- **Ubicación**: Buenos Aires, Argentina (31 años)
- **Habilidades**: NodeJS, MySQL, Express, NestJS, NextJS, Python, C#, .NET
- **Secciones**: Información personal, habilidades técnicas, experiencia profesional, favoritos (IA, series y películas), carrusel de películas y música
- **Entretenimiento**: Películas de ciencia ficción y música experimental con carrusel interactivo

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

#### Lucas (`lucas.html`)
- **Especialización**: Desarrollador apasionado por la tecnología y el desarrollo de software
- **Ubicación**: Villa Devoto, CABA - Desarrollador de 31 años
- **Stack Tecnológico**: HTML, CSS, JavaScript, POO, SQL, C#, Git, Kotlin

#### Victoria (`victoria.html`)
- **Especialización UX/UI**: Diseñadora multimedia especializada en interfaces intuitivas y atractivas
- **Ubicación**: Buenos Aires, Argentina - Diseñadora de 23 años
- **Herramientas de Diseño**: Figma, Adobe Suit, Prototipado, HTML, CSS, JavaScript, Kotlin

#### Sebastián (`sebastian.html`)
- **Especialización Full Stack**: Desarrollador con pasión por la innovación y integración de sistemas
- **Ubicación**: Valencia, España - Desarrollador de 26 años
- **Tecnologías**: Vue.js, React, PHP, Laravel, MySQL, Docker, Git, AWS

#### José (`jose.html`)
- **Especialización**: Página temática de Wolverine - Estudiante de programación
- **Ubicación**: ??? - Más de 100 años (personaje ficticio)
- **Habilidades Mutantes**: Factor de curación, garras de adamantium, sentidos agudizados
- **Entretenimiento**: Temática de superhéroes y experiencia como X-Men

#### Estiven (`estiven.html`)
- **Especialización**: Desarrollador web especializado en e-commerce
- **Ubicación**: Buenos Aires, Argentina - Desarrollador de 31 años
- **Tecnologías**: NodeJS, MySQL, Express, NestJS, NextJS, Python, C#, .NET
- **Entretenimiento**: Películas de ciencia ficción y música experimental con carrusel interactivo

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

## Integrantes del Equipo

### 👨‍💻 Lucas - Developer
- **Especialidad**: HTML, CSS, JavaScript, POO, SQL, C#, Git, Kotlin
- **Ubicación**: Villa Devoto, CABA
- **Edad**: 31 años

### 🎨 Victoria - UX/UI Designer
- **Especialidad**: Figma, Adobe Suite, Prototipado, HTML, CSS, JavaScript, Kotlin
- **Ubicación**: Buenos Aires, Argentina
- **Edad**: 23 años

### ⚙️ Sebastián - Full Stack Developer
- **Especialidad**: Vue.js, React, PHP, Laravel, MySQL, Docker, Git, AWS
- **Ubicación**: Valencia, España
- **Edad**: 26 años

### 🦸 José - Wolverine Theme / Student
- **Especialidad**: Factor de curación, garras de adamantium, sentidos agudizados
- **Ubicación**: ???
- **Edad**: Más de 100 años (personaje ficticio)

### 💻 Estiven - Web Developer
- **Especialidad**: NodeJS, MySQL, Express, NestJS, NextJS, Python, C#, .NET
- **Ubicación**: Buenos Aires, Argentina
- **Edad**: 31 años

## Licencia

Este proyecto es de uso educativo y está disponible bajo licencia MIT.

---

**Equipo Innovador** - Desarrollando el futuro, una línea de código a la vez. 🚀