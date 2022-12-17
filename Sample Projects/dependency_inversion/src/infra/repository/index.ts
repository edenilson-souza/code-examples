import { DataStorage } from "../../../domain/repository/DataStorage";
import DB from "../adapters/DB";


export default class DBDataStorage implements DataStorage {
  constructor(readonly connection: DB) {}

  get(params: any) {
    throw new Error("Method not implemented.");
  }
  save(data: any): void {
    this.connection.save(data);
  }
  update(params: any, data: any): void {
    throw new Error("Method not implemented.");
  }
  delete(params: any): void {
    throw new Error("Method not implemented.");
  }
  
}
