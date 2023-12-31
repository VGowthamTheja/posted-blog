"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import BlogContainer from "@/components/BlogContainer";
import { Client, Databases, Query } from "appwrite";
import Link from "next/link";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64d5bee5e40aa58208c9");

export default function Home() {
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
    <>
      <div className="relative">
        <div className="absolute top-24 right-4">
          <Link
            href="/blogs"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            All Blogs
          </Link>
        </div>
        <h1 className="text-3xl font-semibold text-center py-8">
          Latest Blog Posts
        </h1>
        <BlogContainer posts={blogPosts?.slice(-3)} />
      </div>
    </>
  );
}
