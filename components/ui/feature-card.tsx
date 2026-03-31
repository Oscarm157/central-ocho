interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  borderAccent?: boolean;
}

export function FeatureCard({ icon, title, description, borderAccent = false }: FeatureCardProps) {
  return (
    <div className={`bg-card/60 rounded-xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
      borderAccent ? "border-l-[3px] border-primary" : ""
    }`}>
      <span className="material-symbols-outlined text-primary mb-3 block" style={{ fontSize: 28 }}>
        {icon}
      </span>
      <h3 className="font-semibold text-foreground text-base sm:text-lg mb-2">{title}</h3>
      <p className="text-muted text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  );
}
