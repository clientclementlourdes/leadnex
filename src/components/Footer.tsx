import { Globe, Mail, Linkedin, Instagram, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const practiceAreas = [
  { title: "Political Mentorship", ref: "/political-leadership" },
  { title: "Personal Branding", ref: "/personal-branding" },
  { title: "Guidance & Motivation", ref: "/guidance-motivation" },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-16 md:pt-24 pb-8 md:pb-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: Branding & Connections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-20">
          {/* Brand Column - Centered on mobile, Left on Desktop */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6 md:space-y-2.5 text-center lg:text-left">
            <div className="relative w-35 md:w-42.5">
              <Link href="/" className="cursor-pointer">
                <Image
                  src="/images/logo_white.webp"
                  width={170}
                  height={50} // Adjust based on your logo aspect ratio
                  alt="Lead Nex"
                  className="h-auto w-full"
                />
              </Link>
            </div>

            <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-sm">
              The vanguard of Indian leadership consultancy. We define the
              narratives that move the nation&apos;s most influential figures.
            </p>

            <div className="flex gap-4 mt-4">
              {[
                { icon: <Linkedin size={18} />, label: "LinkedIn", href: "#" },
                { icon: <Instagram size={18} />, label: "Instagram", href: "https://www.instagram.com/leadnex_?igsh=MW9lcjMwOWhob3g0dA==" },
                // { icon: <Mail size={18} />, label: "Email", href: "#" },
              ].map(({ icon, label, href }, idx) => (
                <a
                  key={idx}
                  className="size-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#ec1313] hover:border-[#ec1313] transition-all duration-300"
                  href={href}
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns - 2 columns on tablet/desktop, 1 on small mobile */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:pl-12">
            {/* Practice Areas */}
            <div className="space-y-6 text-center sm:text-left">
              <h5 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-200">
                Practice Areas
              </h5>
              <ul className="space-y-3">
                {practiceAreas.map(({title, ref}) => (
                  <li key={ref}>
                    <a
                      className="text-sm font-light text-zinc-500 hover:text-[#ec1313] transition-colors duration-300"
                      href={ref}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Advisory Contact */}
            <div className="space-y-6 text-center sm:text-left">
              <h5 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-200">
                Executive Contact
              </h5>
              <ul className="space-y-4 flex flex-col items-center sm:items-start">
                <ContactItem
                  icon={<Phone size={16} />}
                  label="+91 96557 84312"
                  href="tel:+919655784312"
                />
                <ContactItem
                  icon={<Mail size={16} />}
                  label="johnmajel@gmail.com"
                  href="mailto:johnmajel@gmail.com"
                />
                <ContactItem
                  icon={<Globe size={16} />}
                  label="www.leadnex.in"
                  href="https://www.leadnex.in"
                />
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Regulatory & Legal */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex items-center flex-col md:flex-row gap-2 md:gap-4">
            <span className="hidden md:block size-1.5 rounded-full bg-[#ec1313]" />
            <p className="text-[9px] md:text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
              © 2026 LedNex. <br className="md:hidden" /> Strictly Confidential.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-8">
            {["Privacy", "Regulatory", "Ethics"].map((item) => (
              <a
                key={item}
                className="text-[9px] md:text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const ContactItem = ({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) => {
  const content = (
    <div className="flex items-center gap-3 group">
      <span className="text-zinc-600 group-hover:text-[#ec1313] transition-colors">
        {icon}
      </span>
      <span className="text-sm font-light text-zinc-400 group-hover:text-zinc-200 transition-colors">
        {label}
      </span>
    </div>
  );

  return <li>{href ? <a href={href}>{content}</a> : content}</li>;
};

export default Footer;
