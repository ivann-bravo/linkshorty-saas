FROM python:3.12-slim

# Establecemos variables de entorno para Python
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app/backend

# Copiamos el archivo de requerimientos y los instalamos
# Hacemos esto en un paso separado para aprovechar el caché de capas de Docker.
# Si requirements.txt no cambia, Docker no volverá a instalar todo.
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiamos el resto del código de la aplicación al directorio de trabajo
COPY . .

# Exponemos el puerto 8000 para que sea accesible desde fuera del contenedor
EXPOSE 8000