// define an interface that represents a logger
interface Logger {
  log(message: string): void;
}

// define a class that represents a file logger
class FileLogger implements Logger {
  log(message: string): void {
    // write the message to a file
    // implementation details are omitted for simplicity
    console.log("FILE");
    console.log(message);
  }
}

// define a class that represents a database logger
class DBLogger implements Logger {
  log(message: string): void {
    // write the message to a database
    // implementation details are omitted for simplicity
    console.log("DB");
    console.log(message);
  }
}

// define a class that uses a logger to log messages
class MessageLogger {
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  log(message: string): void {
    this.logger.log(message);
  }
}

// create a FileLogger and a MessageLogger that uses it
const fileLogger = new FileLogger();
const dbLogget = new DBLogger();

const messageLogger = new MessageLogger(fileLogger);
const messageLoggetDB = new MessageLogger(dbLogget);

// log a message using the MessageLogger
messageLogger.log("This is a test message in FILE");
messageLoggetDB.log("This is a test message in DB");
