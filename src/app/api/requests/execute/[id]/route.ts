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

    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(parameters),
    });
    const result = await res.json();

    return Response.json(result);
  } catch (error) {
    return new Response(JSON.stringify({ error: "Something went wrong!" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

const response = {
  data: [
    {
      target: "consolidation",
      reference: "C102830858",
      status: "pending",
      priority: "medium",
      count: 3,
      progress: 0,
      process: {},
      startLocations: [],
      endLocations: [],
      assignees: [],
      completedBy: [],
    },
    {
      target: "delivery",
      reference: "AAIBD7",
      status: "completed",
      priority: "medium",
      count: 3,
      progress: 100,
      process: {},
      startTime: "2023-11-02T20:02:42.493Z",
      endTime: "2023-11-02T20:04:59.323Z",
      startLocations: [],
      endLocations: [],
      assignees: [],
      completedBy: [],
    },
    {
      target: "shipment",
      reference: "S104838200",
      status: "completed",
      priority: "medium",
      count: 3,
      progress: 100,
      process: {},
      startTime: "2023-11-02T20:06:06.311Z",
      endTime: "2023-11-02T20:12:52.279Z",
      startLocations: [],
      endLocations: [],
      assignees: [],
      completedBy: [],
    },
    {
      target: "shipment",
      reference: "S104838200",
      status: "completed",
      priority: "medium",
      count: 3,
      progress: 100,
      process: {},
      startTime: "2023-11-02T20:15:40.456Z",
      endTime: "2023-11-02T20:16:44.455Z",
      startLocations: [],
      endLocations: [],
      assignees: [],
      completedBy: [],
    },
    {
      target: "shipment",
      reference: "S104838200",
      status: "completed",
      priority: "medium",
      count: 3,
      progress: 100,
      process: {},
      endTime: "2023-11-02T20:15:15.729Z",
      startLocations: [],
      endLocations: [],
      assignees: [],
      completedBy: [],
    },
  ],
  filters: [
    {
      name: "reference",
      displayName: "Reference",
      type: "string",
    },
    {
      name: "facilityCode",
      displayName: "Facility Code",
      type: "string",
    },
    {
      name: "processTypes",
      displayName: "Process Type",
      type: "multiselect",
      options: [
        "unload",
        "receive",
        "screen",
        "putaway",
        "pick",
        "overpack",
        "build",
        "load",
      ],
    },
    {
      name: "statuses",
      displayName: "Status",
      type: "multiselect",
      options: ["pending", "inProgress", "completed", "exception", "canceled"],
    },
    {
      name: "dateRange",
      displayName: "Date Range",
      type: "daterange",
    },
  ],
};
