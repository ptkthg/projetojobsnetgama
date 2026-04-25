import { useState } from 'react';

function FallbackAvatar({ sizeClass = 'h-40 w-40', textClass = 'text-4xl' }) {
  return (
    <div
      className={`${sizeClass} grid place-items-center rounded-full border border-cyantech/60 bg-blueteam text-white shadow-card`}
      aria-label="Avatar com iniciais PT"
    >
      <span className={`font-semibold tracking-wide ${textClass}`}>PT</span>
    </div>
  );
}

export default function ProfileAvatar({ src, alt, sizeClass, textClass }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return <FallbackAvatar sizeClass={sizeClass} textClass={textClass} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${sizeClass} rounded-full border border-cyantech/60 object-cover shadow-card`}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
}
