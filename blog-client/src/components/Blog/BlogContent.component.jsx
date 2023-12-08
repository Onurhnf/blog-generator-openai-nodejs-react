import React from "react";

const BlogContent = ({ content }) => {
  const paragraphs = content.split("**");

  return (
    <div className="mt-5 bg-gray-50 p-4 rounded-lg">
      {paragraphs.map((paragraph, index) => (
        <React.Fragment key={index}>
          {index % 2 === 0 ? (
            // Normal text
            <p>{paragraph}</p>
          ) : (
            // Subtitle followed by a new line
            <>
              <br />
              <strong className="text-lg">{paragraph}</strong>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BlogContent;
