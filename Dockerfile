# Usa una imagen oficial de Node.js como base
FROM node:20-alpine AS build

# Configura el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json antes de instalar dependencias
COPY package*.json ./

# Instala las dependencias de producción
RUN npm install

# Copia el resto del código fuente
COPY . .

# Compila la aplicación de React
RUN npm run build

# Usa una imagen ligera de Nginx para servir la app
FROM nginx:stable-alpine

# Copia los archivos generados en el build al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80 para acceder a la app
EXPOSE 80

# Comando de inicio
CMD ["nginx", "-g", "daemon off;"]