interface SectionRequestData {
  id: number;
  attributes: {
    parameters: {
      facilityCode: string;
    };
  };
}

interface ContentSection {
  id: number;
  __component: string;
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
