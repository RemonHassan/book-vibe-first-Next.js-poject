import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListedBookCard = ({ book }: { book: IBook }) => {
  return (
    <div
      key={book.bookId}
      className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:flex-row"
    >
      {/* Book Image */}
      <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 md:h-56 md:w-40">
        <Image
          src={book.image}
          alt={`${book.bookName} book cover`}
          fill
          sizes="(max-width: 768px) 100vw, 160px"
          className="object-contain p-3 transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Book Information */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          {/* Title + Rating */}
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                {book.bookName}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                By{" "}
                <span className="font-medium text-slate-700">
                  {book.author}
                </span>
              </p>
            </div>

            <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-600">
              ⭐ {book.rating}
            </span>
          </div>

          {/* Review */}
          <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500">
            {book.review}
          </p>

          {/* Book Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-lg bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              {book.category}
            </span>

            <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {book.totalPages} Pages
            </span>

            <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {book.yearOfPublishing}
            </span>

            {book.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Information */}
        <div className="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Publisher:{" "}
            <span className="font-semibold text-slate-700">
              {book.publisher}
            </span>
          </p>

          <Link href={`/books/${book.bookId}`}>
            <button
              type="button"
              className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-100"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
