# Tripleten web_project_around_express
Título: 
Proyecto Web con Express: World Around

Autor:
César Vivas

Descripción:
Este proyecto es un entorno de aprendizaje práctico diseñado para profundizar en los fundamentos de Express.js, MongoDB y Mongoose. A través de esta aplicación, se podra construir una sólida base en el desarrollo de APIs RESTful utilizando Node.js y la gestión de bases de datos NoSQL.

Tecnologías Utilizadas:
Node.js: Entorno de ejecución de JavaScript para el lado del servidor.
Express.js: Framework web minimalista y flexible para Node.js.
MongoDB: Base de datos NoSQL altamente escalable y orientada a documentos.
Mongoose: ODM (Object Document Mapper) para MongoDB que simplifica las interacciones con la base de datos.

Instalación y Ejecución:
Clona el repositorio:
Bash
git clone 


Instala las dependencias:
Bash
cd WorldAroundExpress
npm install


Configura la base de datos:
Crea una base de datos en MongoDB con el nombre especificado en config.json.
Asegúrate de tener las credenciales de acceso correctas.
Inicia el servidor:
Bash
npm start


Accede a la aplicación en http://localhost:3000.
Estructura del Proyecto:
models: Define los esquemas de los documentos para MongoDB.
routes: Contiene las rutas de la API y los controladores asociados.
controllers: Implementa la lógica de negocio para cada ruta.
config: Almacena la configuración de la aplicación (base de datos, puerto, etc.).
