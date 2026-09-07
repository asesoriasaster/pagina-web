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
    <div className="relative mt-8 overflow-hidden rounded-2xl bg-aster-black sm:rounded-3xl">
      <img src={src} alt={alt} className="h-56 w-full object-cover object-center sm:absolute sm:inset-0 sm:h-full" loading="lazy" decoding="async" />
      <div className={`pointer-events-none absolute inset-0 hidden sm:block ${position === 'right' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-black/80 via-black/45 to-black/10`} />
      <div className={`relative flex p-5 sm:min-h-[360px] sm:items-center sm:p-8 lg:min-h-[420px] lg:p-10 ${position === 'right' ? 'sm:justify-end' : ''}`}>
        <div className={`max-w-xl ${position === 'right' ? 'sm:text-right' : ''}`}>
          <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl [&_strong]:text-[#A3E65A]">
            {title}
          </h3>
          <p className="mt-3 text-base font-medium leading-relaxed text-white/95 sm:text-lg [&_strong]:text-[#A3E65A]">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
