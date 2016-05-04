/// <reference path="./typings/main.d.ts" />
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
    }
}