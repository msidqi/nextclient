import {
  GetComponentResponseData,
  PagesResponseData,
  RequestParameters,
} from "@/types";
import { API } from "./api";

export const getPages = async ({
  slug,
}: {
  slug?: string;
}): Promise<PagesResponseData> => {
  const response = await API.get<PagesResponseData>(`/pages/${slug}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const getComponent = async ({
  id,
  parameters,
}: {
  id?: number;
  parameters: RequestParameters;
}): Promise<GetComponentResponseData> => {
  const response = await API.post<GetComponentResponseData>(
    `/requests/execute/${id}`,
    parameters,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
