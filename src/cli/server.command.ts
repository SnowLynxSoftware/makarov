import { AppServer } from "../server/app.server";

export class ServerCommand {
  public static async run(): Promise<void> {
    try {
      await AppServer.start();
    } catch (error: any) {
      console.error(error.message);
    }
  }
}
