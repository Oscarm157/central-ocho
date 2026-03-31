interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8 sm:mb-10">
      <span className="font-mono text-sm text-foreground/20 block mb-3">{number}</span>
      <div className="w-[60px] h-[2px] bg-primary mb-4" />
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-lg sm:text-xl text-muted font-medium">{subtitle}</p>
      )}
    </div>
  );
}
