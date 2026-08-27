import type { ReactNode } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  title: ReactNode;
  subtitle: ReactNode;
  position?: 'left' | 'right';
}

export default function EditorialImage({ src, alt, title, subtitle, position = 'left' }: EditorialImageProps) {
  return (
    <div className="relative mt-12 overflow-hidden rounded-[28px] border border-gray-100 bg-aster-black shadow-card aspect-[16/10] sm:aspect-[16/9]">
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" decoding="async" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />
      <div className={`absolute inset-y-0 flex items-center p-6 sm:p-10 lg:p-14 ${position === 'right' ? 'right-0 justify-end' : 'left-0'}`}>
        <div className={`max-w-[min(34rem,78vw)] ${position === 'right' ? 'text-right' : ''}`}>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.12] tracking-tight text-white [&_strong]:text-aster-green">
            {title}
          </h3>
          <p className="mt-4 max-w-xl text-sm sm:text-base lg:text-lg font-medium leading-relaxed text-white/95 [&_strong]:text-aster-green">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
