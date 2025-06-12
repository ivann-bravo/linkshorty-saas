# LinkShorty SaaS

**LinkShorty** es un servicio de acortamiento de URLs (Software as a Service) construido con un stack moderno, completamente dockerizado para un desarrollo y despliegue sencillos. Permite a los usuarios registrarse, iniciar sesión y, próximamente, gestionar sus propios enlaces acortados.

Este proyecto se está construyendo como parte de un portafolio personal, con un fuerte enfoque en buenas prácticas de desarrollo, arquitectura escalable y documentación clara.

## Alcance del MVP (Producto Mínimo Viable)

El objetivo actual es construir una base sólida para el SaaS.

- [x] Configuración completa del entorno de desarrollo con Docker.
- [x] Implementación de la autenticación de usuarios con JWT (backend).
- [x] Creación de la página de Login funcional (frontend).
- [ ] Creación de la página de Registro de usuarios (frontend).
- [ ] Un usuario registrado tiene un panel para ver, crear y eliminar sus enlaces.
- [ ] El sistema cuenta los clics totales en cada enlace.
- [ ] Redirección de enlaces cortos a sus URLs originales.

## Stack Tecnológico

* **Backend:**
    * Django & Django REST Framework
    * Simple JWT (para autenticación con JSON Web Tokens)
    * `django-cors-headers` (para la comunicación Frontend-Backend)
    * `psycopg2-binary` (Adaptador de PostgreSQL)
* **Frontend:**
    * React (con TypeScript y Vite)
    * React Router (para la navegación)
    * Axios (para peticiones a la API)
* **Base de Datos:**
    * PostgreSQL
* **Infraestructura y Entorno:**
    * Docker & Docker Compose

## Cómo Empezar

Este proyecto está 100% dockerizado. Solo necesitas tener Docker y Docker Compose instalados en tu máquina.

### 1. Configuración del Entorno

El proyecto utiliza variables de entorno para la configuración.

1.  Crea una copia del archivo de ejemplo `.env.example` y renómbrala a `.env`.
    ```bash
    cp .env.example .env
    ```
2.  Revisa el archivo `.env` y ajusta las variables si es necesario (los valores por defecto deberían funcionar para desarrollo local).

### 2. Levantar los Servicios

Con Docker corriendo en tu máquina, ejecuta el siguiente comando desde la raíz del proyecto:

```bash
docker-compose up --build -d
```
* `--build`: Construirá las imágenes de Docker la primera vez (o si cambiaste un `Dockerfile`).
* `-d`: Ejecutará los contenedores en segundo plano (detached mode).

### 3. Acceder a la Aplicación

Una vez que los contenedores estén corriendo:

* **Frontend:** La aplicación de React estará disponible en `http://localhost:3000`.
* **Backend:** La API de Django estará disponible en `http://localhost:8000`.

### 4. Crear un Superusuario

Para poder iniciar sesión, primero necesitas crear un usuario. Puedes crear un superusuario a través de la línea de comandos de Django:

```bash
docker-compose exec backend python manage.py createsuperuser
```
La terminal te pedirá un nombre de usuario, email y contraseña.

---
_Proyecto en desarrollo._