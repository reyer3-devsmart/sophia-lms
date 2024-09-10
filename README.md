# Sophia LMS - Sistema de Gestión de Aprendizaje

## Descripción
Sophia LMS es una plataforma de gestión de aprendizaje desarrollada con React. Está diseñada para ofrecer cursos en línea, con un enfoque particular en el manejo de objeciones en cobranza y temas relacionados.

## Características principales
- Interfaz de usuario intuitiva y responsive
- Sistema de cursos con contenido multimedia
- Cuestionarios interactivos con temporizador
- Seguimiento del progreso del estudiante
- Diseño modular y fácilmente extensible

## Requisitos previos
- Node.js (v14.0.0 o superior)
- npm (v6.0.0 o superior)

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/tu-usuario/sophia-lms.git
   cd sophia-lms
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Inicia la aplicación en modo de desarrollo:
   ```
   npm start
   ```

La aplicación estará disponible en `http://localhost:3000`.

## Estructura del proyecto

```
sophia-lms/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── ActivityItem.jsx
│   │   ├── CourseContent.jsx
│   │   ├── Notification.jsx
│   │   ├── QuizComponent.jsx
│   │   ├── Sidebar.jsx
│   │   └── VideoModal.jsx
│   │
│   ├── data/
│   │   ├── courseData.js
│   │   └── quizData.js
│   │
│   ├── App.js
│   ├── index.js
│   └── index.css
│
├── package.json
└── README.md
```

## Componentes principales

- `App.js`: Componente principal que organiza la estructura de la aplicación.
- `CourseContent.jsx`: Muestra el contenido del curso seleccionado.
- `QuizComponent.jsx`: Implementa la funcionalidad de los cuestionarios.
- `Sidebar.jsx`: Barra lateral para navegación entre cursos.

## Datos

Los datos de los cursos y cuestionarios se encuentran en:

- `src/data/courseData.js`: Contiene la información de los cursos.
- `src/data/quizData.js`: Almacena las preguntas y respuestas de los cuestionarios.

## Personalización

Para añadir nuevos cursos o modificar los existentes, edita el archivo `courseData.js`.
Para modificar las preguntas de los cuestionarios, ajusta el archivo `quizData.js`.

## Contribuir

1. Haz un fork del proyecto
2. Crea una nueva rama (`git checkout -b feature/AmazingFeature`)
3. Realiza tus cambios y haz commit (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

## Contacto

Tu Nombre - [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)

Enlace del proyecto: [https://github.com/reyer3-devsmart/sophia-lms](https://github.com/reyer3-devsmart/sophia-lms.git)