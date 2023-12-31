import axios from "axios";
import { PagesResponseData } from "@/types";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.API_TOKEN}`,
};

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const url = `https://dev-fbx-api.lnc-live.com/api/pages?filters[slug]=${params.slug}`;
  try {
    const response = await axios.get<PagesResponseData>(url, { headers });

    return Response.json(response.data);
  } catch (error) {
    return new Response(JSON.stringify({ error: "Something went wrong!" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
