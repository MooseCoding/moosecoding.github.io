import { skills } from "@/content/site";

export function SkillsTable() {
  return (
    <section id="skills" className="site-section">
      <div className="site-container site-section-pad">
        <h2 className="section-title">Skills</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <tbody>
              {skills.map((row) => (
                <tr key={row.category} className="border-t border-border">
                  <th
                    scope="row"
                    className="w-36 py-3 pr-6 text-left align-top font-mono font-medium text-ink"
                  >
                    {row.category}
                  </th>
                  <td className="py-3 text-muted">{row.items.join(" · ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
