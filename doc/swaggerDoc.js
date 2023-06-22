module.exports = {
    swaggerDefinition: {
      openapi: '3.0.1',
      info: {
        version: '1.0.0',
        title: 'fingerPrint Api',
        description: 'fingerPrint Api, which contain different operation such as create push,get,delete etc',
        servers: ['http://localhost:3001'],
      },
      components: {
        securitySchemes: {
          jwt: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
    apis: ['routes/*.js'],
};