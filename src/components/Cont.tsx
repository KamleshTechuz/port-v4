import { Send, X } from "lucide-react";
import React, { useState, useEffect } from "react";

const Cont = ({ setShowChat, handleChatToggle }: any) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (setShowChat) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300); // Delay hiding after animation
    }
  }, [setShowChat]);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (you can send this data to an API or do something else)
    console.log(formData);
    // Optionally, close the chat after submission
    setShowChat(false);
  };

  return (
    <div
      className={`fixed bottom-24 left-10 bg-gray-800 p-6 rounded-lg shadow-lg w-[300px] h-[400px] flex flex-col space-y-4 z-50 transition-transform duration-500 ease-in-out ${
        isVisible ? "transform translate-x-0 opacity-100" : "transform -translate-x-10 opacity-0"
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-white text-lg font-semibold">Contact Support</h3>
        <button
          onClick={handleChatToggle}
          className="text-white font-semibold"
          aria-label="Close Chat"
        >
          <X />
        </button>
      </div>

      {/* Chat Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          autoComplete="off"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          placeholder="Your Name"
          className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          autoComplete="off"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
          placeholder="Your Email"
          className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          autoComplete="off"
          name="message"
          value={formData.message}
          onChange={handleFormChange}
          placeholder="Your Message"
          className="w-full p-4 bg-gray-700 rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Cont;
