"use client";

import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

import { IBook } from "@/types/books.type";

interface IBooksContext {
  readBooks: IBook[];
  setReadBooks: Dispatch<SetStateAction<IBook[]>>;

  wishList: IBook[];
  setWishList: Dispatch<SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<IBooksContext>({
  readBooks: [],
  setReadBooks: () => {},
  wishList: [],
  setWishList: () => {},
});

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);

  const [wishList, setWishList] = useState<IBook[]>([]);

  const sharedData: IBooksContext = {
    readBooks,
    setReadBooks,
    wishList,
    setWishList,
  };

  return (
    <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
