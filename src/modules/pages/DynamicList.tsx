import React, { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { getComponent } from "@/server/requests";
import { ContentSection } from "@/types";
import Table from "../shared/Table";

interface DynamicListProps
  extends Pick<ContentSection, "title" | "request" | "columns"> {}

const DynamicList = ({ title, request, columns }: DynamicListProps) => {
  const { data } = useQuery({
    queryKey: ["dynamic-list", request.data.id],
    queryFn: () =>
      getComponent({
        id: request.data.id,
        parameters: request.data.attributes.parameters,
      }),
    enabled: Boolean(request.data.id),
  });

  return (
    <Suspense fallback="Loading table data...">
      <div>
        <h3>{title}</h3>
        <p>{JSON.stringify(columns)}</p>
        data
        <p className="bg-[red] mb-6">{JSON.stringify(data?.data)}</p>
        {data?.data && <Table columns={columns} data={data.data} />}
      </div>
    </Suspense>
  );
};

export default DynamicList;