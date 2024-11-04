import React from 'react';
import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Find Trusted Local Traders
        </h1>
        <p className="text-xl text-white mb-8">
          Connect with verified professionals in your area
        </p>
        <SearchBar />
      </div>
    </div>
  );
}