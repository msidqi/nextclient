import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import PageContent from "@/modules/pages/PageContent";
import { getPages } from "@/server/requests";
import Link from "next/link";

export default async function MainPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { suspense: true } },
  });
  await queryClient.prefetchQuery({
    queryKey: ["pages", slug],
    queryFn: () => getPages({ slug }),
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm">
        <div className="mb-4">
          <Link className="font-bold" href="/">
            {"< Home"}
          </Link>
        </div>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <PageContent slug={slug} />
        </HydrationBoundary>
      </div>
    </main>
  );
}
