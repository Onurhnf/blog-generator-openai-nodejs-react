import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateBlogPost = async (topic) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a blogger who writes blog posts. Write blogs main title inside curly brackets. There should be no other curly brackets inside the post. Sub titles should be inside double star, like **subtitle**. if you are going to sort subtitles for some reason put number inside stars, like **number)subtitle** ",
        },
        {
          role: "user",
          content: `Create a blog post on ${topic}.`,
        },
      ],

      model: "gpt-3.5-turbo",
      temperature: 0.9,
    });

    const generatedContent = completion.choices[0].message.content;
    return generatedContent;
  } catch (error) {
    console.error("Error generating blog post:", error.message);
    throw error;
  }
};
