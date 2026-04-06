import React from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps extends LinkProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'nav';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  label: string;
  Icon?: LucideIcon;
  className?: string;
  showActive?: boolean; // Highlight if current route
  isExternal?: boolean;
}

const NavLink = ({
  href,
  variant = 'ghost',
  size = 'md',
  label,
  Icon,
  className = '',
  showActive = false,
  isExternal = false,
  ...props
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = showActive && pathname === href;

  // Mirroring your Button styles for perfect consistency
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase transition-all duration-300 active:scale-[0.95] group border cursor-pointer";

  const sizes = {
    xs: "h-8 px-4 text-[9px] tracking-[0.15em] gap-1.5 rounded-sm",
    sm: "h-10 px-6 text-[10px] tracking-[0.2em] gap-2 rounded-sm",
    md: "h-12 px-8 text-[11px] tracking-[0.2em] gap-2.5 rounded-md",
    lg: "h-14 px-10 text-[12px] tracking-[0.25em] gap-3 rounded-md",
  };

  const variants = {
    primary: "bg-[#ec1313] border-[#ec1313] text-white hover:bg-black hover:border-black shadow-sm",
    secondary: "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600",
    ghost: "bg-transparent border-transparent text-zinc-500 hover:text-[#ec1313]",
    // Specific navigation variant that uses the active state
    nav: `bg-transparent border-transparent ${
      isActive ? "text-[#ec1313]" : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
    }`
  };

  const iconSizes = { xs: 12, sm: 14, md: 16, lg: 18 };

  // Determine if link is external to apply security attributes
  const externalProps = isExternal || href.toString().startsWith('http') 
    ? { target: "_blank", rel: "noopener noreferrer" } 
    : {};

  return (
    <Link
      href={href}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...externalProps}
      {...props}
    >
      <span className="relative z-10">{label}</span>
      
      {Icon && (
        <Icon
          size={iconSizes[size]}
          strokeWidth={2}
          className={`transition-transform duration-300 ease-out 
            group-hover:translate-x-0.5 opacity-80 group-hover:opacity-100
            ${isActive ? 'translate-x-0.5 opacity-100' : ''}
          `}
        />
      )}
      
      {/* Optional: Animated underline for 'nav' variant active state */}
      {variant === 'nav' && isActive && (
        <span className="absolute bottom-2 w-4 h-[2px] bg-[#ec1313] rounded-full" />
      )}
    </Link>
  );
};

export default NavLink;