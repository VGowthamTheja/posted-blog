"use client";

import { useState, useEffect } from "react";
import { Client, Databases, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64d5bee5e40aa58208c9");

const BlogPost = ({ params }) => {
  const { slug } = params;

  const [blogPost, setBlogPost] = useState();

  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "64d5c1aa3b4f09c66a75",
      "64d5c1b2cb53dc045b44",
      [Query.equal("slug", slug)]
    );

    promise.then(
      function (response) {
        setBlogPost(response.documents[0]);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4 text-center">
        {blogPost?.title}
      </h1>
      <div className="flex justify-center">
        <img
          src={blogPost?.image}
          alt={blogPost?.title}
          className="w-2/3 h-auto"
        />
      </div>
      <div
        className="mt-8 text-gray-700"
        dangerouslySetInnerHTML={{ __html: blogPost?.content }}
      />
    </div>
  );
};

export default BlogPost;
