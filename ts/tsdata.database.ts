/// <reference path="./typings/main.d.ts" />
import * as plugins from "./tsdata.plugins"
import * as classes from "./tsdata.classes"

export let createDatabaseConnection = function(Database:classes.Database){
    if (Database.type == "mongodb"){
        plugins.mongodb.MongoClient.connect(Database.host, function(err, db) {
            if(typeof err === "undfined"){
                plugins.beautylog.log("Connected correctly to server");
            } else {
                plugins.beautylog.warn("Could not connect to mongodb");
            }
            db.close();
        });
    }
};