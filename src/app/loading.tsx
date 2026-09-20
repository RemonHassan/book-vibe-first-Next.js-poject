import React from "react";

const GlobalLoading = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-emerald-600"></div>

          <div className="absolute inset-3 flex items-center justify-center rounded-full bg-white shadow-sm">
            <span className="text-lg">📖</span>
          </div>
        </div>

        {/* Text */}
        <h2 className="mt-6 text-xl font-bold text-slate-800">Book Vibe</h2>

        <p className="mt-1 text-sm text-slate-500">
          Discovering your next great read...
        </p>

        {/* Loading dots */}
        <div className="mt-4 flex gap-1.5">
          <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-600"></span>
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-emerald-600"
            style={{ animationDelay: "150ms" }}
          ></span>
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-emerald-600"
            style={{ animationDelay: "300ms" }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default GlobalLoading;
