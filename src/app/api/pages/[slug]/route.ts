import { PagesResponseData } from "@/types";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.API_TOKEN}`,
};

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  if (!params.slug) {
    return Response.json([]);
  }
  const url = `https://dev-fbx-api.lnc-live.com/api/pages?filters[slug]=${params.slug}`;

  const res = await fetch(url, { headers });
  const pages: PagesResponseData = await res.json();
  console.log("pages", pages);

  return Response.json(pages);
}
