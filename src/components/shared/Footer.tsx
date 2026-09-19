import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold text-white">
              Book<span className="text-emerald-500">Nest</span>
            </h2>

            <p className="max-w-xs text-sm leading-6 text-slate-400">
              Discover stories, explore new ideas, and find your next favorite
              book. Your personal space for great reads.
            </p>

            <button className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-900/30">
              Explore Books →
            </button>
          </div>

          {/* Explore */}
          <nav className="space-y-4">
            <h6 className="text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h6>

            <div className="flex flex-col gap-3 text-sm">
              <a className="transition-colors hover:text-emerald-400">
                All Books
              </a>
              <a className="transition-colors hover:text-emerald-400">
                New Arrivals
              </a>
              <a className="transition-colors hover:text-emerald-400">
                Best Sellers
              </a>
              <a className="transition-colors hover:text-emerald-400">
                Categories
              </a>
            </div>
          </nav>

          {/* Company */}
          <nav className="space-y-4">
            <h6 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h6>

            <div className="flex flex-col gap-3 text-sm">
              <a className="transition-colors hover:text-emerald-400">
                About Us
              </a>
              <a className="transition-colors hover:text-emerald-400">
                Contact
              </a>
              <a className="transition-colors hover:text-emerald-400">
                Privacy Policy
              </a>
              <a className="transition-colors hover:text-emerald-400">
                Terms & Conditions
              </a>
            </div>
          </nav>

          {/* Newsletter / Social */}
          <div className="space-y-5">
            <h6 className="text-sm font-bold uppercase tracking-wider text-white">
              Stay Connected
            </h6>

            <p className="text-sm leading-6 text-slate-400">
              Follow us for book recommendations, new arrivals, and reading
              inspiration.
            </p>

            <div className="flex gap-3">
              {/* Facebook */}
              <a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all duration-300 hover:bg-emerald-600 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 8H6v4h3v12h5V12h3.64l.36-4h-4V6.33C14 5.38 14.19 5 15.12 5H18V0h-3.81C10.6 0 9 1.58 9 4.62V8z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all duration-300 hover:bg-emerald-600 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2zm-1.1 17.92h1.73L8.26 3.95H6.4L17.8 19.92z" />
                </svg>
              </a>

              {/* YouTube */}
              <a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all duration-300 hover:bg-emerald-600 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.5 6.19a3 3 0 0 0-2.11-2.12C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.39.57A3 3 0 0 0 .5 6.19 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.81 3 3 0 0 0 2.11 2.12c1.87.57 9.39.57 9.39.57s7.52 0 9.39-.57a3 3 0 0 0 2.11-2.12A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.81zM9.55 15.5v-7L15.5 12l-5.95 3.5z" />
                </svg>
              </a>

              {/* Instagram */}
              <a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all duration-300 hover:bg-emerald-600 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row">
            <p>© 2026 BookNest. All rights reserved.</p>

            <p>
              Made with <span className="text-emerald-500">♥</span> for book
              lovers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
