// define an interface for a data storage service
interface DataStorage {
    save(data: any): void;
  }
  
  // define a class that implements the DataStorage interface
  class FileDataStorage implements DataStorage {
    save(data: any): void {
      // save the data to a file
    }
  }
  
  // define a class that uses the DataStorage service
  class UserService {
    constructor(private dataStorage: DataStorage) {}
  
    saveUser(user: any) {
      this.dataStorage.save(user);
    }
  }
  
  // create an instance of the FileDataStorage class
  const dataStorage = new FileDataStorage();
  
  // create an instance of the UserService class and inject the data storage service
  const userService = new UserService(dataStorage);
  
  // save a user using the UserService
  userService.saveUser({ name: 'John Doe' });
  