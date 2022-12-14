// The first layer is the outermost layer, and it represents the
// boundaries of the system. It contains things like controllers,
// routers, and gateways that handle incoming requests and outgoing responses.
class Controller {
  constructor(private service: Service) {}

  handleRequest(request: Request): Response {
    // Use the service to handle the request and return a response
    const data = this.service.saveData(request);
    return new Response(data);
  }
}




// The second layer is the application layer. It contains the business logic
// of the system, and it defines the use cases that the system should support.
// It defines an interface for the service that the first layer uses,
// but it doesn't provide an implementation.
interface Service {
  saveData(data: Request): any;
}

// The third layer is the domain layer. It contains the core business
// entities and rules of the system. It provides implementations of the
// services that the application layer defines.
class ServiceImpl implements Service {
  constructor(private repository: Repository) {}
  saveData(data: Request): any {
    // Perform some business logic and return the result
    const save = this.repository.save(data);
  }
}




// The fourth and innermost layer is the infrastructure layer.
// It contains the low-level details of the system, such as
// databases, third-party APIs, and logging. It provides
// implementations of the repositories that the domain layer uses.
interface Repository {
    save(data: any): void;
}

class RepositoryImpl implements Repository {
  save(data: any): void {
    // Save the data to a database or file
  }
}
