

## Prueba Final - Testing

Este repositorio contiene pruebas para las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) de una API de Cafés. 


## Configuración

Para configurar y ejecutar las pruebas, sigue estos pasos:

1. Instala las dependencias utilizando el siguiente comando:

```
npm install
```

2. Ejecuta las pruebas utilizando el siguiente comando:

```
npm test
```




A continuación se detallan las pruebas individuales:

### 1. Prueba GET

- Descripción: El servidor devuelve el código 200 al obtener los datos de los cafés.
- Descripción: La solicitud devuelve un array con al menos un objeto.

### 2. Prueba POST

- Descripción: El servidor devuelve el código 201 al agregar una nueva bebida de café.

### 3. Prueba PUT

- Descripción: El servidor devuelve el código 400 al intentar utilizar un ID en los parámetros diferente del ingresado en el payload.

### 4. Prueba DELETE

- Descripción: El servidor devuelve el código 404 al intentar eliminar un recurso con un ID que no existe.


