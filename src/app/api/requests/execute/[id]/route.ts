const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.API_TOKEN}`,
};

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { parameters } = await request.json();
  if (!params.id) {
    return Response.json([]);
  }
  const url = `https://dev-fbx-api.lnc-live.com/api/requests/execute/${params.id}`;

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(parameters),
  });
  const result = await res.json();
  console.log("result", JSON.stringify(result, null, 2));

  return Response.json(result);
}
