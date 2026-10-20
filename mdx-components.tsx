import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { SystemFlow } from "@/components/ui/SystemFlow";
import { DetailList } from "@/components/ui/DetailList";
import { PullQuote } from "@/components/ui/PullQuote";
import { SearchModes } from "@/components/ui/SearchModes";
import { CaseStudyFigure } from "@/components/projects/CaseStudyFigure";
import { SectionHeader } from "@/components/ui/SectionHeader";

function Paragraph(props: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className="mt-5 max-w-2xl text-[1.0625rem] leading-7 text-pretty text-muted"
      {...props}
    />
  );
}

function Anchor(props: ComponentPropsWithoutRef<"a">) {
  const external = props.href?.startsWith("http");

  return (
    <a
      className="underline decoration-line underline-offset-4 hover:decoration-foreground"
      {...props}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    />
  );
}

function Strong(props: ComponentPropsWithoutRef<"strong">) {
  return <strong className="font-medium text-foreground" {...props} />;
}

const components = {
  p: Paragraph,
  a: Anchor,
  strong: Strong,
  SectionHeader,
  CaseStudyFigure,
  DetailList,
  SearchModes,
  ArchitectureDiagram,
  SystemFlow,
  PullQuote,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
