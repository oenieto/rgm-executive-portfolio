import React from "react";

export const Hero: React.FC = () => {
  return (
    <section
      className="relative px-6 py-12 lg:px-40 lg:py-20 bg-background-light overflow-hidden"
      id="profile"
    >
      {/* Abstract Background Motif */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>

      <div className="relative z-10 layout-content-container flex flex-col max-w-[960px] mx-auto gap-12">
        <div className="@container">
          <div className="flex flex-col-reverse gap-8 lg:flex-row lg:items-center">
            <div className="flex flex-col gap-6 lg:w-3/5">
              <div className="flex flex-col gap-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-primary text-xs font-bold uppercase tracking-wide">
                    Available for Leadership Roles
                  </span>
                </div>
                <h1 className="text-text-main text-4xl font-black leading-tight tracking-[-0.033em] lg:text-5xl xl:text-6xl">
                  Regional Sales Director |{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                    Telecom & Digital
                  </span>{" "}
                  Infrastructure LATAM
                </h1>
                <h2 className="text-text-muted text-lg font-normal leading-relaxed max-w-2xl">
                  Driving digital transformation and revenue growth across
                  global markets. 20+ years of high-impact leadership in 5G,
                  Cloud, and Enterprise Solutions.
                </h2>
              </div>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="/rafael-guerram-cv.pdf"
                  download="Rafael_Guerra_Magana_CV.pdf"
                  className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-all shadow-lg shadow-primary/25"
                >
                  Download Full CV
                </a>
                <a
                  href="mailto:rafael.guerram@outlook.com"
                  className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white border border-[#e7ebf3] text-text-main text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 transition-all"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="lg:w-2/5 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-2xl"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl transition-transform duration-500">
                  <img
                    alt="Professional executive portrait of Rafael Guerra Magaña"
                    className="w-full h-full object-cover"
                    src="/rafa-profile.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
