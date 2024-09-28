# MUHİKU - Ürün Yönetim Sistemi Case Study - Backend | Fırat Yıldız

Merhaba, Projenin backendini Typescript kullanarak tamamladım, kurulumu yaptıktan sonra [Ürün Yönetim Frontend](https://github.com/FRTYZ/urun-yonetim-web) tarafını kurup çalıştırabilirsiniz. Projeyi geliştirirken Clean Code mantığına ve yorum satırlarını eklemeye çalıştım.

![alt text](https://raw.githubusercontent.com/FRTYZ/urun-yonetim-backend/main/public/home.png)

## 🛠 Teknolojiler 
- Typescript
- Node.js
- MongoDB

## 🚀 Live (Demo)

[urun-yonetim-backend-production.up.railway.app](https://urun-yonetim-backend-production.up.railway.app)

## 💻 Development 

Projeyi localinizde çalıştırmak için gerekli adımlar aşağıda bulabilirsiniz.

1. Projeyi git ile clone ediniz.

    ```
    git clone https://github.com/FRTYZ/urun-yonetim-backend.git
    ```

2. Aşağıdaki komutları kullanarak npm paketlerinin kurulmasını sağlıyabilirsiniz.

    ```
    npm install
    npm run dev
    ```

3. Projenin ana dizininde `.env` dosyasını oluşturup, mongoDB veritabanını bağlamak için MONGO_URI value değerini girmeniz gerekiyor. 

    ```
    MONGO_URI = mongodb+srv://<username>:<password>@productmanagement.ebwit.mongodb.net/productManagement?retryWrites=true&w=majority&appName=ProductManagement

    ```

4. Proje `:8080` portunuz uygun ise `localhost:8080` bağlantısından kullanabilirisiniz. eğer portunuz uygun değilse `src/index.ts` dosyasında aşağıdaki ilgili satırda değişiklik yapabilirisiniz. 

    ```
    const PORT = process.env.PORT || 8080;
    ```

## package.json

```
{
  "name": "urun-yonetim-backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "npx nodemon src/index.ts",
    "start": "node dist/index.js",
    "build": "tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "ejs": "^3.1.10",
    "express": "^4.21.0",
    "multer": "^1.4.5-lts.1",
    "sharp": "^0.33.5"
  },
  "devDependencies": {
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/mongoose": "^5.11.97",
    "@types/multer": "^1.4.12",
    "@types/node": "^22.6.1",
    "nodemon": "^3.1.7",
    "ts-node": "^10.9.2",
    "typescript": "^5.6.2"
  }
}
```

İyi çalışmalar dilerim. Saygılarımla.