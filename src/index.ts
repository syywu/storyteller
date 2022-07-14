import chalk from "chalk";

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

await story();

async function story() {
  console.log(chalk.cyan.underline("The Wise Man"));
  await sleep(2000);
  console.log(
    chalk.yellow("A wise man used to give advice to anyone who approached him.")
  );
  await sleep(2000);
  console.log(
    chalk.magenta(
      "Over the years, he noticed that people had been complaining about the same problems to him. "
    )
  );
  await sleep(2000);
  console.log(
    chalk.bgGreen.black(
      "One day, he told a joke, which made everyone laugh out loud."
    )
  );
  await sleep(2000);
  console.log(
    chalk.bgRed.black(
      "He told them the same joke after a few minutes, and only a few of them smiled."
    )
  );
  await sleep(2000);
  console.log(
    chalk.bgBlue.black("The third time he told the same joke, no one laughed.")
  );
  await sleep(2000);
  console.log(
    chalk.rgb(
      100,
      200,
      50
    )("He smiled and said, “You can’t laugh at the same joke over and over.")
  );
  await sleep(2000);
  console.log(
    chalk.rgb(
      255,
      20,
      20
    )("So why are you always crying about the same problem?”")
  );
  await sleep(2000);
  process.exit(0);
}
