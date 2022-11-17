import { CLIProcessor } from "./cli/cli-processor";

const main = async () => {
  await CLIProcessor.start();
};

main()
  .then(() => {
    console.debug("Makarov Finished...");
  })
  .catch((error) => {
    console.error(error.message);
  });
