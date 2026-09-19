import { IBook } from "@/types/books.type";
import Image from "next/image";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}
const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};
const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const books = await getBooks();
  const book: IBook = books.find((b: IBook) => b.bookId === Number(id));
  return (
    <section className="container mx-auto my-12 px-4">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
        {/* ================= IMAGE ================= */}
        <div className="flex h-[550px] items-center justify-center overflow-hidden rounded-2xl bg-slate-100 p-8">
          <Image
            src={book.image}
            alt={book.bookName}
            width={400}
            height={500}
            className="h-full w-auto rounded-lg object-contain shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* ================= DETAILS ================= */}
        <div className="space-y-5">
          {/* Title */}
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              {book.bookName}
            </h1>

            <p className="mt-3 text-lg text-slate-600">
              By :{" "}
              <span className="font-medium text-slate-900">{book.author}</span>
            </p>
          </div>

          <div className="border-t border-slate-200" />

          {/* Category */}
          <div>
            <p className="text-base font-medium text-slate-700">
              {book.category}
            </p>
          </div>

          <div className="border-t border-slate-200" />

          {/* Review */}
          <div>
            <p className="text-sm leading-6 text-slate-500">
              <span className="font-bold text-slate-900">Review : </span>
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-4">
            <span className="font-bold text-sm text-slate-900">Tag</span>

            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-200" />

          {/* Book Information */}
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-2">
              <span className="text-slate-500">Number of Pages:</span>

              <span className="font-semibold text-slate-900">
                {book.totalPages}
              </span>
            </div>

            <div className="grid grid-cols-2">
              <span className="text-slate-500">Publisher:</span>

              <span className="font-semibold text-slate-900">
                {book.publisher}
              </span>
            </div>

            <div className="grid grid-cols-2">
              <span className="text-slate-500">Year of Publishing:</span>

              <span className="font-semibold text-slate-900">
                {book.yearOfPublishing}
              </span>
            </div>

            <div className="grid grid-cols-2">
              <span className="text-slate-500">Rating:</span>

              <span className="font-semibold text-slate-900">
                {book.rating}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-3">
            <button className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition-all hover:bg-slate-100">
              Read
            </button>

            <button className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsPage;
