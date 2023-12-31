export const pagesMockedResponse = {
  data: [
    {
      id: 20,
      attributes: {
        shortName: "Quiz",
        slug: "quiz",
        heading: "Tasks",
        description: null,
        featuredInTitle: null,
        createdAt: "2023-10-31T15:36:25.866Z",
        updatedAt: "2023-10-31T15:43:27.013Z",
        publishedAt: "2023-10-31T15:38:16.494Z",
        locale: "en",
        scope: "cross-dock",
        contentSections: [
          {
            id: 17,
            __component: "sections.dynamic-list",
            title: "Tasks",
            subtitle: null,
            filterType: "default",
            enableExport: null,
            request: {
              data: {
                id: 25,
                attributes: {
                  normalization: {
                    processType: "process.name",
                  },
                  createdAt: "2023-10-31T15:31:42.422Z",
                  updatedAt: "2023-10-31T15:31:42.422Z",
                  parameters: {
                    facilityCode: "ORD",
                  },
                  name: "Temp quiz request",
                },
              },
            },
            icon: {
              data: null,
            },
            actionLinks: [],
            searchField: null,
            columns: [
              {
                id: 121,
                name: "Process",
                field: "processType",
                type: "text",
                options: null,
              },
              {
                id: 125,
                name: "Type",
                field: "target",
                type: "text",
                options: null,
              },
              {
                id: 120,
                name: "Reference",
                field: "reference",
                type: "text",
                options: null,
              },
              {
                id: 122,
                name: "Status",
                field: "status",
                type: "text",
                options: null,
              },
              {
                id: 126,
                name: "Priority",
                field: "priority",
                type: "text",
                options: null,
              },
              {
                id: 123,
                name: "Start Time",
                field: "startTime",
                type: "text",
                options: null,
              },
              {
                id: 124,
                name: "End Time",
                field: "endTime",
                type: "text",
                options: null,
              },
            ],
          },
        ],
        seo: null,
      },
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 1,
    },
  },
};

export const componentMockedResponse = {
  data: [
    {
      target: "consolidation",
      reference: "C102830858",
      status: "completed",
      priority: "medium",
      count: 3,
      progress: 100,
      process: {},
      startTime: "2023-11-03T19:10:26.943Z",
      endTime: "2023-11-03T19:11:18.652Z",
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
    {
      target: "delivery",
      reference: "E204CJ",
      status: "inProgress",
      priority: "medium",
      count: 1,
      progress: 0,
      process: {},
      startTime: "2023-11-03T18:59:18.325Z",
      startLocations: [],
      endLocations: [],
      assignees: [],
      completedBy: [],
    },
    {
      target: "consolidation",
      reference: "C102830858",
      status: "completed",
      priority: "medium",
      count: 3,
      progress: 100,
      process: {},
      startTime: "2023-11-03T19:12:01.380Z",
      endTime: "2023-11-03T19:21:18.463Z",
      startLocations: [],
      endLocations: [],
      assignees: [],
      completedBy: [],
    },
    {
      target: "delivery",
      reference: "811B8G",
      status: "completed",
      priority: "medium",
      count: 3,
      progress: 100,
      process: {},
      startTime: "2023-11-03T19:28:41.379Z",
      endTime: "2023-11-03T19:29:20.023Z",
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
