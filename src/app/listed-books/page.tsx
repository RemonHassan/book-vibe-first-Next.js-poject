"use client";

import ListedBookCard from "@/components/shared/ListedBookCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext, useState } from "react";

const ListedBookPage = () => {
  const { readBooks, wishList } = useContext(BooksContext);
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];
    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
    }
    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishLists = sortBooks(wishList);
  return (
    <div className="container mx-auto py-10">
      <div className="mb-10 rounded-3xl bg-gradient-to-r from-emerald-50 via-white to-slate-50 p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Heading */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Your Collection
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Listed Books
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Explore, manage, and organize your favorite books.
            </p>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="hidden text-sm font-semibold text-slate-500 sm:block">
              Sort by
            </span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "rating" | "pages" | "year")
              }
              className="select select-success w-full rounded-xl border-slate-200 bg-white font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-emerald-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100 sm:w-52"
            >
              <option value="rating">Rating</option>
              <option value="pages">Number of Pages</option>
              <option value="year">Published Year</option>
            </select>
          </div>
        </div>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books(${readBooks.length})`}
        />
        <div className="tab-content border-base-300 bg-base-100 p-6 md:p-10">
          {readBooks.length > 0 ? (
            <div className="flex flex-col gap-5">
              {sortedReadBooks.map((book: IBook) => (
                <ListedBookCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 py-16 text-center">
              <p className="text-lg font-semibold text-slate-600">
                No books found
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Books you mark as read will appear here.
              </p>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist Books(${wishList.length})`}
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {wishList.length > 0 ? (
            sortedWishLists.map((book: IBook) => {
              return (
                <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
              );
            })
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 py-16 text-center">
              <p className="text-lg font-semibold text-slate-600">
                No books found
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Books you mark as read will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBookPage;
