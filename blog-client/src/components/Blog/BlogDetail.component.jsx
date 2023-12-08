import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Parse from "parse";
import BlogTitle from "./BlogTitle.component.jsx";
import BlogContent from "./BlogContent.component.jsx";
import GoBackButton from "../UI/GoBackButton.jsx";

function DetailPage() {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });
  const { postId } = useParams();

  useEffect(() => {
    const parseQuery = new Parse.Query("Post");
    parseQuery.equalTo("objectId", postId);
    async function getPost() {
      const result = await parseQuery.find();
      const title = result[0].get("title");
      const content = result[0].get("content");
      setPost({
        title,
        content,
      });
    }
    getPost();
    return () => {
      setPost({
        title: "",
        content: "",
      });
    };
  }, [postId]);

  return (
    <div className="w-[50rem] my-0 mx-auto relative">
      <div className="absolute -left-32 top-2 w-32">
        <GoBackButton />
      </div>

      <BlogTitle>{post.title}</BlogTitle>
      <BlogContent content={post.content} />
    </div>
  );
}

export default DetailPage;
