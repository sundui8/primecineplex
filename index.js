import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from 'swagger-ui-express';

const port = 5000;
const app = express;
const options = {
    defintion : {
        openapi: '3.0.0',
        info: {
            title: 'webAPI demo api',
            version: '1.0.0',
        },
    },
    apis: ['/index.js',
    '']
};
const openapiSpec = await swaggerJSDoc(options);

const UIoptions = {
    explorer: true
}

app.use(express.json);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpec, UIoptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening at http: //localhost:port`);
});
