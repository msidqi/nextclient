import React from "react";
import { ContentSection } from "@/types";
import DynamicList from "@/modules/pages/DynamicList";

interface SectionRendererProps {
  contentSection: ContentSection;
}

const dynamicComponents = {
  "sections.dynamic-list": DynamicList,
} as const;

const SectionRenderer = ({ contentSection }: SectionRendererProps) => {
  const SectionComponent = dynamicComponents[contentSection.__component];

  return (
    <section className="mb-4">
      <SectionComponent {...contentSection} />
    </section>
  );
};

export default SectionRenderer;
