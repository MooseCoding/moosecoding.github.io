import { experience } from "@/content/site";

export function Experience() {
  return (
    <section id="experience" className="site-section">
      <div className="site-container site-section-pad">
        <h2 className="section-title">Experience</h2>
        <ul>
          {experience.map((item) => (
            <li
              key={item.title}
              className="border-t border-border py-5 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <h3 className="font-mono text-base font-medium text-ink">{item.title}</h3>
                {item.dates ? (
                  <p className="shrink-0 font-mono text-sm text-muted sm:text-right">
                    {item.dates}
                  </p>
                ) : null}
              </div>
              <p className="mt-1 font-mono text-sm text-muted">{item.place}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
