/// <reference path="./typings/main.d.ts" />

import * as plugins from "./tsdata.plugins";
import * as TsdataDatabase from "./tsdata.database";

export class Tsdata {
    sync:boolean;
    database:Database;
    constructor(optionsArg:{database:Database}){
        
    }
    store(){
        
    }
};

export class Database {
    type:string;
    host:string;
    username:string;
    password:string;
    private databaseConnection
    constructor(optionsArg:{
        type:string,
        host:string,
        username:string,
        password:string
    }){
        this.type = optionsArg.type;
        this.host = optionsArg.host;
        this.username = optionsArg.username;
        this.password = optionsArg.password
        this.databaseConnection = TsdataDatabase.createDatabaseConnection(this);
    }
}