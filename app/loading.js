import React from "react";

const BlogContainerSkeleton = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 animate-pulse"
          >
            <div className="bg-gray-300 h-32 mb-4 rounded-lg"></div>
            <div className="h-6 bg-gray-300 w-2/3 mb-2"></div>
            <div className="h-4 bg-gray-300 w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogContainerSkeleton;
