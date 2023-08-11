import React from "react";

const About = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to Posted Blog, your go-to source for insightful articles and
        valuable information on a wide range of topics. Our mission is to
        provide high-quality content that educates, inspires, and entertains our
        readers.
      </p>
      <p className="mb-4">
        Whether you're a seasoned professional or just starting your journey,
        our carefully curated articles cover everything from programming and
        technology to design, lifestyle, and more.
      </p>
      <p className="mb-4">
        Our team of dedicated writers and experts is passionate about sharing
        their knowledge and expertise with you. We believe in fostering a
        vibrant community of learners and creators who are eager to expand their
        horizons and stay up-to-date with the latest trends.
      </p>
      <p>
        Thank you for joining us on this exciting journey. Feel free to explore
        our blog posts and engage with our content. If you have any questions or
        feedback, don't hesitate to{" "}
        <a href="/contact" className="text-blue-500 hover:underline">
          contact us
        </a>
        .
      </p>
    </div>
  );
};

export default About;
