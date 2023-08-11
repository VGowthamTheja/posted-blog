"use client";

import { useState, useEffect } from "react";

import { Client, Databases, Query } from "appwrite";
import BlogContainer from "@/components/BlogContainer";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64d5bee5e40aa58208c9");

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState();

  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "64d5c1aa3b4f09c66a75",
      "64d5c1b2cb53dc045b44"
    );

    promise.then(
      function (response) {
        setBlogPosts(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-8">
        All Blog Posts
      </h1>
      <BlogContainer posts={blogPosts} />
    </div>
  );
};

export default BlogPage;
