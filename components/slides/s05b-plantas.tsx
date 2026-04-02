import Image from "next/image";
import { Slide } from "@/components/slide";

export function S05bPlantas() {
  return (
    <Slide>
      <div className="stagger-in flex flex-col items-center justify-center text-center gap-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground">
          Plantas Arquitectónicas
        </h2>
        <div className="w-full max-w-4xl rounded-xl overflow-hidden">
          <Image
            src="/images/PLANTAS ARQUITECTONICAS TOWNHOUSES__.png"
            alt="Plantas Arquitectónicas Townhouses"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </Slide>
  );
}
