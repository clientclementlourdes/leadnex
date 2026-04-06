import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface SubNavigationProps {
  relativePaths: string[];
}

export const SubNavBar = ({ relativePaths }: SubNavigationProps) => {
  const router = useRouter();

  return (
    <nav className="sticky top-16 md:top-20 z-60 w-full bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-900 transition-all duration-300">
      {" "}
      <div className="max-w-7xl mx-auto px-6 h-14 md:h-16 flex justify-between items-center">
        {/* Left: Action */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 group"
        >
          <div className="size-6 rounded-full bg-zinc-600 flex items-center justify-center group-hover:bg-[#ec1313] transition-colors">
            <ArrowLeft
              size={12}
              className="text-zinc-900 group-hover:text-white"
            />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors">
            Back
          </span>
        </button>

        {/* Right: Anchors */}
        <div className="flex gap-6 md:gap-10">
          {relativePaths.map((link: string) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-[#ec1313] transition-colors py-2 group"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ec1313] transition-all group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
