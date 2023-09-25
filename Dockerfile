# Sử dụng ảnh cơ sở có Node.js
FROM node:19.9.0

# Đặt thư mục làm thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json (nếu có) vào thư mục làm việc
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép tất cả các file trong thư mục hiện tại vào thư mục làm việc
COPY . .

# Build ứng dụng Vite
RUN npm run build

# Khai báo cổng mà ứng dụng sẽ lắng nghe
EXPOSE 3000

# Chạy lệnh để khởi động ứng dụng Vite
CMD ["npm", "run", "serve"]