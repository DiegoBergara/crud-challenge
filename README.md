# Full-stack CRUD Application Challenge
 This web application allow the user can create, read, update and delete Tutorials as shown in the following video.

[![Demo Video](https://img.youtube.com/vi/VRefLZzEj_E/0.jpg)](https://www.youtube.com/watch?v=VRefLZzEj_E-Y "Demo video")

### Technology stack:
[Vue.js] - [Node.js] - [Express] - [MySQL] (with [Sequelize])

### Api Endpoints:

- POST - /tutorials - Tutorial create 
- GET /tutorials - Tutorial list
- Should support query params as well for filtering GET - /tutorials/:id - Tutorial show
- DELETE - /tutorials/:id - Tutorial delete
- PUT - /tutorials/:id - Tutorial update
- DELETE - /tutorials - Delete all tutorials

### Requirements:
To run this application is required to have root access to a MySQL server. For the purpose of the demo the MySQL server is running in a container. To do so, [Docker] must be installed and the command used to start the server was:
````
docker run --name mysql-server -p 3306:3306 -e MYSQL_ROOT_PASSWORD=admin1234 -d mysql
````
Before runing the backend server, it's necessary to create a ```.env``` file in ```/backend``` folder with the credentias saved in the file ```example.env```. After that, the server can be started.

It's also required to have installed [Node.js].

### How to run it
 Clone repository (for example from url):
```
git clone https://github.com/DiegoBergara/crud-challenge.git
```
Copy ```/backend/.env``` content to /backend/.env .

Open a terminal in ````/backend```` and install dependencies:
```
npm i
```
Run server
```
npm start
```
Repeat last two steps in ```/frontend```


   [Node.js]:   <http://nodejs.org>
   [Express]:   <http://expressjs.com>
   [Vue.js]:    <https://vuejs.org/>
   [MySQL]:     <https://www.mysql.com/>
   [Sequelize]: <https://sequelize.org/>
   [Docker]:    <https://www.docker.com/>
   
