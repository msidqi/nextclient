import { PagesResponseData } from "@/types";

export const getPages = async ({ slug }: { slug?: string }) => {
  try {
    if (!slug) return [];
    const response = await fetch(`/api/pages/${slug}`);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const { data }: PagesResponseData = await response.json();
    return data;
  } catch (e) {
    throw new Error("Invalid response");
  }
};
