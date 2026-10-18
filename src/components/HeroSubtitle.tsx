import { site } from "@/content/site";

export function HeroSubtitle() {
  const [aerospace, physics] = site.hero.degrees;

  return (
    <p className="hero-subtitle mt-5 font-mono text-sm">
      <span className="hero-degree hero-degree-aerospace">{aerospace}</span>
      <span className="hero-subtitle-sep"> and </span>
      <span className="hero-degree hero-degree-physics">{physics}</span>
      <span className="hero-subtitle-sep">, </span>
      <span className="hero-degree-school">{site.hero.school}</span>
    </p>
  );
}
