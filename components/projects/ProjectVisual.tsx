import Image from "next/image";

/**
 * Designed frame used when a project has no imageSrc.
 * A set imageSrc renders the file from /public instead.
 */
export function ProjectVisual({
  name,
  imageSrc,
  imageAlt,
  imageWidth = 2048,
  imageHeight = 1116,
  priority = false,
}: {
  name: string;
  imageSrc?: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  priority?: boolean;
}) {
  if (imageSrc) {
    return (
      <div className="w-full bg-[#1c1916]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          preload={priority}
          sizes="(min-width: 1152px) 1100px, 100vw"
          className="h-auto w-full"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1c1916] text-[#f6f1e8]">
      <div className="absolute inset-0 flex items-end gap-3 px-6 pt-8 sm:gap-4 sm:px-10" aria-hidden>
        <div className="h-[68%] w-[18%] bg-[#3c342c]" />
        <div className="h-[80%] w-[18%] bg-[#243238]" />
        <div className="h-[62%] w-[18%] bg-[#4a332c]" />
        <div className="hidden h-[74%] w-[18%] bg-[#2e2a32] sm:block" />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 border-t border-white/10 bg-[#1c1916] px-5 py-4 sm:px-6">
        <p className="font-serif text-2xl sm:text-3xl">{name}</p>
        <p className="text-[11px] uppercase tracking-[0.16em] text-white/70">
          Screenshot placeholder
        </p>
      </div>
      <span className="sr-only">{imageAlt}</span>
    </div>
  );
}
