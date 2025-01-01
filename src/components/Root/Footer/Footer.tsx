import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#234234] text-white p-4 text-center">
      <div className="space-x-4">
        <a
          href="www.linkedin.com/in/eliassfl"
          className="hover:text-blue-300"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/eliasSFL"
          className="hover:text-blue-300"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
      <p className="mt-4">&copy; 2025 Elias Chew. All Rights Reserved.</p>
    </footer>
  );
};
