import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Content */}
      <main className="flex-grow p-6">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-4">Welcome to Gen AI</h2>
          <p className="mb-6">
            Gen AI is a revolutionary platform that leverages cutting-edge
            artificial intelligence technologies to deliver advanced solutions
            for your needs. Our goal is to harness the power of AI to enhance
            your productivity, automate complex tasks, and provide insights that
            drive smarter decision-making. With a focus on innovation and user
            experience, Gen AI is designed to adapt to your evolving
            requirements and deliver exceptional results.
          </p>
          <img
            src="https://via.placeholder.com/600x400" // Replace with an appropriate image URL
            alt="Gen AI"
            className="w-full max-w-4xl rounded shadow-md"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
