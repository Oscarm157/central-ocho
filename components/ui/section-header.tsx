interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-6 sm:mb-8">
      <span className="font-mono text-sm text-foreground/20 block mb-2">{number}</span>
      <div className="w-[60px] h-[2px] bg-primary mb-3" />
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-lg sm:text-xl text-muted font-medium">{subtitle}</p>
      )}
    </div>
  );
}
