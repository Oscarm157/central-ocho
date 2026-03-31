interface QuoteBlockProps {
  text: string;
}

export function QuoteBlock({ text }: QuoteBlockProps) {
  return (
    <blockquote className="border-l-[3px] border-primary bg-card/60 px-6 py-4 rounded-r-lg">
      <p className="font-display text-base sm:text-lg text-foreground/80 italic">&ldquo;{text}&rdquo;</p>
    </blockquote>
  );
}
