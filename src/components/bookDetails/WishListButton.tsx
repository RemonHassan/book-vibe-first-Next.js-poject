"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishList, setWishList } = useContext(BooksContext);
  const handleWishListbtn = () => {
    setWishList([...wishList, book]);
    toast.success(`wishlist ${book.bookName}`);
  };
  return (
    <button
      onClick={() => handleWishListbtn()}
      className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg"
    >
      Wishlist
    </button>
  );
};

export default WishListButton;
