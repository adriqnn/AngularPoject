const express = require('express');
const expressConfig = require('./config/express');
const routerConfig = require('./config/router');
const databaseConfig = require('./config/database');

async function start(){
    const app = express();

    expressConfig(app);
    routerConfig(app);
    await databaseConfig(app);

    app.listen(3000, () => console.log('Server listening on port 3000'));
};

start();