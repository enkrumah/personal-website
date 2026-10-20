import Image from "next/image";
import { cn } from "@/lib/cn";

export function CaseStudyFigure({
  src,
  alt,
  width,
  height,
  caption,
  wide = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  wide?: boolean;
}) {
  return (
    <figure className={cn("mt-10", wide ? "max-w-4xl" : "max-w-md")}>
      <div className="border border-line bg-[#1c1916]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full"
          sizes={wide ? "(min-width: 896px) 896px, 100vw" : "(min-width: 448px) 448px, 100vw"}
        />
      </div>
      <figcaption className="mt-3 max-w-2xl text-sm leading-6 text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
