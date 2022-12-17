import { DataStorage } from "../../domain/repository/DataStorage";

export default class Service {
  constructor(private dataStorage: DataStorage) {}

  saveSomaProcedimentos(data: any) {
    this.dataStorage.save(data);
  }
}
