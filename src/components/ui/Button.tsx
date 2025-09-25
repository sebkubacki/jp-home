import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: ButtonProps) => {
  const baseStyles = "px-8 py-3 text-sm uppercase tracking-wide font-semibold transition-all duration-300";
  
  const variants = {
    primary: "bg-black text-white hover:bg-red-600 hover:-translate-y-0.5 hover:shadow-lg",
    secondary: "bg-gray-100 text-black hover:bg-gray-200",
    outline: "border border-gray-300 text-black hover:border-black hover:bg-gray-50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};