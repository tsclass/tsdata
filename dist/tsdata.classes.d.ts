export declare class Tsdata {
    sync: boolean;
    database: Database;
    constructor(optionsArg: {
        database: Database;
    });
    store(): void;
}
export declare class Database {
    type: string;
    host: string;
    username: string;
    password: string;
    private databaseConnection;
    constructor(optionsArg: {
        type: string;
        host: string;
        username: string;
        password: string;
    });
}
