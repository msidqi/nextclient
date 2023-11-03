import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className="mb-8 text-2xl font-semibold">Nothing found </h2>
      <div className="mb-4">
        <Link className="font-bold" href="/">
          {"< Home"}
        </Link>
      </div>
    </main>
  );
}
