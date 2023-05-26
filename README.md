TCMB Currency JSON - TCMB Döviz JSON
==================

Get exchange rates announced by the Central Bank of the Republic of Turkey in JSON format

> Türkiye Cumhuriyet Merkez Bankası tarafından açıklanan döviz kurlarını Türk Lirası cinsinden JSON formatında alın.

## Use API

First create an env file .env in root folder and add two variable

```
PORT = 3000
RATELIMIT_MAX = 100
```

You can change Port or RateLimit Maximum Number for your standart. Then start code with <code>npm run dev</code> for development or <code>npm start</code> for production and go to /api route on your browser

## API Documentation

Go to domain-name/docs (Example: http://localhost:3000/docs)


## Extra Packages

- Express
- Express Rate Limit
- Node Fetch
- Xml2Js
- Cors
- DotEnv
- Swagger (For API Documentation)
