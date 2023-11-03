"use client";
import { getPages } from "@/server/requests";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const PageContent = ({ slug }: { slug?: string }) => {
  const { data } = useQuery({
    queryKey: ["pages", slug],
    queryFn: () => getPages({ slug }),
    enabled: Boolean(slug),
  });
  return <div>data: {JSON.stringify(data, null, 2)}</div>;
};

export default PageContent;
