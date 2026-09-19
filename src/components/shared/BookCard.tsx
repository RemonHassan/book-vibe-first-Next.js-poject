import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface IBookCardProps {
  book: IBook;
}
const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div>
      <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        {/* Image */}
        <div className="relative flex h-80 items-center justify-center overflow-hidden bg-slate-100 p-6">
          <Image
            src={book.image}
            width={200}
            height={200}
            alt={book.bookName}
            className="h-full w-full rounded-2xl object-contain transition-transform duration-500 group-hover:scale-105"
          />

          {/* Category */}
          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold text-emerald-700 shadow backdrop-blur">
            {book.category}
          </span>

          {/* Rating */}
          <span className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-slate-900/90 px-3 py-1.5 text-sm font-semibold text-white">
            ⭐ {book.rating}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="line-clamp-1 text-2xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
            {book.bookName}
          </h3>

          <p className="mt-1 text-sm font-medium text-slate-500">
            by {book.author}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500">
            {book.review}
          </p>

          {/* Book Information */}
          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
            <div>
              <p className="text-xs text-slate-400">Pages</p>
              <p className="mt-1 font-semibold text-slate-700">
                {book.totalPages}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Published</p>
              <p className="mt-1 font-semibold text-slate-700">
                {book.yearOfPublishing}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Publisher</p>
              <p className="mt-1 truncate font-semibold text-slate-700">
                {book.publisher}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Rating</p>
              <p className="mt-1 font-semibold text-amber-500">
                ★ {book.rating} / 5
              </p>
            </div>
          </div>

          {/* Button */}
          <Link href={`/books/${book.bookId}`}>
            <button className="mt-6 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white shadow-lg shadow-emerald-100 transition-all duration-300 hover:bg-emerald-700 hover:shadow-emerald-200">
              View Details →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
