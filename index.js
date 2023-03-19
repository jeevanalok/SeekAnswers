#!/usr/bin/env node

import chalk, { colorNames } from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import ora from "ora";

import bookOfAnswersArray from "./bookofanswers.js";

const log = console.log;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function answer() {
  log(
    chalk.blueBright.bold(
      "\n Concentrate on your question for some time, while the universe searches for your answer. \n"
    )
  );

  let ansValue = Math.floor(Math.random() * 94);
  let loadingVal = Math.floor(Math.random() * 3);

  let loadingText = [
    " Pulling akashic records......",
    " Loading...........",
    "Measuring the alignment of stars.........",
  ];
  const spinner = ora(loadingText[loadingVal]).start();
  await sleep(8000);
  spinner.stop();
  const result = chalkAnimation.neon(`   ${bookOfAnswersArray[ansValue]}`);

  await sleep(4000);
  result.stop();
}

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    "Inspired by The Book of Answers by Carol Bolt \n"
  );

  await sleep();
  rainbowTitle.stop();

  figlet("Terminal of Answers", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
  await sleep(1000);
  //   answer();
}

console.clear();
await welcome();
await answer();
