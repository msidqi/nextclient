import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className="mb-8 text-2xl font-semibold">Nothing found </h2>
      <Link href="/" className="mb-3 text-2xl font-semibold">
        <span className="mr-2 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          &lt;-
        </span>
        Go back
      </Link>
    </main>
  );
}
