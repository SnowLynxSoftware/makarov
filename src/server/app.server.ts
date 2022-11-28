import express from "express";
import { AddressInfo } from "net";

export class AppServer {
  public static async start(): Promise<void> {
    const app = express();

    // View Engine
    app.set("view engine", "ejs");
    app.set("views", "dist/views");

    // Health Check
    app.get("/health", (_req, res, _next) => {
      res.json({ status: "OK" });
    });

    // Index Test
    app.get("/", (_req, res, _next) => {
      res.render("index", { title: "Hey", message: "Hello there!" });
    });

    const server = app.listen(8192);
    console.log(
      `Server is listening on port: [${(server.address() as AddressInfo).port}]`
    );
  }
}
