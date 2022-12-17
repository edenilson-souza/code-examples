export default interface DataStorage {
    get(params: any): any;
    save(data: any): void;
    update(params: any, data: any): void;
    delete(params: any): void;
}
