import { render, screen } from "@testing-library/react";
import BlogContent from "../src/components/Blog/BlogContent.component.jsx";
import BlogTitle from "../src/components/Blog/BlogTitle.component.jsx";
import "@testing-library/jest-dom/extend-expect";

test("renders blog post content", () => {
  const mockPost = {
    title: "Test Post",
    content: "This is a test blog post content.",
  };

  render(
    <div className="w-[50rem] my-0 mx-auto relative">
      <BlogTitle>{mockPost.title}</BlogTitle>
      <BlogContent content={mockPost.content} />
    </div>
  );

  const titleElement = screen.getByText(/Test Post/i);
  const contentElement = screen.getByText(/This is a test blog post content/i);

  expect(titleElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
});
