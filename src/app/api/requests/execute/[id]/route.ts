import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.API_TOKEN}`,
};

export async function POST(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const url = `https://dev-fbx-api.lnc-live.com/api/requests/execute/${params.id}`;

    const parameters = await request.json();
    const response = await axios.post(url, parameters, {
      headers,
    });

    return Response.json(response.data);
  } catch (error) {
    return new Response(JSON.stringify({ error: "Something went wrong!" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
