// The entities layer contains the business objects of the system.
// These objects are independent of any frameworks or libraries,
// and should not depend on any other layer of the system.
class User {
  constructor(public id: string, public name: string) {}
}


// The use cases layer contains the business logic of the system.
// These are the actions that the system can perform,
// and they should depend only on the entities layer.

interface UserRepository {
    save(data: User): void;
}

class CreateUser {
  constructor(private userRepository: UserRepository) {}

  execute(user: User): void {
    // Validate the user
    // ...

    // Save the user to the repository
    this.userRepository.save(user);
  }
}

class UserRepositoryImpl implements UserRepository {
    save(data: User): void {

    }
}

// The interface adapters layer contains the code that adapts the
// use cases and entities to the framework or library that the
// system uses to interact with the outside world.
// This layer should depend on the use cases and entities layers,
// but the use cases and entities layers should not depend on this layer.
class UserController {
  constructor(private createUser: CreateUser) {}

  async handleHttpRequest(request: Request): Promise<Response> {
    // Extract the user data from the request
    const user = new User("request.body.id", "request.body.name");

    // Execute the create user use case
    this.createUser.execute(user);

    // Return a response
    return new Response("User created successfully");
  }
}
