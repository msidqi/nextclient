import {
  GetComponentResponseData,
  PagesResponseData,
  RequestParameters,
} from "@/types";

export const getPages = async ({
  slug,
}: {
  slug?: string;
}): Promise<PagesResponseData> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_BASE}/api/pages/${slug}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  return response.json();
};

export const getComponent = async ({
  id,
  parameters,
}: {
  id?: number;
  parameters: RequestParameters;
}): Promise<GetComponentResponseData> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_BASE}/api/requests/execute/${id}`,
    {
      method: "POST",
      body: JSON.stringify(parameters),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  return response.json();
};
