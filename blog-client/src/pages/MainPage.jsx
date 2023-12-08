import React, { useEffect, useState } from "react";
import Parse from "parse";
import { useParseQuery } from "@parse/react";
import Loader from "../components/UI/Loader.jsx";
import { Link } from "react-router-dom";
import BlogTitle from "../components/Blog/BlogTitle.component.jsx";

function MainPage() {
  const pageSize = 5; // Number of posts to fetch per page
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const parseQuery = new Parse.Query("Post");

  parseQuery.descending("createdAt"); // Order posts by createdAt in descending order
  //pagination
  parseQuery.limit(pageSize);
  parseQuery.skip((currentPage - 1) * pageSize);

  const { isLoading, isSyncing, results } = useParseQuery(parseQuery);

  useEffect(() => {
    const countQuery = new Parse.Query("Post");
    countQuery.count().then((count) => {
      setTotalPages(Math.ceil(count / pageSize));
    });
  }, [pageSize]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <div className="w-[50rem] my-0 mx-auto">
        {isLoading || isSyncing ? (
          <Loader />
        ) : (
          results && (
            <>
              <ol className="flex list-disc flex-col gap-4">
                {results.map((result) => (
                  <Link to={`/blog/${result.id}`} key={result.id}>
                    <li>
                      <BlogTitle>{result.get("title")}</BlogTitle>
                    </li>
                  </Link>
                ))}
              </ol>
              <div className="flex items-center justify-center mt-4">
                {/*Button could be a component here */}
                <button
                  className=" rounded-full px-4 py-2 md:px-5 md:py-2.5 text-xs inline-block  bg-gray-800 font-semibold uppercase tracking-wide text-stone-50 transition-colors duration-300 hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-900 focus:ring-offset-2 disabled:cursor-not-allowed drop-shadow-md hover:drop-shadow-none disabled:bg-gray-300 "
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span className="mx-4 font-bold">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className=" rounded-full px-4 py-2 md:px-5 md:py-2.5 text-xs inline-block  bg-gray-800 font-semibold uppercase tracking-wide text-stone-50 transition-colors duration-300 hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-900 focus:ring-offset-2 disabled:cursor-not-allowed drop-shadow-md hover:drop-shadow-none disabled:bg-gray-300 "
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </>
          )
        )}
      </div>
    </>
  );
}

export default MainPage;
