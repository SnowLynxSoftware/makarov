import express from "express";
import { AddressInfo } from "net";

export class AppServer {
  public static async start(): Promise<void> {
    const app = express();

    app.get("/health", (_req, res, _next) => {
      res.json({ status: "OK" });
    });

    const server = app.listen(8192);
    console.log(
      `Server is listening on port: [${(server.address() as AddressInfo).port}]`
    );
  }
}
