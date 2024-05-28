import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! message:${process.env.MESSAGE} envVar:${process.env.ENVVAR} `;
  }
}
