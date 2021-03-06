const mongoose = require('mongoose');
require('dotenv').config();

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            //reconnectTries: Number.MAX_VALUE,
            //reconnectInterval: 500,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4
        }
        mongoose.connect(`mongodb+srv://CatimoBot:${process.env.MONGO_PASS}@catimobot.czz0o.mongodb.net/magic-db?retryWrites=true&w=majority`, dbOptions);
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log('Mongoose is on.');
        })

        mongoose.connection.on('err', err => {
            console.error(`Mongoose connections error: \n${err.stack}`);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn('Mongoose is off.');
        })
    }
}