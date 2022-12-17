import DB from "./DB";

export default class DBAdapter implements DB {
    constructor(){

    }
    get(params: any) {
        throw new Error("Method not implemented.");
    }
    save(data: any): void {
        throw new Error("Method not implemented.");
    }
    update(params: any, data: any): void {
        throw new Error("Method not implemented.");
    }
    delete(params: any): void {
        throw new Error("Method not implemented.");
    }
    
}