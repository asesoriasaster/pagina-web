import Reveal from '@/components/Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
        {eyebrow && (
          <span className="inline-block text-sm font-semibold tracking-wide text-aster-green uppercase mb-3">
            {eyebrow}
          </span>
        )}
        <h2
          className={`text-3xl sm:text-4xl font-extrabold leading-[1.15] tracking-tight ${
            dark ? 'text-white' : 'text-aster-black'
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-4 text-base sm:text-lg leading-relaxed ${
              dark ? 'text-gray-300' : 'text-aster-gray'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}
