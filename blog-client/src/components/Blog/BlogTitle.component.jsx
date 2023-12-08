function BlogTitle({ children }) {
  return (
    <h1 className="text-2xl font-bold bg-gray-100 p-4 rounded-lg">
      {children}
    </h1>
  );
}

export default BlogTitle;
