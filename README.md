# Proyecto challenge MELI

En este challenge utilicé el siguiente stack de tecnologías:

Node js

* Express para crear el servidor.
* Node-fetch para consumir datos de la api.
* Cors para permitir la conexión entre servidor y cliente.

React js

Basándome en el entorno que provee create-react-app utilicé:

* React-router-dom para generar las rutas y obtener información de la url con UseParams y Uselocation.
* Use State y Use Effect para montar y actualizar los estados de las props de los componentes.
* Webpack y el build de create-react-app con el objetivo de minificar el código.

CSS

* Media queries para lograr un diseño responsive


## Inicializar la app

Para inicializar la app, primero debes ejecutar `npm start` en la carpeta raíz y luego abrir otra terminal,
posicionarte en la carpeta client y también ejecutar `npm start`.

En (http://localhost:3000) tendras la vista del cliente
En (http://localhost:5000) la API

Para consultar por un producto directamente en la API sabiendo su id puedes ir a:

http://localhost:5000/api/items/:id

Para buscar un producto directamente en la API puedes ir a:

http://localhost:5000/api/items?q=


## Deploy

 https://challenge-meli-rtoblli.herokuapp.com/


## Créditos

App creada por Rodrigo Toblli.

Espero que les guste!
