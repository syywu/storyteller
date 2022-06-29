import chalk from "chalk";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

console.log(chalk.cyan.underline("The Wise Man"));
sleep(1000);
console.log(
  chalk.yellow("A wise man used to give advice to anyone who approached him.")
);

console.log(
  chalk.magenta(
    "Over the years, he noticed that people had been complaining about the same problems to him. "
  )
);
console.log(
  chalk.bgGreen("One day, he told a joke, which made everyone laugh out loud.")
);
console.log(
  chalk.bgRed(
    "He told them the same joke after a few minutes, and only a few of them smiled."
  )
);
console.log(
  chalk.bgBlue("The third time he told the same joke, no one laughed.")
);
console.log(
  chalk.rgb(
    100,
    50,
    67
  )("He smiled and said, “You can’t laugh at the same joke over and over.")
);
console.log(
  chalk.rgb(
    50,
    150,
    80
  )("So why are you always crying about the same problem?”")
);
