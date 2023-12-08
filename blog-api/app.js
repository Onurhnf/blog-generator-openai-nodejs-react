import express from "express";
import cron from "node-cron";
import { scheduledContentGeneration } from "./contentGenerator.js";

export const app = express();
console.log("appjs.env", process.env.NODE_ENV);

app.use(express.json({ limit: "10kb" }));
const topics = [
  "nodejs",
  "react-native",
  "react",
  "expressjs",
  "nextjs",
  "angular",
  "vuejs",
];

//first run
scheduledContentGeneration("nodejs");

// Schedule the function to run every minutes
cron.schedule("* * * * *", () => {
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];
  scheduledContentGeneration(randomTopic);
});

app.all("*", (req, res, next) => {
  next(
    new ErrorHandler(`Cannot find ${req.originalUrl}`, HttpStatus.NOT_FOUND)
  );
});
