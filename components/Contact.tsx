
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section className="px-6 py-12 lg:px-40 lg:py-20 bg-background-light min-h-[60vh] flex flex-col items-center justify-center">
      <div className="layout-content-container flex flex-col max-w-[800px] w-full gap-12 text-center">
        
        <div className="flex flex-col gap-4">
          <h1 className="text-text-main text-4xl font-black leading-tight tracking-[-0.033em] lg:text-5xl">
            Let's <span className="text-primary">Connect</span>
          </h1>
          <p className="text-text-muted text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            I am available for leadership roles in Telecom & Digital Infrastructure. 
            Reach out to discuss how I can drive growth and transformation for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Contact Methods */}
          <div className="flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-sm border border-[#e7ebf3] hover:shadow-md transition-shadow">
             <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
                <span className="material-symbols-outlined text-3xl">mail</span>
             </div>
             <div className="flex flex-col gap-1">
                <h3 className="text-text-main text-lg font-bold">Email</h3>
                <a href="mailto:rafael.guerram@outlook.com" className="text-primary hover:underline text-base break-words">
                  rafael.guerram@outlook.com
                </a>
             </div>
          </div>

          <div className="flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-sm border border-[#e7ebf3] hover:shadow-md transition-shadow">
             <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
                <span className="material-symbols-outlined text-3xl">call</span>
             </div>
             <div className="flex flex-col gap-1">
                <h3 className="text-text-main text-lg font-bold">Phone</h3>
                <a href="tel:+525529550896" className="text-primary hover:underline text-base">
                  +52 55 2955 0896
                </a>
             </div>
          </div>
          
           <div className="flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-sm border border-[#e7ebf3] hover:shadow-md transition-shadow">
             <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-[#25D366]">
                 {/* WhatsApp Icon SVG directly here or import */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
             </div>
             <div className="flex flex-col gap-1">
                <h3 className="text-text-main text-lg font-bold">WhatsApp</h3>
                <a 
                  href="https://wa.me/525529550896?text=Hola%20Rafael,%20vi%20tu%20portafolio%20y%20me%20interes%C3%B3%20tu%20perfil.%20%C2%BFPodemos%20hablar?" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-base"
                >
                  Send Message
                </a>
             </div>
          </div>

          <div className="flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-sm border border-[#e7ebf3] hover:shadow-md transition-shadow">
             <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
                 <span className="material-symbols-outlined text-3xl">download</span>
             </div>
             <div className="flex flex-col gap-1">
                <h3 className="text-text-main text-lg font-bold">Resume</h3>
                 <a 
                  href="/rafael-guerram-cv.pdf"
                  download="Rafael_Guerra_Magana_CV.pdf"
                  className="text-primary hover:underline text-base"
                >
                  Download PDF
                </a>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
