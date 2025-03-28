import React from 'react';
// import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Home = () => {
    return (
      <div className="relative max-w-7xl lg:mt-[80px] lg:mx-auto px-1 h-auto flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          {/* Columna de imagen */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <img
              src="/1personalpic.jpg"
              alt="Ignacio Guzman picture"
              className="grayscale-[0.9] w-full max-w-[800px] h-auto object-cover shadow-lg"
            />
          </div>
  
          {/* Columna de texto */}
          <div className="  flex flex-col justify-center items-start text-center lg:text-left order-2 lg:order-1">
            <h1 className="mt-4 text-7xl lg:text-7xl xl:text-9xl font-extrabold mb-4 tracking-tight text-left">
              Hi, I`m Ignacio
            </h1>
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-left">
              Web developer and graphic designer
            </h2>
            <h3 className="text-xl lg:text-3xl font-bold tracking-tight text-left mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat, ipsum euismod vehicula tincidunt.
            </h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;