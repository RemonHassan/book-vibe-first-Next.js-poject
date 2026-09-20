"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
} from "recharts";
import { useContext } from "react";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";

const colors = [
  "#059669",
  "#10B981",
  "#14B8A6",
  "#0D9488",
  "#34D399",
  "#047857",
  "#065F46",
];

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      fill={color}
      stroke={color}
      strokeWidth={props.isActive ? 3 : 0}
      style={{
        transition: "all 0.3s ease",
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];

  return <Label {...props} fill={fill} fontSize={12} fontWeight={700} />;
};

const ReadBooks = () => {
  const { readBooks } = useContext(BooksContext);

  const data = readBooks.map((book: IBook, index: number) => ({
    name: book.bookName,
    pages: book.totalPages,
    index: index + 1,
  }));

  const totalPages = readBooks.reduce(
    (total, book) => total + book.totalPages,
    0,
  );

  return (
    <section className="container mx-auto px-4 py-10 md:px-6">
      {readBooks.length > 0 ? (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* Header */}
          <div className="flex flex-col gap-4 border-b border-slate-100 bg-gradient-to-r from-emerald-50 to-slate-50 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Reading Analytics
              </p>

              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                Your Reading Progress
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Compare the number of pages in your read books.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-3">
              <div className="rounded-2xl border border-emerald-100 bg-white px-5 py-3 shadow-sm">
                <p className="text-xs font-medium text-slate-400">Books Read</p>
                <p className="mt-1 text-xl font-bold text-emerald-600">
                  {readBooks.length}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white px-5 py-3 shadow-sm">
                <p className="text-xs font-medium text-slate-400">
                  Total Pages
                </p>
                <p className="mt-1 text-xl font-bold text-slate-800">
                  {totalPages.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="w-full overflow-x-auto p-5 md:p-8">
            <div className="min-w-[650px]">
              <BarChart
                style={{
                  width: "100%",
                  maxWidth: "1100px",
                  height: "420px",
                  margin: "0 auto",
                }}
                responsive
                data={data}
                margin={{
                  top: 30,
                  right: 20,
                  left: 0,
                  bottom: 40,
                }}
              >
                <CartesianGrid
                  strokeDasharray="4 4"
                  vertical={false}
                  stroke="#E2E8F0"
                />

                <XAxis
                  dataKey="name"
                  tick={{
                    fill: "#64748B",
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                  axisLine={false}
                  tickLine={false}
                  interval={0}
                  angle={-25}
                  textAnchor="end"
                  height={70}
                />

                <YAxis
                  tick={{
                    fill: "#64748B",
                    fontSize: 12,
                  }}
                  axisLine={false}
                  tickLine={false}
                  width={45}
                />

                <Tooltip
                  cursor={{
                    fill: "#ECFDF5",
                    opacity: 0.7,
                  }}
                  contentStyle={{
                    borderRadius: "14px",
                    border: "1px solid #E2E8F0",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.10)",
                    padding: "12px 14px",
                  }}
                  labelStyle={{
                    color: "#0F172A",
                    fontWeight: 700,
                    marginBottom: "4px",
                  }}
                  formatter={(value) => [
                    `${Number(value).toLocaleString()} pages`,
                    "Pages",
                  ]}
                />

                <Bar
                  dataKey="pages"
                  name="Pages"
                  shape={TriangleBar}
                  activeBar
                  radius={[8, 8, 0, 0]}
                >
                  <LabelList
                    dataKey="pages"
                    content={CustomColorLabel}
                    position="top"
                  />
                </Bar>
              </BarChart>
            </div>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
            📚
          </div>

          <h2 className="mt-5 text-2xl font-bold text-slate-800">
            No Reading Data Yet
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            Start adding books to your read list and your reading statistics
            will appear here.
          </p>
        </div>
      )}
    </section>
  );
};

export default ReadBooks;
