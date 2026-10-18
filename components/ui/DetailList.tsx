import type { DetailItem } from "@/content/types";

export function DetailList({ items }: { items: DetailItem[] }) {
  return (
    <div className="mt-8 border-y border-line">
      {items.map((item) => (
        <section
          key={item.title}
          className="grid gap-2 border-b border-line py-5 last:border-b-0 sm:grid-cols-12 sm:gap-6"
        >
          <h3 className="text-base font-medium text-foreground sm:col-span-4">
            {item.title}
          </h3>
          <p className="text-[1.0625rem] leading-7 text-muted sm:col-span-8">
            {item.body}
          </p>
        </section>
      ))}
    </div>
  );
}
