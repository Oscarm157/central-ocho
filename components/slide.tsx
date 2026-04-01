interface SlideProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function Slide({ children, className = "", centered = true }: SlideProps) {
  return (
    <div className={`w-full h-full overflow-y-auto scrollbar-hide ${className}`}>
      <div className={`w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12 pt-16 sm:pt-14 pb-8 sm:pb-10 ${
        centered ? "min-h-full flex flex-col justify-center" : ""
      }`}>
        {children}
      </div>
    </div>
  );
}
