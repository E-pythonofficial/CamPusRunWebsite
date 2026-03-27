import { MapPin } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  light?: boolean;
}

const sizeMap = {
  sm: { icon: 20, text: '1.125rem' },
  md: { icon: 28, text: '1.5rem' },
  lg: { icon: 40, text: '2.25rem' },
};

const Logo = ({ size = 'md', light = false }: LogoProps) => {
  const s = sizeMap[size];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ position: 'relative' }}>
        <MapPin size={s.icon} style={{ color: '#F97316' }} strokeWidth={2.5} />
        <svg
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -60%)',
          }}
          width={s.icon * 0.4}
          height={s.icon * 0.4}
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3 8H13M9 4L13 8L9 12"
            stroke="#F97316"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontWeight: 'bold',
          fontSize: s.text,
          color: light ? '#FFFFFF' : '#0F1C2E',  // white or navy
          letterSpacing: '0.05em',
        }}
      >
        Campus<span style={{ color: '#F97316' }}>Run</span>
      </span>
    </div>
  );
};

export default Logo;