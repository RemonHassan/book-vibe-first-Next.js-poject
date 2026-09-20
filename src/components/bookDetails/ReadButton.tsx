"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);
  const handleReadbtn = () => {
    setReadBooks([...readBooks, book]);
    toast.success(`added ${book.bookName}`);
  };
  return (
    <button
      onClick={() => handleReadbtn()}
      className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition-all hover:bg-slate-100"
    >
      Read
    </button>
  );
};

export default ReadButton;
