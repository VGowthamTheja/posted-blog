import Image from "next/image";
import Link from "next/link";

const BlogContainer = ({ posts }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts?.map((post) => (
          <div key={post.slug} className="bg-white p-4 shadow-md rounded-md">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.meta.slice(0, 100)}...</p>
            <Link
              href={`/blog/${post.slug}`}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogContainer;
