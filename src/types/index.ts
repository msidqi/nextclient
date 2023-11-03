export interface RequestParameters {
  facilityCode: string;
}

interface SectionRequestData {
  id: number;
  attributes: {
    parameters: RequestParameters;
  };
}

export interface ContentSection {
  id: number;
  __component: "sections.dynamic-list"; // add other types ;
  title: string;
  request: {
    data: SectionRequestData;
  };
  columns: {
    id: number;
    name: string;
    field: string;
  }[];
}

interface Attribute {
  heading: string;
  contentSections: ContentSection[];
}

interface Data {
  id: number;
  attributes: Attribute;
}

export interface PagesResponseData {
  data: Data[];
}

// dynamic list request types

interface FilterOption {
  name: string;
  displayName: string;
  interface: "string" | "multiselect" | "daterange";
  options?: string[];
}

export interface ComponentDataItem {
  target: string;
  reference: string;
  status: string;
  priority: string;
  count: number;
  progress: number;
  process: Record<string, unknown>;
  startTime?: string;
  endTime?: string;
  startLocations: string[];
  endLocations: string[];
  assignees: string[];
  completedBy: string[];
}

export interface GetComponentResponseData {
  data: ComponentDataItem[];
  filters: FilterOption[];
}
