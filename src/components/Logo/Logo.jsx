import React from "react";

const Logo = () => {
  return (
    <div className="sm:mx-w-sm md:mx-w-lg max-w-4xl p-4 mx-auto">
      <div className="text-center py-4">
        <div className="inline text-9xl transition duration-300 ease-in-out hover:text-purple-400">
          <a href="/">Jobbs</a>
        </div>
        <div className="inline text-2xl text-purple-700">.info</div>
      </div>
    </div>
  );
};

export default Logo;
