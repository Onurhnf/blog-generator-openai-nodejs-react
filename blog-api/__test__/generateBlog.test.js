import { generateBlogPost } from "../openai.js";

test("generates blog post content", async () => {
  console.log("Starting test...");

  const topic = "Node.js";

  // Assuming generateBlogPost returns the generated content
  const generatedContent = await generateBlogPost(topic);

  console.log("Test completed.");

  expect(generatedContent).toBeDefined();
  expect(typeof generatedContent).toBe("string");
}, 100000); //response time a bit long
