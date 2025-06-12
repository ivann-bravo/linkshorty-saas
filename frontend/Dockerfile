FROM node:22-alpine

WORKDIR /app

# Copia package.json y package-lock.json primero
COPY package*.json ./

# Ejecuta npm install y crea la carpeta node_modules DENTRO de la imagen
RUN npm cache clean --force && npm install --verbose

# Copia el resto de tu código fuente
COPY . .

EXPOSE 3000

# El comando para iniciar el servidor de desarrollo
CMD ["npm", "run", "dev"]