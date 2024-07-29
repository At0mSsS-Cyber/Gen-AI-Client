import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Content */}
      <main className="flex-grow p-6">
        <div className="container mx-auto pt-16 flex items-center justify-center relative">
          <img
            src="/img/anatomy-1751201_640.png" // Use relative path from the public folder
            alt="Gen AI"
            className="w-full max-w-lg"
          />
          <div className="absolute right-0 top-0 w-1/2 h-full p-6 bg-gray-100 bg-opacity-75 rounded-l text-gray-700 shadow-md flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Welcome to Gen AI</h2>
            <p className="mb-6">
              Gen AI is a revolutionary platform that leverages cutting-edge
              artificial intelligence technologies to deliver advanced solutions
              for your needs. Our goal is to harness the power of AI to enhance
              your productivity, automate complex tasks, and provide insights
              that drive smarter decision-making. With a focus on innovation and
              user experience, Gen AI is designed to adapt to your evolving
              requirements and deliver exceptional results.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
