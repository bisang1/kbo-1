import React from 'react';

interface AdBannerProps {
  size: 'large' | 'medium' | 'responsive';
  position: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ size, position }) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'large':
        return 'h-24 text-lg';
      case 'medium':
        return 'h-20 text-base';
      case 'responsive':
        return 'h-16 md:h-20 text-sm md:text-base';
      default:
        return 'h-20 text-base';
    }
  };

  return (
    <div className={`bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-xl mx-auto my-8 ${getSizeClasses()} flex items-center justify-center`}>
      <div className="text-white/60 font-medium">
        [{size === 'large' ? '728x90' : size === 'medium' ? '300x250' : '반응형'}] 에드센스 광고 위치 - {position}
      </div>
    </div>
  );
};

export default AdBanner;