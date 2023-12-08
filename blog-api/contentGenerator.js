import { generateBlogPost } from "./openai.js";
import Parse from "parse/node.js";

// Function to be executed on the cron schedule
export const scheduledContentGeneration = async (topic) => {
  try {
    const generatedPost = await generateBlogPost(topic);

    Parse.initialize(process.env.BACK4APP_APP_ID, process.env.BACK4APP_JS_KEY);
    Parse.serverURL = "https://parseapi.back4app.com/";

    const Post = Parse.Object.extend("Post");
    const post = new Post();

    // Regex to extract title from response
    const regex = /[^{\}]+(?=})/;
    const match = generatedPost.match(regex);

    //Save title and content from generated post.
    const title = match[0];
    const content = generatedPost.replace(`{${match[0]}}`, "").trim(); // Remove the extracted text from the original string

    post.set("title", title);
    post.set("content", content);
    await post.save();
  } catch (error) {
    console.error("Error during scheduled content generation:", error.message);
  }
};
