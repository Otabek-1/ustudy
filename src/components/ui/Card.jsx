import React from "react";

export function Card({ children, className }) {
  return (
    <div className={`bg-gray-700 rounded-lg p-3 shadow-lg ${className}`}>
      {children}
    </div>
  );
}
