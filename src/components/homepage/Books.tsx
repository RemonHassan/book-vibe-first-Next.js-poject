import { IBook } from "@/types/books.type";
import BookCard from "../shared/BookCard";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};
const Books = async () => {
  const booksData = await getBooks();
  return (
    <div className="container mx-auto my-16 px-4">
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-600">
          Discover Your Next Read
        </p>

        <h2 className="text-4xl font-extrabold text-slate-900">
          Featured Books
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          Explore our collection of timeless classics, inspiring stories, and
          unforgettable books.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book: IBook) => {
          return <BookCard key={book.bookId} book={book}></BookCard>;
        })}
      </div>
    </div>
  );
};

export default Books;
