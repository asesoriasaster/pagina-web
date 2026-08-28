import { ReactNode } from 'react';

interface FloatingCardProps {
  icon: ReactNode;
  label: string;
  tone?: 'green' | 'red' | 'black';
  className?: string;
  delay?: string;
}

const toneStyles: Record<string, string> = {
  green: 'text-aster-green bg-aster-greenSoft',
  red: 'text-aster-red bg-red-50',
  black: 'text-aster-black bg-aster-soft',
};

export default function FloatingCard({ icon, label, tone = 'black', className = '', delay = '0s' }: FloatingCardProps) {
  return (
    <div
      className={`hidden md:flex items-center gap-2.5 rounded-2xl bg-white shadow-cardHover px-4 py-3 absolute animate-floaty ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className={`flex items-center justify-center h-8 w-8 rounded-full shrink-0 ${toneStyles[tone]}`}>
        {icon}
      </span>
      <span className="text-sm font-semibold text-aster-black whitespace-nowrap">{label}</span>
    </div>
  );
}
