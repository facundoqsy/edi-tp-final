Trabajo Final – Sistema REST para una Clínica Veterinaria 🐶🐱

En este trabajo hicimos un sistema REST para una clínica veterinaria, que básicamente sirve para manejar toda la información de las mascotas, los dueños, los turnos y los tratamientos.
La idea es que funcione como una API, donde se pueden hacer distintas operaciones (agregar, ver, editar o borrar datos) de forma fácil y rápida.

Mascotas

En esta parte se pueden manejar los datos de las mascotas.
Podés ver todas, buscar una por su ID, agregar una nueva, modificar sus datos o eliminarla si ya no se necesita.
Los endpoints serían más o menos así:

GET /mascotas → muestra todas las mascotas

GET /mascotas/:id → muestra una mascota por su ID

POST /mascotas → agrega una nueva mascota

PUT /mascotas/:id → modifica los datos de una mascota

DELETE /mascotas/:id → elimina una mascota

Dueños

Acá se manejan los dueños de las mascotas. Se puede registrar un nuevo dueño, ver todos, buscar uno por ID, actualizar los datos o eliminarlo.
Endpoints:

GET /duenos → muestra todos los dueños

GET /duenos/:id → muestra los datos de un dueño específico

POST /duenos → agrega un nuevo dueño

PUT /duenos/:id → actualiza los datos de un dueño

DELETE /duenos/:id → borra un dueño del sistema

Turnos

Esta parte sirve para organizar los turnos de las mascotas.
Podés cargar nuevos turnos, ver todos, buscar uno en particular, editarlo o eliminarlo si se cancela.
Endpoints:

GET /turnos → lista todos los turnos

GET /turnos/:id → muestra un turno por su ID

POST /turnos → crea un turno nuevo

PUT /turnos/:id → modifica un turno existente

DELETE /turnos/:id → elimina un turno

Tratamientos

Por último, está la parte de los tratamientos, donde se guardan los que se le hicieron a cada mascota.
También se pueden agregar nuevos, verlos, editarlos o borrarlos.
Endpoints:

GET /tratamientos → muestra todos los tratamientos

GET /tratamientos/:id → muestra los detalles de un tratamiento

POST /tratamientos → agrega un tratamiento nuevo

PUT /tratamientos/:id → modifica un tratamiento

DELETE /tratamientos/:id → elimina un tratamiento

Cierre

Con este sistema se puede manejar todo lo que pasa en una veterinaria de forma ordenada.
Está bueno porque, al ser una API REST, se puede conectar a una página o a una app sin problema, y todo queda guardado en archivos JSON que simulan una base de datos simple.
En resumen, el proyecto sirve para practicar cómo funcionan las rutas, los métodos HTTP y cómo se organizan los datos en un servidor hecho con NestJS.