"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const redirectToSlug = () => {
    if (inputRef.current?.value) {
      router.push(`/${inputRef.current?.value}`);
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <input
          ref={inputRef}
          className="border-2 border-black p-2 rounded mr-4"
          placeholder="Enter a slug"
        />
        <button
          onClick={redirectToSlug}
          className="border-2 border-black p-2 rounded mr-4"
        >
          Enter
        </button>
      </div>
      <div className="flex-1 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
    </main>
  );
}
