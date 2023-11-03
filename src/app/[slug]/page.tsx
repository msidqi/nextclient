import PageContent from "@/modules/pages/PageContent";
import { getPages } from "@/server/requests";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function MainPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["pages", slug],
    queryFn: () => getPages({ slug }),
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <PageContent slug={slug} />
        </HydrationBoundary>
      </div>
    </main>
  );
}
