# Reto IV: Sliding Puzzle - Forms (A11Y), Javascript (DOM, Events) & NodeJS (APIs, JSON)

## ¿Qué vas a hacer?

Como desarrollador front-end, tu misión es mejorar una aplicación web de un juego Sliding Puzzle, creada con HTML, SASS, JavaScript y Node.js. Enfrentarás el reto de identificar y solucionar bugs existentes, así como de agregar nuevas funcionalidades para enriquecer la experiencia del usuario.

### Cómo probar tu código

1. Realiza la instalación de las dependencias en los proyectos `/client` y `/server`.

```
npm install
```

2. Según el _script_ del `package.json` de caga proyecto corre el proyecto:

```
npm run <script>
```

> ten en cuenta que el proyecto `/client` se corre en el puerto 3000.

> ten en cuenta que el proyecto `/server` se corre en el puerto 4000.

## ¿Qué vas a aprender?

Busca material de apoyo y cualquier interrogante no dudes en levantar la mano con tus compañeros o en la sesiones.

### Node.js

- ECMAScript 5 (ES5)
- require & module.exports
- Local environment variable
- express (Middleware, Router)
- Cross-Origin Resource Sharing (CORS)
- APIs (GET & POST)

### Javascript

- ECMAScript 6 (ES6)
- import & export
- Functions
- Array
- Array methos
- Object
- Promises
- async & await
- DOM (Document Object Model)

### HTML

- Forms
- Accessibility (A11Y)
- Modals `<dialog>`
- HTML Event Attributes

## ¿Cuáles son tus tareas?

- [ ] **Crear Formulario**:

> /client/public/index.html

> /client/public/index.js

- Incluye inputs de formulario como se muestra en el wireframe:

![image](https://github.com/user-attachments/assets/3ff296d4-b064-4010-8aa6-001a04d25e09)

  - Nickname: Text
  - Board Size: [3x3, 4x4, 5x5]
  - Difficulty: [Easy, Moderate, Hard, Legendary]
  - Game Properties: checkbox [With Image? - With Time?]

  > Usar: `<label> <input> <fieldset> <legend> <select>`

- Desbloquear Botón submit cuando los campos requeridos sean válidos.

- [ ] **Lógica del juego**:

  > /client/public/pages/game/index.js

  - Sanitiza los datos de la función `sanitizeData()` cumpliendo lo que pide la documentación.
  - Corrige el bug del porqué no está moviendose las piezas del Puzzle.
  -

- [ ] **Client-side & Server-side**:

  - **Server Side:**

    > /server/routes/index.js

    Completa la API `GET /tips-info getTipsInfo()` que traiga la info `tips-info.js`.

  - **Client Side:**

    > /client/public/pages/tips/

    - Realiza una petición a la API `GET /tips-info getTipsInfo()` en los servicios `getTipsInfo()`.
    - Convierte la función `getTipsInfo()` Promise al aync y await.
    - Utiliza la función `getTipsInfo()` para traer la info tipo Object y usando el DOM remplazar la información en el componente `client/pagina/tips/`.

## Recursos

- [Document Object Model | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document)
- [Promise | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [🔴 QUÉ es el EVENT LOOP en JAVASCRIPT - PASO a PASO ⚠️ - Eduardo Fierro | Youtube](https://www.youtube.com/watch?v=rvzItyLuh28)
- [Introduction to events | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [JavaScript HTML DOM EventListener | W3Schools](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
- [Forms | A11Y Style Guide](https://a11y-style-guide.com/style-guide/section-forms.html)

### ¡Vamos a codificar!

A medida que construyas el juego Sliding Puzzle, descubrirás cómo cada pieza del código se une para crear una experiencia interactiva y emocionante.

Mantén siempre viva tu curiosidad. Si te encuentras atascado o algo no está claro, no dudes en levantar la mano y preguntar. La colaboración y la curiosidad son tus mejores aliados en este viaje.

---

¡Éxitos y diviertete programando 💻🚀
