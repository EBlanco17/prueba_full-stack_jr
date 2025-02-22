# Prueba Técnica - Full Stack Developer (Angular + Express.js + PostgreSQL)

## Descripción
Esta prueba técnica consiste en desarrollar una aplicación Full Stack con **Angular, Express.js y PostgreSQL** para gestionar usuarios y sus transacciones.  
El objetivo es evaluar la capacidad del candidato para trabajar con **APIs RESTful, bases de datos relacionales y frontend en Angular**.

descripcion: 
  Esta aplicación permite gestionar usuarios y transacciones bancarias de manera sencilla. 
  Se puede registrar usuarios, realizar depósitos y retiros, y visualizar el historial de transacciones.

  🔹 **Frontend:** Angular 18 con Angular Material  
  🔹 **Backend:** Node.js con Express  
  🔹 **Base de Datos:** PostgreSQL  

tecnologias:
  backend:
    - 🟢 Node.js
    - 🔥 Express
    - 🐘 PostgreSQL
  frontend:
    - 🎨 Angular 18
    - 🎭 Angular Material
  base_de_datos: "🐘 PostgreSQL"

estructura_del_proyecto:
  - 📂 mi-proyecto
  - 📂 backend
    - 📁 src
      - 📌 routes
      - 🔧 controllers
      - 🗂 models
      - 📜 index.js
    - 📜 package.json
    - 📖 README.md
  - 📂 frontend
    - 📂 my-app (Proyecto Angular)
    - 📜 package.json
    - 📖 README.md
  - 📖 README.md (Este archivo)

instalacion_y_configuracion:
  pasos:
    - paso: "🛠️ Clonar el Repositorio"
      comandos:
        - "git clone <URL_DEL_REPOSITORIO>"
        - "cd mi-proyecto"
crear base de datos
## Modelo de Base de Datos
Antes de comenzar, importar la siguiente estructura en PostgreSQL:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    type VARCHAR(10) CHECK (type IN ('deposit', 'withdrawal')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```
# configuracion_backend:
  pasos:
    - paso: "📁 Ir a la carpeta backend"
      comando: "cd backend"
    - paso: "📦 Instalar dependencias"
      comando: "npm install"
    - paso: "📝 Editar archivo .env con la configuración de la base de datos"
      contenido: |
        DB_HOST=localhost
        DB_USER=tu_usuario
        DB_PASSWORD=tu_contraseña
        DB_NAME=mi_base_de_datos
        DB_PORT=5432
    - paso: "🚀 Iniciar el servidor"
      comando: "npm run dev"
      url: "http://localhost:3000"

# Configuracion_frontend:
 - pasos:
    - paso: "📁 Ir a la carpeta frontend"
      comando: "cd ../frontend/my-app"
    - paso: "📦 Instalar dependencias"
      comando: "npm install"
    - paso: "▶️ Ejecutar la aplicación"
      comando: "ng serve"
      url: "http://localhost:4200"

## uso_de_la_aplicacion:
  - pantallas:
    - 🧑‍💻 Usuarios:
        - funciones:
          - "📝 Formulario para agregar nuevos usuarios"
          - "📋 Tabla con la lista de usuarios"
          - "🔍 Botón para ver el historial de transacciones"
    - 💰 Transacciones:
       - funciones:
          - "💵 Formulario para registrar depósitos y retiros"
          - "📜 Tabla con el historial de transacciones"
          - "⚠️ Validaciones para evitar retiros sin saldo suficiente"

## api_endpoints:
  - usuarios:
    - metodo: "📩 POST"
      ruta: "/users"
      descripcion: "🆕 Crea un usuario nuevo"
    - metodo: "📥 GET"
      ruta: "/users"
      descripcion: "📋 Obtiene la lista de usuarios"
 - transacciones:
    - metodo: "📩 POST"
      ruta: "/transactions"
      descripcion: "💰 Crea una nueva transacción"
    - metodo: "📥 GET"
      ruta: "/transactions/:user_id"
      descripcion: "📜 Obtiene el historial de transacciones de un usuario"

## estructura_angular:
  - src/app:
   - components:
      - 🧑‍💻 user-form: "Formulario de usuarios"
      - 📋 user-list: "Lista de usuarios"
      - 💵 transaction-form: "Formulario de transacciones"
      - 📜 transaction-list: "Historial de transacciones"
   - services:
      - 🔄 user.service.ts: "Manejo de usuarios"
      - 🔄 transaction.service.ts: "Manejo de transacciones"


### Autor:
 - Nombre: "🧑‍💻 Emerson Blanco"
 - email: "📧 e.blanco17@hotmail.com"
 - Perfil: "🌍 [EBlanco17](https://github.com/EBlanco17)"

# Repositorio:
  - github: "🔗 [Repositorio](https://github.com/EBlanco17/prueba_full-stack_jr)"
