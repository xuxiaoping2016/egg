import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getVersion(): Object {
    return {
      code: 200, 
      msg: "OK",
      data: {
        version:"0.0.1"
      }, 
    }
  }
}
