# Mi Portafolio Personal

Hola, soy Mauricio Aldana y este es mi portafolio web donde muestro mi trabajo como Data Analyst.

## Sobre el proyecto

Construí este sitio para mostrar mis proyectos, experiencia laboral, certificaciones y habilidades técnicas de forma visual y profesional. La idea era tener un lugar centralizado donde las personas puedan conocer mi trabajo y contactarme.

## Tecnologías que usé

Para el desarrollo utilicé tecnologías modernas que me permitieron crear una aplicación rápida y con buen rendimiento:

- **React** - Lo elegí como framework principal porque me permite construir interfaces interactivas de manera eficiente
- **TypeScript** - Agregué tipos al código para tener menos errores y mejor experiencia de desarrollo
- **Vite** - Es el build tool que usé, es muy rápido y tiene una excelente experiencia de desarrollo
- **Tailwind CSS** - Para los estilos, me ahorra mucho tiempo con sus clases utilitarias
- **React Router** - Manejo las diferentes páginas y rutas del sitio con esta librería
- **shadcn/ui** - Componentes pre-hechos que me dieron una base sólida para la interfaz

También agregué algunas librerías específicas:

- **Recharts** - Para visualizar datos en gráficos
- **React Hook Form** con **Zod** - Validación y manejo de formularios
- **Lucide React** - Iconos bonitos y consistentes
- **Sonner** - Notificaciones toast

## Estructura del proyecto

La aplicación está organizada de esta manera:

```
src/
├── components/       # Componentes reutilizables
│   ├── sections/    # Secciones principales (Hero, About, Skills, etc.)
│   └── ui/          # Componentes de interfaz de shadcn/ui
├── contexts/        # Manejo del estado global (idioma)
├── data/           # Información estática (proyectos, experiencia, certificaciones)
├── hooks/          # Hooks personalizados
├── pages/          # Páginas principales de la app
└── lib/            # Utilidades y helpers
```

## Qué contiene

El portafolio tiene estas secciones:

1. **Hero** - Presentación inicial con mi nombre y rol
2. **About** - Información sobre mí y mi formación
3. **Skills** - Mis habilidades técnicas organizadas por categorías
4. **Experience** - Mi experiencia laboral con detalles de cada puesto
5. **Programs** - Programas de formación en los que participé
6. **Projects** - Galería de proyectos con filtros por categoría
7. **Certifications** - Certificaciones que he obtenido
8. **Contact** - Formulario para que me contacten

## Características especiales

- Soporte para dos idiomas (Español e Inglés)
- Modo claro y oscuro
- Diseño responsive que se adapta a móviles y tablets
- Cada proyecto tiene su propia página de detalle
- Formulario de contacto con validación

## Cómo ejecutarlo

Si quieres ver el proyecto en tu computadora:

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en http://localhost:8080
```

## Cómo construir para producción

```bash
npm run build
```

Esto genera una carpeta `dist` con todos los archivos optimizados listos para subir a un servidor.

## Datos del portafolio

Toda la información (proyectos, experiencia, certificaciones) está en archivos TypeScript dentro de `src/data/`. Si quiero actualizar algo, solo tengo que editar estos archivos y el sitio se actualiza automáticamente.

## Lo que aprendí

Este proyecto me permitió practicar con tecnologías modernas de desarrollo web, mejorar mi manejo de React y TypeScript, y entender mejor cómo estructurar una aplicación de una sola página.
