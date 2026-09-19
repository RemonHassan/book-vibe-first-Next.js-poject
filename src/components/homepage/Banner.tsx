import React from "react";
import bannerimg from "@/assets/hero_img.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="container mx-auto my-6 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-8 py-12 shadow-sm md:px-12 lg:px-16">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Left Content */}
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            📚 Discover Your Next Favorite
          </span>

          <h2 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Books to
            <span className="text-emerald-600"> freshen up </span>
            your bookshelf
          </h2>

          <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
            Explore inspiring stories, timeless classics, and exciting new reads
            carefully selected for every kind of reader.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="rounded-xl bg-emerald-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-emerald-200 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl">
              View the List →
            </button>

            <button className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition-all duration-300 hover:border-emerald-500 hover:text-emerald-600">
              Explore Books
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-200/50 blur-3xl"></div>

          <div className="relative overflow-hidden rounded-3xl bg-white p-4 shadow-2xl shadow-slate-300/50">
            <Image
              src={bannerimg}
              alt="Books collection"
              className="h-auto w-full max-w-md rounded-2xl object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
