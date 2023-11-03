"use client";
import React, { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { getPages } from "@/server/requests";
import SectionRenderer from "@/modules/pages/SectionRenderer";

const PageContent = ({ slug }: { slug?: string }) => {
  const { data } = useQuery({
    queryKey: ["pages", slug],
    queryFn: () => getPages({ slug }),
    enabled: Boolean(slug),
  });

  if (data?.data?.length === 0) return notFound();

  const title = data?.data?.[0].attributes.heading || "Page";

  return (
    <>
      <title>{title}</title>
      <section>
        <h1 className="mb-6">slug: {slug}</h1>
        <Suspense fallback="Loading...">
          {data?.data?.[0].attributes.contentSections.map((contentSection) => (
            <SectionRenderer
              key={contentSection.id}
              contentSection={contentSection}
            />
          ))}
        </Suspense>
      </section>
    </>
  );
};

export default PageContent;
