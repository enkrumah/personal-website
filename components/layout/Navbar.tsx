"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { getNavItems, site, type NavItem } from "@/content/site";
import { cn } from "@/lib/cn";

const navItems = getNavItems();

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function itemClass(item: NavItem, active: boolean, mobile = false) {
  if (item.variant === "contact") {
    return cn(
      "inline-flex items-center justify-center bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground",
      mobile && "w-full py-3",
    );
  }

  if (item.variant === "resume") {
    return cn(
      "inline-flex items-center justify-center border border-line px-4 py-2 text-sm font-medium transition-colors hover:bg-highlight",
      active && "bg-highlight",
      mobile && "w-full py-3",
    );
  }

  return cn(
    "transition-colors",
    mobile ? "font-serif text-3xl" : "text-sm",
    active ? "text-foreground" : "text-muted hover:text-foreground",
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const textItems = navItems.filter((item) => !item.variant);
  const specialItems = navItems.filter((item) => item.variant);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
        menuButtonRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    firstLinkRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="text-sm font-medium tracking-tight sm:text-base">
          {site.name}
        </Link>

        <div className="flex items-center gap-1 lg:gap-6">
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {textItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={itemClass(item, active)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="flex items-center gap-2">
              {specialItems.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={itemClass(item, active)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open ? (
        <>
          <div
            className="fixed inset-0 top-16 z-40 bg-foreground/25 lg:hidden"
            aria-hidden
            onClick={() => setOpenPath(null)}
          />
          <div
            id="mobile-navigation"
            className="absolute inset-x-0 top-full z-50 h-[calc(100dvh-4rem)] overflow-y-auto bg-background lg:hidden"
          >
            <nav className="flex flex-col px-6 py-8" aria-label="Mobile">
              {textItems.map((item, index) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    ref={index === 0 ? firstLinkRef : undefined}
                    aria-current={active ? "page" : undefined}
                    className={cn(itemClass(item, active, true), "py-3")}
                    onClick={() => setOpenPath(null)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-6 flex flex-col gap-3">
                {specialItems.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={itemClass(item, active, true)}
                      onClick={() => setOpenPath(null)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
