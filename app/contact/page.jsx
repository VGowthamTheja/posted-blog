import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
          <p className="mb-4">
            Have questions, feedback, or suggestions? We'd love to hear from
            you! Please use the form below to get in touch.
          </p>
          <form className="max-w-md">
            {/* ... Contact Form Fields ... */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Office Contact</h2>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@example.com">info@example.com</a>
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Address:</strong> 123 Main Street, Cityville, State 12345
          </p>
          <p className="text-gray-600">
            Feel free to reach out to us using the provided email or visit our
            office during working hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
