import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getInfo() {
    return {
      name: "Full-Stack Starter API",
      version: "0.1.0",
      docs: "/api/docs",
    };
  }
}
