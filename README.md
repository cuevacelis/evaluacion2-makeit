## Assesment 2 Bootcamp

Se realizó lo propuesto en https://github.com/makeitrealcamp/assesment-2-programa-top#1-challenge

Hola CEO de favs el proyecto lo puedes ejecutar bajando el codigo o clonandolo, te suguiero que vayas a la parte derecha superior en el boton verde que dice "code" le des click y posteriormente "download zip".

Una vez descargado el proyecto necesito que instales NodeJS desde su pagina oficial https://nodejs.org/es/download/

Si tienes windows lo unico que tienes que hacer es derargarlo y darle siguiente siguiente caso contrario hay muchos recursos en youtube de como instalar NodeJS.

Una vez instalado NodeJS ve hacia la carpeta que descargaste en el primer paso y da click derecho y posteriormente "click en abrir terminal".

Una vez en la terminal ejecuta estos dos comandos:

- npm i
- npm run start

Te debe salir un mensaje que diga lo siguiente: "¡Todo correcto, ya puedes usar el servicio!", en caso el mensaje no te salga comunicate conmigo.

¡Excelente! el servicio se esta ejecutando,no cierres la temrinal en la que estas.

Ahora para poder usar el servicio sigue las instrucciones de la parte de abajo del documento como vez esta todo lo que se solicito como requerimiento.

Saludos.

---

## ENDPOINTS

1. **BASE_URL:** _http://localhost:3000/_
2. **Register:** _http://localhost:3000/auth/local/register_
3. **Login:** _http://localhost:3000/auth/local/login_
4. **Create list of favorites:** _http://localhost:3000/api/favs_
5. **Get list of favorites:** _http://localhost:3000/api/favs_
6. **Get one list of favorites:** _http://localhost:3000/api/favs/:id_
7. **Delete one list of favorites:** _http://localhost:3000/api/favs/:id_

### Register

- POST
- url:3000/auth/local/register
  {
  email:""
  password:""
  }
- password > 8 caracteres

### Login

- POST
- url:3000/auth/local/login
  {
  email:""
  password:""
  }
- Devuelve el token

### Create list of favorites

- POST
- url:3000/api/favs
  {
  "list": {
  "name": "movies",
  "favorites": [
  {
  "title": "La Guerra de las galaxias",
  "description": "pelicula chevere"
  },
  {
  "title": "Harry potter",
  "description": "pelicula aun mas chevere",
  "link": "netflix.com"
  },
  {
  "title": "Hannibal",
  "description": "pelicula no apta para vegetarianos",
  "link": "netflix.com"
  }
  ]
  }
  }
- Enviar token para saber el idUser

### Get list of favorites

- GET
- url:3000/api/favs
- Enviar token para saber el idUser

### Get one list of favorites

- GET
- url:3000/api/favs/:id
- Enviar token para saber el idUser

### Delete one list of favorites

- DELETE
- url:3000/api/favs/:id
- Enviar token para saber el idUser
