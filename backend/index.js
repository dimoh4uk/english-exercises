const express = require('express');
const APP = express();
const MongoClient = require('mongodb').MongoClient;
const ENVS = process.env;

const state = {};

console.log("url=>>>>>", ENVS.DB_URI);

(async () => {
    const DB_URI = ENVS.DB_URI;


    await new Promise((resolve, reject) => {
        MongoClient.connect(DB_URI, (error, database) => {
            if (!error) {
                state.connect = database;

            } else {
                reject(error);
            }
            resolve(state.connect);
        })
    });

    APP.post('/vocabulary', async (request, response) => {
        await new Promise((r) => {
            console.log("asdasd=>",request.body);
            state.connect.collection("vocabulary").insertOne(request.body, () => {
                r();
            });
        });
        response.sendStatus(200);
    });

    APP.get('/vocabulary', async (request, response) => {
        const vocabulary = await new Promise((r) => {
            state.connect.collection("vocabulary").find()
                .toArray((d) => {
                    r(d);
                })
        });
        response.send(vocabulary)
    });


    APP.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });

    console.log("loh log+>1");

})();
