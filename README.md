# Repositorio base para crear dashboard de estudiantes y mapa de ruta de bootcamp 
<img src="./img/roadmap_base.PNG">

Este proyecto consiste en un dashboard de estudiantes y una visualización del Mapa de Ruta del Bootcamp. Está diseñado para proporcionar a los estudiantes un acceso fácil a enlaces y recursos importantes, así como una representación visual del plan de estudios del bootcamp.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- `index.html`: La página principal del dashboard
- `style.css`: Estilos para el dashboard
- `script.js`: JavaScript para el dashboard y el diagrama de Gantt
- `img/`: imágenes de visualización del diagrama de Gantt


## Cómo Modificar el Código

### Modificar el Dashboard (index.html)

1. **Enlaces de la Barra Lateral**: Para modificar los enlaces de la barra lateral, edita la sección `<nav>` en `index.html`. Cada enlace está representado por un elemento `<li>`.

2. **Contenido Principal**: El contenido principal está dividido en tarjetas. Modifica los elementos `<div class="card">` para cambiar el contenido de cada tarjeta.


### Modificar Estilos (style.css y roadmap.css)

- `style.css` contiene estilos para el dashboard principal.


### Modificar JavaScript (script.js)

1. **Enlaces del Dashboard**: Para cambiar los enlaces de los botones del dashboard, modifica el objeto `links` al principio del archivo.

2. **Visualización de los Datos**:

  Para añadir los datos del bootcamp utiliza el objeto `bootcampData` que encontrarás en las primera líneas del archivo `script.js`

  ```javascript
  const bootcampData = {
    title: "Bootcamp name",
    weeks: 24,
    periods: [],
    modules: [],
    stack: [],
    links:  {}
  }
   ````
  Dentro de dicho objeto encontrás el array `stack`.
  Cada objeto en este array representa un proyecto o tema en el bootcamp. Para modificar el plan de estudios:

   - Añade, elimina o modifica objetos en el array `stack`.
   - Cada objeto debe tener un `type` ("Proyecto" o "Tema"), un `name`, y opcionalmente `start` y `end` para las semanas.
   - Si no se proporcionan `start` y `end`, se calcularán automáticamente basándose en los elementos anteriores.

   Ejemplo:
   ```javascript
   {
     type: "Proyecto",
     name: "Nuevo Proyecto",
     start: 19,
     end: 21
   }
   ```




