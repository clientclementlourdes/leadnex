export default function ComingSoon() {
  return (
    <section className="w-full min-h-screen bg-zinc-50 text-zinc-900 flex items-center justify-center p-6 selection:bg-[#ec1313] selection:text-white">
      <div className="w-full max-w-sm border border-zinc-200/60 bg-white p-8 md:p-12 shadow-sm rounded-sm relative overflow-hidden">
        
        {/* Accent Top Lip Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#ec1313]" />

        <div className="space-y-6">
          {/* Status Indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ec1313] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ec1313]" />
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-zinc-400">
              Arriving Soon
            </span>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-zinc-100" />

          {/* Brand Core */}
          <div className="space-y-2">
            <h1 className="text-2xl font-medium tracking-tight text-zinc-900 sm:text-3xl font-serif">
              The Reserve Pantry
            </h1>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              Curating an exclusive allocation of single-origin spices, artisanal preserves, and heritage provisions. 
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}