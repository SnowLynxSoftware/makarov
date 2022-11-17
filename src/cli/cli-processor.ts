import { Command } from "commander";
import { ServerCommand } from "./server.command";

export class CLIProcessor {
  public static async start(): Promise<void> {
    const program = new Command();

    program
      .name("makarov")
      .description("CLI Tools for Makarov")
      .version("1.0.0");

    program
      .command("server")
      .description("Start the web server")
      .action(async () => {
        await ServerCommand.run();
      });

    program.parse();
  }
}
