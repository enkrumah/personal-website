import { Fragment } from "react";
import { Container } from "@/components/layout/Container";
import { home } from "@/content/home";

export function Hero() {
  return (
    <section>
      <Container className="pt-16 sm:pt-24">
        <h1 className="max-w-xl font-serif text-[2.35rem] leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {home.hero.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
          {home.hero.lede}
        </p>
        <dl className="mt-12 grid gap-x-8 gap-y-8 border-t border-line py-8 sm:grid-cols-2 lg:grid-cols-4">
          {home.proof.map((item) => {
            const credentials = "credentials" in item ? item.credentials : [item];

            return (
              <div key={item.label}>
                <dt className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
                  {item.label}
                </dt>
                {credentials.map((credential, index) => (
                  <Fragment key={credential.title}>
                    <dd
                      className={
                        index === 0
                          ? "mt-3 font-medium text-foreground"
                          : "mt-4 font-medium text-foreground"
                      }
                    >
                      {credential.title}
                    </dd>
                    {"field" in credential ? (
                      <dd className="mt-1 text-sm leading-6 text-muted">
                        {credential.field}
                      </dd>
                    ) : null}
                    <dd className="mt-1 text-sm leading-6 text-muted">
                      {credential.detail}
                    </dd>
                  </Fragment>
                ))}
              </div>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}
