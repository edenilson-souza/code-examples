export default interface DB {
  get(params: any): any;
  save(data: any): void;
  update(params: any, data: any): void;
  delete(params: any): void;
}
