import type { ReactNode } from 'react';

interface FloatingCardProps {
  icon: ReactNode;
  label: string;
  tone?: 'green' | 'red' | 'black';
  className?: string;
  delay?: string;
}

const toneStyles = {
  green: 'text-aster-green bg-aster-greenSoft',
  red: 'text-aster-red bg-red-50',
  black: 'text-aster-black bg-aster-soft',
};

export default function FloatingCard({
  icon,
  label,
  tone = 'black',
  className = '',
  delay = '0s',
}: FloatingCardProps) {
  return (
    <div
      className={`absolute items-center gap-2 rounded-2xl border border-white/80 bg-white/95 px-3.5 py-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.10)] backdrop-blur-sm animate-floaty ${className}`}
      style={{ animationDelay: delay }}
    >
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${toneStyles[tone]}`}
      >
        {icon}
      </span>

      <span className="whitespace-nowrap text-[13px] font-semibold text-aster-black">
        {label}
      </span>
    </div>
  );
}