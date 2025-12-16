import React from 'react';

// Brand Logos Data
const stackItems = [
  {
    name: 'React',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#61DAFB]" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.6562C17.3338 21.6562 21.6562 17.3338 21.6562 12C21.6562 6.66616 17.3338 2.34375 12 2.34375C6.66616 2.34375 2.34375 6.66616 2.34375 12C2.34375 17.3338 6.66616 21.6562 12 21.6562Z" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="3.5" ry="8.5" className="animate-[spin_4s_linear_infinite]" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="3.5" ry="8.5" transform="rotate(60 12 12)" className="animate-[spin_4s_linear_infinite]" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="3.5" ry="8.5" transform="rotate(120 12 12)" className="animate-[spin_4s_linear_infinite]" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: 'Next.js',
    logo: (
      <svg viewBox="0 0 180 180" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <mask height="180" id="mask0_408_134" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
          <circle cx="90" cy="90" fill="black" r="90" />
        </mask>
        <g mask="url(#mask0_408_134)">
          <circle cx="90" cy="90" data-circle="true" fill="black" r="90" stroke="white" strokeWidth="6" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_134)" />
          <rect fill="url(#paint1_linear_408_134)" height="72" width="12" x="115" y="54" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_408_134" x1="109" x2="144.5" y1="116.5" y2="160.5">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_408_134" x1="121" x2="120.799" y1="54" y2="106.875">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: 'Tailwind',
    logo: (
      <svg viewBox="0 0 54 33" className="w-8 h-8 text-[#38BDF8]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M27 0C22.2 0 18.3 3.9 15.9 8.1C13.5 12.3 12 17.7 9 17.7C6.6 17.7 5.1 15.6 5.1 13.2C5.1 10.8 7.2 9 8.7 9H4.2C1.8 9 0 11.25 0 14.1C0 23.1 7.2 32.1 13.8 32.1C18.6 32.1 22.5 28.2 24.9 24C27.3 19.8 28.8 14.4 31.8 14.4C34.2 14.4 35.7 16.5 35.7 18.9C35.7 21.3 33.6 23.1 32.1 23.1H36.6C39 23.1 40.8 20.85 40.8 18C40.8 9 33.6 0 27 0Z" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'n8n',
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#FF6D5A]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.3 0C1.9 0 0 1.9 0 4.3V19.7C0 22.1 1.9 24 4.3 24H19.7C22.1 24 24 22.1 24 19.7V4.3C24 1.9 22.1 0 19.7 0H4.3ZM18.9 13.9C18.9 17.3 15.9 19.2 12 19.2C7.9 19.2 5.1 16.9 5.1 13.3H8.3C8.4 15.2 9.8 16.5 12 16.5C13.8 16.5 15.3 15.7 15.3 14C15.3 12.5 14.2 11.7 11.3 11.1C6.9 10.1 5.3 8.5 5.3 5.9C5.3 3.1 7.9 1 11.9 1C15.3 1 18.5 2.6 18.6 6.3H15.4C15.2 4.4 13.9 3.6 12 3.6C10.1 3.6 8.7 4.5 8.7 5.8C8.7 7.2 10.1 7.9 12.7 8.5C17.3 9.6 18.9 11.2 18.9 13.9Z" />
      </svg>
    )
  },
  {
    name: 'Supabase',
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#3ECF8E]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.3622 9.3541C21.3622 9.3541 12.0002 0.447021 12.0002 0.447021C11.3323 -0.160105 10.4284 -0.147233 9.77353 0.479532L2.74838 8.12574C1.63756 9.33649 2.4497 11.2483 4.0886 11.3346L11.3533 11.7225L10.3396 16.3531C10.3396 16.3531 16.5915 10.0305 16.5915 10.0305C17.1528 9.47525 18.068 9.53935 18.5582 10.0461L20.1554 11.7925C21.2662 13.0033 22.8489 10.7497 21.3622 9.3541Z" fillOpacity="0.5" />
        <path d="M12.0003 23.553C12.6681 24.1601 13.5721 24.1472 14.2269 23.5205L21.2521 15.8743C22.3629 14.6635 21.5507 12.7517 19.9118 12.6654L12.6472 12.2775L13.6609 7.6469C13.6609 7.6469 7.40892 13.9695 7.40892 13.9695C6.84766 14.5248 5.93246 14.4607 5.44226 13.9539L3.84501 12.2075C2.73418 10.9967 1.15152 13.2503 2.63821 14.6459L12.0003 23.553Z" />
      </svg>
    )
  },
  {
    name: 'OpenAI',
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9723l.142.082 4.7783 2.7582a.7759.7759 0 0 0 .7072.0284l5.8948-3.3496V2.9377a.0664.0664 0 0 1 .038-.052L6.1625 3.987a3.8631 3.8631 0 0 1-2.0911 2.3655 4.4175 4.4175 0 0 1-1.7306.9085zm16.0131-3.8563a4.4802 4.4802 0 0 1 2.8716 1.0408l-.1419.0804-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369l-2.02-1.1686a.071.071 0 0 1-.038-.052V8.5337a4.4802 4.4802 0 0 1 4.4993-4.4943zm2.149 14.1621a4.4708 4.4708 0 0 1 .5393-3.0137l-.142-.0852-4.783-2.7582a.757.757 0 0 0-.7806 0l-5.8428 3.3685v-2.3324a.0804.0804 0 0 1 .0332-.0615l4.9739-2.8716a4.4992 4.4992 0 0 1 6.1356 1.6464 3.8773 3.8773 0 0 1 .918 1.7306l-.1137-.0237zm-9.5991 3.9037a4.4755 4.4755 0 0 1-2.3607-1.9297l-.1419-.0851-4.7783-2.7582a.7759.7759 0 0 0-.7072-.0284l-5.8948 3.3496v2.5046a.0664.0664 0 0 1-.038.052l10.1042-1.107a3.8631 3.8631 0 0 1 2.1385-2.0007zM12.0143 8.3252L7.3306 11.037l4.7783 2.7534 4.6835-2.706-4.7783-2.7581z" />
      </svg>
    )
  },
  {
    name: 'Stripe',
    logo: (
      <svg viewBox="0 0 32 32" className="w-8 h-8 text-[#635BFF]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6001 27.6C9.10015 27.6 6.30015 26.6 3.60015 24.8V17.9C6.40015 19.3 9.40015 20.2 12.3002 20.2C14.7002 20.2 16.0002 19.4 16.0002 18.2C16.0002 17.5 15.6002 16.6 13.0002 15.6C8.80015 14.1 6.50015 11.8 6.50015 8.7C6.50015 4.3 10.3002 2.2 15.0002 2.2C18.1002 2.2 21.0002 2.9 23.3002 4.4V11.1C20.6002 9.8 17.7002 9.1 15.4002 9.1C13.2002 9.1 12.4002 9.9 12.4002 10.9C12.4002 11.7 13.0002 12.2 16.1002 13.3C20.0002 14.6 22.1002 17.3 22.1002 20.1C22.1002 24.4 18.5002 27.6 12.6002 27.6L12.6001 27.6Z" />
      </svg>
    )
  },
];

const TechStack: React.FC = () => {
  return (
    <section id="tecnologia" className="py-10 bg-background border-y border-white/5 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex w-full">
        {/* First Loop */}
        <div className="flex animate-scroll whitespace-nowrap">
          {stackItems.map((item, idx) => (
            <div
              key={`stack-1-${idx}`}
              className="mx-12 group flex items-center gap-4 cursor-default grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
            >
              <div className="transition-transform duration-500 group-hover:scale-110">
                {item.logo}
              </div>
              <span className="text-xl font-bold text-zinc-600 group-hover:text-zinc-200 transition-colors duration-500 tracking-wide">
                {item.name}
              </span>
            </div>
          ))}
        </div>
        {/* Second Loop (Duplicate for seamless infinite scroll) */}
        <div className="flex animate-scroll whitespace-nowrap" aria-hidden="true">
          {stackItems.map((item, idx) => (
            <div
              key={`stack-2-${idx}`}
              className="mx-12 group flex items-center gap-4 cursor-default grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
            >
              <div className="transition-transform duration-500 group-hover:scale-110">
                {item.logo}
              </div>
              <span className="text-xl font-bold text-zinc-600 group-hover:text-zinc-200 transition-colors duration-500 tracking-wide">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;