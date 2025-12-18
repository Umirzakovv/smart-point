# Stage 1: Сборка проекта
FROM node:22.11.0 as build

WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем весь проект и собираем билд
COPY . .
RUN npm run build

# Stage 2: Запуск через Nginx
FROM nginx:stable-alpine

# Удаляем дефолтные nginx-файлы
RUN rm -rf /usr/share/nginx/html/*

# Копируем билд React-приложения
COPY --from=build /app/dist /usr/share/nginx/html

# Если нужен кастомный конфиг nginx — раскомментируй строку ниже и создай файл nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

# Проксируем на нужный порт
CMD ["nginx", "-g", "daemon off;"]
