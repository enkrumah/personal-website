import { home } from "@/content/home";

export function CareerProof() {
  return (
    <ol className="mt-8">
      {home.experience.roles.map((role) => (
        <li
          key={role.company}
          className="grid gap-3 border-b border-line py-8 sm:grid-cols-12 sm:gap-8"
        >
          <div className="sm:col-span-4">
            <p className="font-medium">{role.company}</p>
            <p className="mt-1 text-sm text-muted">{role.role}</p>
            <p className="mt-1 text-sm text-subtle">{role.dates}</p>
          </div>
          <div className="sm:col-span-8">
            <p className="max-w-2xl text-sm leading-6 text-pretty text-muted">
              {role.body}
            </p>
            {"metrics" in role && role.metrics ? (
              <ul className="mt-5 grid gap-5 sm:grid-cols-2">
                {role.metrics.map((metric) => (
                  <li key={metric.value}>
                    <p className="font-medium text-foreground">{metric.value}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{metric.label}</p>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
