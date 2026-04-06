// components/ui/Button.tsx
import React from 'react';
import { LucideIcon, Loader2 } from 'lucide-react'; // Added Loader2

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  label: string;
  Icon?: LucideIcon;
  isLoading?: boolean; // New prop for payment/processing states
}

const Button = ({ 
  variant = 'primary', 
  size = 'md',
  label, 
  Icon,
  className = '', 
  isLoading = false,
  disabled,
  ...props 
}: ButtonProps) => {
  
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase transition-all duration-300 active:scale-[0.97] group border cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const sizes = {
    xs: "h-8 px-4 text-[9px] tracking-[0.15em] gap-1.5 rounded-sm",
    sm: "h-10 px-6 text-[10px] tracking-[0.2em] gap-2 rounded-sm",
    md: "h-12 px-8 text-[11px] tracking-[0.2em] gap-2.5 rounded-md",
    lg: "h-14 px-10 text-[12px] tracking-[0.25em] gap-3 rounded-md",
  };
  
  const variants = {
    primary: "bg-[#ec1313] border-[#ec1313] text-white hover:bg-black hover:border-black shadow-sm",
    secondary: "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600",
    ghost: "bg-transparent border-transparent text-zinc-500 hover:text-[#ec1313]"
  };

  const iconSizes = { xs: 12, sm: 14, md: 16, lg: 18 };

  return (
    <button 
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 size={iconSizes[size]} className="animate-spin" />
      ) : (
        <>
          <span className="relative z-10">{label}</span>
          {Icon && (
            <Icon 
              size={iconSizes[size]} 
              strokeWidth={2}
              className="transition-transform duration-300 ease-out group-hover:translate-x-1 opacity-80 group-hover:opacity-100" 
            />
          )}
        </>
      )}
    </button>
  );
};

export default Button;