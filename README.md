## Assesment 2 Bootcamp

Se realizó lo propuesto en https://github.com/makeitrealcamp/assesment-2-programa-top#1-challenge

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

POST
url:3000/auth/local/register
{
email:""
password:""
}
password > 8 caracteres

### Login

POST
url:3000/auth/local/login
{
email:""
password:""
}
Devuelve el token

### Create list of favorites

POST
url:3000/api/favs
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
Enviar token para saber el idUser

### Get list of favorites

GET
url:3000/api/favs
Enviar token para saber el idUser

### Get one list of favorites

GET
url:3000/api/favs/:id
Enviar token para saber el idUser

### Delete one list of favorites

DELETE
url:3000/api/favs/:id
Enviar token para saber el idUser
